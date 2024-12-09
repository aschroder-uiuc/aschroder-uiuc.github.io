function getRecommendationText(recommendation, subject) {
  let displayText;
  if (!recommendation) {
    displayText = "No recommendation found, try again with a different topic.";
  } else {
    amazonUrl = getAmazonUrlForBook(recommendation);
    displayText = `
                    <h2>Recommended book for subject: ${subject}</h2>
                    <h2>${recommendation.title} by ${recommendation.author}</h2>
                    <h3>Description:</h3>
                    <p>${recommendation.description}</p>
                    <h3>Amazon link <a href=${amazonUrl} target="_blank">here</a></h3>
                  `;
  }
  return displayText;
}

function recommendBooks(
  wikipediaText,
  bookList,
  searchTerm,
  genre,
  location,
  subject,
) {
  const idx = lunr(function () {
    this.field("title");
    this.field("body");
    this.field("author");
    this.field("genre");
    this.field("setting");
    this.field("subject");
    this.field("id");

    for (let book of bookList) {
      this.add({
        title: book.title,
        body: book.description,
        author: book.author,
        genre: book.genre,
        setting: book.setting,
        subject: book.subject,
        id: book.id,
      });
    }
  });

  const cleanedText = cleanInputText(wikipediaText);

  const fullSearchString = assembleSearchText(
    cleanedText,
    searchTerm,
    genre,
    location,
    subject,
  );
  const results = idx.search(fullSearchString);
  console.log(results);
  if (results.length === 0) {
    return null;
  }

  const matchedBook = bookList.find(
    (book) => book.id.toString() === results[0].ref,
  );

  return matchedBook;
}

function cleanInputText(wikipediaText) {
  //TODO figure out how to handle topics that have formulas
  let cleanedText = wikipediaText.replace(/:/g, ""); // colon is a keyword for lunr, so remove from incoming text
  cleanedText = cleanedText.split(/\s+/).slice(0, 1000).join(" ");
  return cleanedText;
}

function assembleSearchText(cleanedText, searchTerm, genre, location, subject) {
  let prefix =
    searchTerm
      .split(" ")
      .map((word) => `${word}^10`)
      .join(" ") + " ";
  cleanedText = cleanedText + " " + prefix + "\n";
  if (genre) {
    cleanedText = cleanedText + `genre: ${genre}^20 \n`;
  }
  if (location) {
    cleanedText = cleanedText + `setting: ${location}^20 \n`;
  }
  if (subject) {
    cleanedText = cleanedText + `subject: ${subject}^20 \n`;
  }
  return cleanedText;
}

function getAmazonUrlForBook(recommendation) {
  const baseAmazonUrl = "https://www.amazon.com/s?k=";
  const titleWords = recommendation.title.split(" ");
  const authorWords = recommendation.author.split(" ");
  let bookParams = "";
  for (const word of titleWords) {
    bookParams = bookParams + `${word}+`;
  }
  for (const word of authorWords) {
    bookParams = bookParams + `${word}+`;
  }
  bookParams = bookParams + "book";
  return baseAmazonUrl + bookParams;
}
