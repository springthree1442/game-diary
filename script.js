const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function renderProfile() {
  $("#game-title").textContent = gameData.profile.title;
  $("#game-subtitle").textContent = gameData.profile.subtitle;
  $("#game-intro").textContent = gameData.profile.introduction;
}

function renderStats() {
  const stats = [
    ["등장인물", gameData.characters.length],
    ["챕터", gameData.chapters.length],
    ["타임라인", gameData.timeline.length],
    ["조직", new Set(gameData.characters.map(c => c.organization)).size]
  ];

  $("#stats").innerHTML = stats.map(([label, value]) => `
    <div class="stat">
      <span class="meta">${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");
}

function renderRecent() {
  $("#recent-list").innerHTML = gameData.chapters.slice(0, 2).map(item => `
    <article class="card">
      <p class="meta">${item.act}</p>
      <h3>${item.chapter}</h3>
      <p>${item.summary}</p>
      <span class="status">${item.status} · ${item.updated}</span>
    </article>
  `).join("");
}

function renderCharacters(filter = "전체") {
  const list = filter === "전체"
    ? gameData.characters
    : gameData.characters.filter(c => c.organization === filter);

  $("#character-list").innerHTML = list.map(character => `
    <article class="card">
      <p class="meta">${character.organization} · ${character.role}</p>
      <h3>${character.name}</h3>
      <p>${character.description}</p>
      <div class="tags">
        ${character.tags.map(tag => `<span class="tag">#${tag}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderFilters() {
  const organizations = ["전체", ...new Set(gameData.characters.map(c => c.organization))];
  $("#character-filters").innerHTML = organizations.map((name, index) => `
    <button class="filter ${index === 0 ? "active" : ""}" data-filter="${name}">
      ${name}
    </button>
  `).join("");

  $$(".filter").forEach(button => {
    button.addEventListener("click", () => {
      $$(".filter").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      renderCharacters(button.dataset.filter);
    });
  });
}

function renderChapters() {
  $("#chapter-list").innerHTML = gameData.chapters.map(item => `
    <article class="card">
      <p class="meta">${item.act}</p>
      <h3>${item.chapter}</h3>
      <p>${item.summary}</p>
      <span class="status">${item.status} · ${item.updated}</span>
    </article>
  `).join("");
}

function renderTimeline() {
  $("#timeline-list").innerHTML = gameData.timeline.map(item => `
    <article class="timeline-item">
      <p class="meta">${item.date}</p>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function setupTabs() {
  $$(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      $$(".tab").forEach(btn => btn.classList.remove("active"));
      $$(".page").forEach(page => page.classList.remove("active-page"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.page).classList.add("active-page");
    });
  });
}

renderProfile();
renderStats();
renderRecent();
renderFilters();
renderCharacters();
renderChapters();
renderTimeline();
setupTabs();
