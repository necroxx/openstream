# OpenStream starter website

A free static streaming catalog. It uses HTML, CSS, and JavaScript and embeds video players from Internet Archive.

## Run it locally
1. Unzip the project.
2. Open `index.html` in a modern browser. If your browser restricts local files, run a local server:
   - Python: `python -m http.server 8000`
   - Then visit `http://localhost:8000`

## Add or edit a movie
Open `catalog.js` and add an object to `window.MOVIES`. Fields:
- `id`: unique short ID
- `title`, `year`, `genre`, `label`, `mark`
- `colors`: two CSS colors used for the poster placeholder
- `description`
- `archiveId`: the Internet Archive item identifier
- `sourceUrl`: the item's source page

For an item at `https://archive.org/details/ITEMIDENTIFIER`, the embed URL is normally `https://archive.org/embed/ITEMIDENTIFIER`. Confirm that the item exists, permits embedding, and has a playable derivative before publishing. Some entries in the starter catalog may need their identifiers or source URLs corrected; test each one and replace failed items.

## Deploy for free with GitHub Pages
1. Create/sign in to GitHub and create a new public repository, e.g. `openstream`.
2. Upload `index.html`, `styles.css`, `catalog.js`, `app.js`, and this README to the repository root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. Wait for the published URL shown in the Pages settings.

## Licensing
Do not assume that a film is public domain simply because it appears on an archive website. Verify the copyright status and license of the exact film version, including restoration, soundtrack, subtitles, and poster artwork, for the country where you publish. Keep attribution where a license requires it. Internet Archive can remove items or change availability, so test playback periodically.

## Notes
- This starter does not upload or store video files.
- It has no backend, accounts, or database.
- The posters are CSS placeholders; replace them with artwork you have rights to use if desired.
