async function getWikipediaText(subject) {
  let wikipediaText = "";
  let wikipediaTitle = "";
  const defaultText = {
    wikipediaText: null,
    wikipediaTitle: null,
  };

  const wikipediaApiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&gsrsearch=${encodeURIComponent(subject)}&explaintext=1&gsrlimit=1&origin=*`;

  await fetch(wikipediaApiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (!data.query) {
        return defaultText;
      }
      const pages = data.query.pages;
      const page = Object.values(pages)[0];
      wikipediaText = page.extract;
      wikipediaTitle = page.title;
    });
  return { wikipediaText, wikipediaTitle };
}
