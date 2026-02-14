const arxivID = "Badhani,H";
const container = document.getElementById("arxiv-list");

fetch(`https://export.arxiv.org/api/query?search_query=au:${arxivID}&sortBy=submittedDate&sortOrder=descending&max_results=5`)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    const entries = data.querySelectorAll("entry");
    container.innerHTML = "";

    entries.forEach(entry => {
      const title = entry.querySelector("title").textContent;
      const link = entry.querySelector("id").textContent;
      const summary = entry.querySelector("summary").textContent;

      const div = document.createElement("div");
      div.className = "arxiv-item";
      div.innerHTML = `
        <h3><a href="${link}" target="_blank">${title}</a></h3>
        <p>${summary.substring(0, 300)}...</p>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => {
    container.innerHTML = "Unable to load arXiv entries.";
  });
