
function getRecommendationText(recommendation) {
  let displayText;
  const subject = "some subject here" //TODO replace if i can get this to work
  if (!recommendation) {
    displayText = "No recommendation found, try again with a different topic.";
  }
  displayText = `
                  <h2>Recommended book for subject: ${subject}</h2>
                  <h2>${recommendation.title} by ${recommendation.author}</h2>
                  <h3>Description:</h3>
                  <p>${recommendation.description}</p>
                `;

  return displayText;
}

function recommendBooks(wikipediaText, bookList) {
  const idx = lunr(function () {
    this.field("title");
    this.field("body");
    this.field("author");
    this.field("genre");
    this.field("id");

    for (let book of bookList) {
      this.add({
        title: book.title,
        body: book.description,
        author: book.author,
        genre: book.genre,
        id: book.id,
      });
    }
  });

  const cleanedText = wikipediaText.replace(/:/g, "");
  const results = idx.search(cleanedText);

  const matchedBook = bookList.find(
    (book) => book.id.toString() === results[0].ref,
  );

  return matchedBook;
}
