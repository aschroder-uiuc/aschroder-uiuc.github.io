async function getWikipediaText(subject) {
    let wikipediaText = "";
  
    const wikipediaApiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&gsrsearch=${encodeURIComponent(subject)}&explaintext=1&gsrlimit=1&origin=*`;
  
    await fetch(wikipediaApiUrl)
      .then((response) => response.json())
      .then((data) => {
        const pages = data.query.pages;
        const page = Object.values(pages)[0];
        wikipediaText = page.extract || "No Wikipedia result found.";
      });
    return wikipediaText;
  }
  