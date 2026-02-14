const arxivID = "Badhani_H";  // change accordingly
const container = document.getElementById("arxiv-list");

fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(
    `https://export.arxiv.org/rss/search?search_query=au:${arxivID}`
)}`)
  .then(response => response.json())
  .then(data => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data.contents, "text/xml");
    const items = xml.querySelectorAll("item");

    container.innerHTML = "";

    items.forEach(item => {
      const title = item.querySelector("title").textContent;
      const link = item.querySelector("link").textContent;
      const description = item.querySelector("description").textContent;

      const div = document.createElement("div");
      div.className = "arxiv-item";
      div.innerHTML = `
        <h3><a href="${link}" target="_blank">${title}</a></h3>
        <p>${description.substring(0, 300)}...</p>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => {
    container.innerHTML = "Unable to load arXiv entries.";
  });
