function getRecommendationText(recommendation, subject) {
    let displayText;
    if (!recommendation) {
      displayText = "No recommendation found, try again with a different topic.";
    } else {
      displayText = `
                    <h2>Recommended book for subject: ${subject}</h2>
                    <h2>${recommendation.title} by ${recommendation.author}</h2>
                    <h3>Description:</h3>
                    <p>${recommendation.description}</p>
                  `;
    }
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
  
    const cleanedText = cleanInputText(wikipediaText)
    const results = idx.search(cleanedText);
  
    if (results.length === 0) {
      return null;
    }
  
    const matchedBook = bookList.find(
      (book) => book.id.toString() === results[0].ref,
    );
  
    return matchedBook;
  }

  function cleanInputText(wikipediaText) {
    console.log(wikipediaText)
    //TODO figure out how to handle topics that have formulas
    let cleanedText = wikipediaText.replace(/:/g, ""); // colon is a keyword for lunr, so remove from incoming text
    return cleanedText;
  }