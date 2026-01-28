/* app.js — VERRE
   Static site renderer for:
   - Home (index.html)
   - Events list (events.html)
   - Artists list (artists.html)
   - News feed (news.html)
   - Event detail (event.html?id=...)
   - Artist detail (artist.html?id=...)
*/

const $ = (sel) => document.querySelector(sel);
const qs = (key) => new URLSearchParams(location.search).get(key);

function safe(str) {
  return String(str ?? "").replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[m]));
}

function byId(arr, id) {
  return (arr || []).find(x => x.id === id);
}

function fmtDate(iso) {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

/* Responsive: Instructions pill */
function updatePillText(){
  const pill = document.getElementById("instructionsPill");
  if (pill) {
    if (window.innerWidth <= 430) {
      pill.textContent = 'Tap an artist for more info';
    } else {
      pill.textContent = 'Click an artist for links + tracked events';
    }
  }
}

updatePillText();
window.addEventListener('resize', updatePillText)

/* ✅ Active nav works on list + detail pages */
function setActiveNav() {
  const page = (document.body.getAttribute("data-page") || "").toLowerCase();
  document.querySelectorAll(".menu a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    const isActive =
      ((page === "events" || page === "event") && href.includes("events")) ||
      ((page === "artists" || page === "artist") && href.includes("artists")) ||
      (page === "news" && href.includes("news")) ||
      (page === "press" && href.includes("press"));
    if (isActive) a.classList.add("active");
  });
}

function setLastUpdated() {
  const el = $("#lastUpdated");
  if (el && window.VERRE_DATA?.lastUpdated) el.textContent = window.VERRE_DATA.lastUpdated;
}

/* ---------- Data helpers ---------- */

function getUpcomingEvents() {
  const now = new Date();
  const events = (window.VERRE_DATA?.events || []).slice();
  events.sort((a, b) => (a.date || "").localeCompare(b.date || ""));
  return events.filter(e => {
    if (!e.date) return true;
    const d = new Date(`${e.date}T00:00:00`);
    return d >= new Date(now.getFullYear(), now.getMonth(), now.getDate());
  });
}

function eventAreaName(e) {
  const area = byId(window.VERRE_DATA?.areas, e.area);
  return area?.name || e.area || "";
}

/* ---- Artist image resolver (supports relative paths or full URLs) ---- */
function getArtistImageSrc(a) {
  const src = a?.image || a?.imageUrl || a?.photo || "";
  if (!src) return "";
  return String(src);
}

/* ---- News image resolver (supports relative paths or full URLs) ---- */
function getNewsImageSrc(n) {
  const src = n?.image || n?.imageUrl || "";
  if (!src) return "";
  return String(src);
}

/* ---- Search ---- */

function artistMatchesSearch(a, q) {
  if (!q) return true;
  const hay = [
    a.name,
    a.origin,
    a.background,
    ...(a.tags || []),
    a.blurb
  ].join(" ").toLowerCase();
  return hay.includes(q.toLowerCase());
}

function eventMatchesSearch(e, q, areaId) {
  const areaOk = !areaId || e.area === areaId;
  if (!areaOk) return false;
  if (!q) return true;
  const hay = [
    e.title,
    e.venue,
    e.address,
    ...(e.lineup || []),
    e.notes
  ].join(" ").toLowerCase();
  return hay.includes(q.toLowerCase());
}

function newsMatchesSearch(n, q) {
  if (!q) return true;
  const hay = [
    n.title,
    n.type,
    n.blurb,
    n.body,
    ...(n.tags || [])
  ].join(" ").toLowerCase();
  return hay.includes(q.toLowerCase());
}

/* ---------- Render blocks ---------- */

function renderEventRow(e) {
  const area = eventAreaName(e);
  const lineup = (e.lineup || []).join(", ");

  const thumb = e.flyerUrl
    ? `<img
         src="${safe(e.flyerUrl)}"
         alt="${safe(e.title)} flyer"
         loading="lazy"
         style="width:100%; height:100%; object-fit:cover; border-radius:12px; display:block;"
       />`
    : `EVENT`;

  return `
    <div class="item">
      <div class="thumb" style="overflow:hidden;">
        ${thumb}
      </div>

      <div class="info">
        <div class="title">
          <a href="event.html?id=${encodeURIComponent(e.id)}">${safe(e.title)}</a>
        </div>

        <p class="sub">
          ${safe(fmtDate(e.date))}${e.time ? ` • ${safe(e.time)}` : ""} • ${safe(area)}
        </p>

        <p class="sub">
          ${safe(e.venue || "")}${e.venue && e.address ? " • " : ""}${safe(e.address || "")}
        </p>

        ${lineup ? `<div class="row"><span class="chip">${safe(lineup)}</span></div>` : ""}
      </div>
    </div>
  `;
}

function renderArtistRow(a) {
  const tags = (a.tags || []).slice(0, 4);
  const img = getArtistImageSrc(a);

  const thumb = img
    ? `<img src="${safe(img)}" alt="${safe(a.name)}" loading="lazy" style="width:100%; height:100%; object-fit:cover; border-radius:12px;" />`
    : `ARTIST`;

  return `
    <div class="item">
      <div class="thumb" style="overflow:hidden;">
        ${thumb}
      </div>
      <div class="info">
        <div class="title">
          <a href="artist.html?id=${encodeURIComponent(a.id)}">${safe(a.name)}</a>
        </div>
        <p class="sub">${safe(a.blurb || "")}</p>
        <div class="row">
          ${tags.map(t => `<span class="chip">${safe(t)}</span>`).join("")}
          ${a.links?.instagram ? `<a class="chip" href="${safe(a.links.instagram)}" target="_blank" rel="noopener">Instagram</a>` : ""}
        </div>
      </div>
    </div>
  `;
}

/* ---- NEW: News row renderer (Tumblr-ish) ---- */
function renderNewsRow(n) {
  const img = getNewsImageSrc(n);

  const date = n.date ? fmtDate(n.date) : "";
  const typeChip = n.type ? `<span class="chip">${safe(n.type)}</span>` : "";

  let artistLink = "";
  if (n.artistId) {
    const a = (window.VERRE_DATA?.artists || []).find(x => x.id === n.artistId);
    if (a) artistLink = ` • <a href="artist.html?id=${encodeURIComponent(a.id)}">${safe(a.name)}</a>`;
  }

  const tags = (n.tags || []).slice(0, 8);

  const media = img
    ? `
      <div style="margin:10px 0 12px; border-radius:16px; overflow:hidden; background:rgba(0,0,0,.04);">
        <img src="${safe(img)}" alt="${safe(n.title)}" loading="lazy" style="display:block; width:100%; height:auto;" />
      </div>
    `
    : ``;

  const links = (n.links || []).map(l =>
    `<a class="chip" href="${safe(l.url)}" target="_blank" rel="noopener">${safe(l.label)}</a>`
  ).join("");

  return `
    <div class="item">
      <div class="thumb">POST</div>
      <div class="info">
        <div class="row" style="margin-top:0;">
          ${typeChip}
          ${date ? `<span class="chip">${safe(date)}</span>` : ``}
        </div>

        <div class="title" style="margin-top:6px;">${safe(n.title || "")}</div>

        ${n.blurb ? `<p class="sub" style="margin:6px 0 0; opacity:.95;">${safe(n.blurb)}</p>` : ``}
        ${artistLink ? `<p class="sub" style="margin:6px 0 0;">${artistLink}</p>` : ``}

        ${media}

        ${n.body ? `<p class="sub" style="margin:0; white-space:pre-wrap; line-height:1.6;">${safe(n.body)}</p>` : ``}

        <div class="row">
          ${tags.map(t => `<span class="chip">${safe(t)}</span>`).join("")}
          ${links}
        </div>
      </div>
    </div>
  `;
}

/* ---------- Pages ---------- */

function mountHome() {
  setLastUpdated();

  const homeEvents = $("#homeEvents");
  if (homeEvents) {
    const upcoming = getUpcomingEvents().slice(0, 5);
    homeEvents.innerHTML = upcoming.length
      ? upcoming.map(renderEventRow).join("")
      : `<p class="sub">No events listed yet. VERRE is building the map now.</p>`;
  }

  const homeArtists = $("#homeArtists");
  if (homeArtists) {
    const artists = (window.VERRE_DATA?.artists || []).slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 6);
    homeArtists.innerHTML = artists.length
      ? artists.map(renderArtistRow).join("")
      : `<p class="sub">No artists listed yet.</p>`;
  }

  const homeNews = $("#homeNews");
  if (homeNews) {
    const posts = (window.VERRE_DATA?.news || []).slice()
      .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
      .slice(0, 3);
    homeNews.innerHTML = posts.length
      ? posts.map(renderNewsRow).join("")
      : `<p class="sub">No news posts yet.</p>`;
  }
}

function mountEventsList() {
  setLastUpdated();

  const list = $("#eventsList");
  const search = $("#eventsSearch");
  const areaSel = $("#eventsArea");

  const areas = window.VERRE_DATA?.areas || [];
  if (areaSel && areaSel.children.length <= 1) {
    areaSel.innerHTML = `
      <option value="">All areas</option>
      ${areas.map(a => `<option value="${safe(a.id)}">${safe(a.name)}</option>`).join("")}
    `;
  }

  function paint() {
    const q = search ? search.value.trim() : "";
    const areaId = areaSel ? areaSel.value : "";
    const items = getUpcomingEvents().filter(e => eventMatchesSearch(e, q, areaId));
    list.innerHTML = items.length
      ? items.map(renderEventRow).join("")
      : `<p class="sub">No matching events yet.</p>`;
  }

  if (search) search.addEventListener("input", paint);
  if (areaSel) areaSel.addEventListener("change", paint);
  paint();
}

function mountArtistsList() {
  setLastUpdated();

  const list = $("#artistsList");
  const search = $("#artistsSearch");

  function paint() {
    const q = search ? search.value.trim() : "";
    const items = (window.VERRE_DATA?.artists || [])
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter(a => artistMatchesSearch(a, q));
    list.innerHTML = items.length
      ? items.map(renderArtistRow).join("")
      : `<p class="sub">No matching artists.</p>`;
  }

  if (search) search.addEventListener("input", paint);
  paint();
}

function mountNewsList() {
  setLastUpdated();

  const list = $("#newsList");
  const search = $("#newsSearch");

  function paint() {
    const q = search ? search.value.trim() : "";
    const items = (window.VERRE_DATA?.news || [])
      .slice()
      .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
      .filter(n => newsMatchesSearch(n, q));

    list.innerHTML = items.length
      ? items.map(renderNewsRow).join("")
      : `<p class="sub">No news posts yet.</p>`;
  }

  if (search) search.addEventListener("input", paint);
  paint();
}

function mountArtistDetail() {
  setLastUpdated();

  const id = qs("id");
  const a = (window.VERRE_DATA?.artists || []).find(x => x.id === id);
  const root = $("#detail");

  if (!root) return;
  if (!a) {
    root.innerHTML = `<p class="sub">Artist not found.</p>`;
    return;
  }

  const events = (window.VERRE_DATA?.events || []).filter(e =>
    (e.lineup || []).some(n => n.toLowerCase() === a.name.toLowerCase())
  ).sort((x, y) => (x.date || "").localeCompare(y.date || ""));

  const img = getArtistImageSrc(a);

  const actions = `
    <div class="row" style="margin-top:0">
      ${a.links?.instagram ? `<a class="btn primary" href="${safe(a.links.instagram)}" target="_blank" rel="noopener">Instagram</a>` : ""}
      <a class="btn" href="artists.html">Back to artists</a>
    </div>
  `;

  const metaChips = [
    ...(a.origin ? [`<span class="chip">${safe(a.origin)}</span>`] : []),
    ...(a.tags || []).map(t => `<span class="chip">${safe(t)}</span>`)
  ].join("");

  root.innerHTML = `
    <div class="card">
      <div class="hd">
        <h2>Artist</h2>
        <span class="chip">index</span>
      </div>

      <div class="bd">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:16px; flex-wrap:wrap;">
          <div style="display:flex; gap:14px; align-items:flex-start; min-width:260px; flex:1;">
            ${
              img
                ? `<div style="width:96px; height:96px; border-radius:14px; overflow:hidden; background:rgba(0,0,0,.04); flex:0 0 auto;">
                    <img src="${safe(img)}" alt="${safe(a.name)}" style="width:100%; height:100%; object-fit:cover;" />
                   </div>`
                : ``
            }

            <div style="min-width:220px; flex:1;">
              <h1 style="margin:0 0 6px; font-size:28px; line-height:1.1;">
                ${safe(a.name)}
              </h1>
              <p class="sub" style="margin:0;">${safe(a.blurb || "")}</p>

              <div class="row">
                ${metaChips}
              </div>

              ${
                a.background
                  ? `<p class="sub" style="margin:10px 0 0; opacity:.95;">
                      ${safe(a.background)}
                     </p>`
                  : ``
              }
            </div>
          </div>

          <div style="flex:0 0 auto; min-width:220px;">
            ${actions}
          </div>
        </div>

        <hr class="sep">

        <h3 style="margin:0 0 10px; font-size:14px; color:var(--muted); letter-spacing:.08em; text-transform:uppercase;">
          Tracked events
        </h3>

        <div class="list">
          ${events.length ? events.map(renderEventRow).join("") : `<p class="sub">No tracked events yet for this artist.</p>`}
        </div>
      </div>

      <div class="ft">Last updated: ${safe(window.VERRE_DATA?.lastUpdated || "")}</div>
    </div>
  `;
}

function mountEventDetail(){
  const id = qs("id");
  const e = (window.VERRE_DATA?.events || []).find(x => x.id === id);
  const root = $("#detail");

  if (!root) return;
  if(!e){
    root.innerHTML = `<p class="sub">Event not found.</p>`;
    return;
  }

  const areaName = eventAreaName(e);
  const lineup = (e.lineup && e.lineup.length) ? e.lineup : [];
  const isDJ = (e.notes || "").toLowerCase().includes("dj");

  const actions = `
    <div class="row" style="margin-top:0">
      ${e.ticketUrl ? `<a class="btn primary" href="${safe(e.ticketUrl)}" target="_blank" rel="noopener">Tickets</a>` : ""}
      ${e.sourceUrl ? `<a class="btn" href="${safe(e.sourceUrl)}" target="_blank" rel="noopener">Source</a>` : ""}
      <a class="btn" href="events.html">Back to events</a>
    </div>
  `;

  const linkedLineup = lineup.map(name=>{
    const artist = (window.VERRE_DATA?.artists || []).find(
      a => a.name.toLowerCase() === name.toLowerCase()
    );
    return artist
      ? `<a class="chip" href="artist.html?id=${encodeURIComponent(artist.id)}">${safe(name)}</a>`
      : `<span class="chip">${safe(name)}</span>`;
  }).join(" ");

  // ✅ NEW: flyer block
  const flyerBlock = e.flyerUrl
    ? `
      <hr class="sep">
      <h3 style="margin:0 0 10px; font-size:14px; color:var(--muted); letter-spacing:.08em; text-transform:uppercase;">
        Flyer
      </h3>
      <div style="border-radius:16px; overflow:hidden; background:rgba(0,0,0,.04);">
        <a href="${safe(e.flyerUrl)}" target="_blank" rel="noopener">
          <img
            src="${safe(e.flyerUrl)}"
            alt="${safe(e.title)} flyer"
            loading="lazy"
            style="display:block; width:100%; height:auto;"
          />
        </a>
      </div>
    `
    : ``;

  root.innerHTML = `
    <div class="card">
      <div class="hd">
        <h2>Event</h2>
        <span class="chip">tracking</span>
      </div>

      <div class="bd">
        <div style="display:flex; justify-content:space-between; gap:16px; flex-wrap:wrap;">
          <div style="flex:1; min-width:260px;">
            <div style="display:flex; align-items:flex-start; gap:10px; flex-wrap:wrap;">
              <h1 style="margin:0;">${safe(e.title)}</h1>
              ${isDJ ? `<span class="chip">DJ</span>` : ``}
            </div>

            <p class="sub" style="margin:8px 0 0;">
              ${fmtDate(e.date)}${e.time ? ` • ${safe(e.time)}` : ""} • ${safe(areaName)}
            </p>

            ${e.venue ? `<p class="sub" style="margin:6px 0 0; opacity:.9;">${safe(e.venue)}</p>` : ``}
            ${e.address ? `<p class="sub" style="margin:6px 0 0; opacity:.9;">${safe(e.address)}</p>` : ``}
          </div>

          <div style="flex:0 0 auto; min-width:220px;">
            ${actions}
          </div>
        </div>

        ${lineup.length ? `
          <hr class="sep">
          <h3 style="margin:0 0 10px; font-size:14px; color:var(--muted); letter-spacing:.08em; text-transform:uppercase;">
            Lineup
          </h3>
          <div class="row" style="margin-top:0;">
            ${linkedLineup}
          </div>
        ` : ``}

        ${flyerBlock}
      </div>

      <div class="ft">Last updated: ${safe(window.VERRE_DATA?.lastUpdated || "")}</div>
    </div>
  `;
}

/* ---------- Boot ---------- */

function boot(){
  setActiveNav();
  const page = (document.body.getAttribute("data-page") || "").toLowerCase();

  if (page === "home") return mountHome();
  if (page === "events") return mountEventsList();
  if (page === "artists") return mountArtistsList();
  if (page === "news") return mountNewsList();
  if (page === "artist") return mountArtistDetail();
  if (page === "event") return mountEventDetail();
  // press page can stay static
}

document.addEventListener("DOMContentLoaded", boot);
