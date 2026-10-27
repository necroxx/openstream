const grid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const resultCount = document.getElementById("resultCount");
const dialog = document.getElementById("playerDialog");
const playerFrame = document.getElementById("playerFrame");
const playerTitle = document.getElementById("playerTitle");
const playerDescription = document.getElementById("playerDescription");
const sourceLink = document.getElementById("sourceLink");

function safeText(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[ch]));
}

function renderMovies(query = "") {
  const q = query.trim().toLowerCase();
  const matches = window.MOVIES.filter(movie =>
    [movie.title, movie.year, movie.genre, movie.description].join(" ").toLowerCase().includes(q)
  );
  grid.innerHTML = matches.map(movie => `
    <button class="movie-card" type="button" data-movie-id="${safeText(movie.id)}" aria-label="Open ${safeText(movie.title)}">
      <span class="poster" data-mark="${safeText(movie.mark)}" style="--c1:${safeText(movie.colors[0])};--c2:${safeText(movie.colors[1])}">
        <span class="poster-label">${safeText(movie.label)}</span>
      </span>
      <span class="movie-title">${safeText(movie.title)}</span>
      <span class="movie-meta"><span>${safeText(movie.year)}</span><span class="genre-pill">${safeText(movie.genre)}</span></span>
    </button>`).join("");
  emptyState.hidden = matches.length !== 0;
  resultCount.textContent = q ? `${matches.length} result${matches.length === 1 ? "" : "s"}` : "Browse the collection →";
}

function openMovie(id) {
  const movie = window.MOVIES.find(item => item.id === id);
  if (!movie) return;
  playerTitle.textContent = movie.title;
  playerDescription.textContent = movie.description;
  sourceLink.href = movie.sourceUrl || "https://archive.org/details/movies";
  playerFrame.replaceChildren();
  if (movie.archiveId) {
    const iframe = document.createElement("iframe");
    iframe.src = `https://archive.org/embed/${encodeURIComponent(movie.archiveId)}`;
    iframe.title = `${movie.title} video player`;
    iframe.allow = "autoplay; fullscreen; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    playerFrame.appendChild(iframe);
  } else {
    const message = document.createElement("div");
    message.style.cssText = "height:100%;display:grid;place-items:center;padding:25px;text-align:center;color:#aab9ca";
    message.textContent = "Add a verified Internet Archive identifier to catalog.js to enable this movie player.";
    playerFrame.appendChild(message);
  }
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}

grid.addEventListener("click", event => {
  const card = event.target.closest("[data-movie-id]");
  if (card) openMovie(card.dataset.movieId);
});
searchInput.addEventListener("input", () => renderMovies(searchInput.value));
document.getElementById("closePlayer").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => { playerFrame.replaceChildren(); });
document.getElementById("exploreBtn").addEventListener("click", () => {
  document.getElementById("classics").scrollIntoView({ behavior: "smooth" });
});
renderMovies();
