// pages-list.js

document.addEventListener("DOMContentLoaded", () => {
  renderPagesTable();
});

function renderPagesTable() {
  const tbody = document.getElementById("pagesTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";

  pages.forEach(page => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td><span class="page-id">${page.id}</span></td>

      <td>
        <span class="page-name">${page.title}</span>
      </td>

      <td>
        ${renderLanguages(page)}
      </td>

      <td>${getLatestUpdated(page)}</td>

      <td>
        <div class="action-buttons">
          <a class="btn-action btn-edit"
             href="page-content.html?id=${page.slug}&lang=DE">
            <i class="bi bi-pencil"></i>
          </a>
        </div>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function renderLanguages(page) {
  const langs = (page.contents || []).map(c => c.lang);  // ["DE","EN"]
  if (!langs.length) return `<span class="text-muted">—</span>`;

  return langs
    .map(l => `<span class="badge bg-secondary me-1">${l}</span>`)
    .join("");
}

function getLatestUpdated(page) {
  const dates = (page.contents || [])
    .map(c => c.lastUpdated)
    .filter(Boolean)
    .sort()
    .reverse();
  return dates[0] || "—";
}