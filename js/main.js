const NAV_LINKS = [
  { href: "index.html", label: "Home", page: "home" },
  { href: "destinations.html", label: "Destinations", page: "destinations" },
  { href: "packages.html", label: "Packages", page: "packages" },
  { href: "about.html", label: "About", page: "about" },
  { href: "testimonials.html", label: "Reviews", page: "testimonials" },
  { href: "contact.html", label: "Contact", page: "contact" },
];

function renderHeader() {
  const el = document.getElementById("header");
  if (!el) return;
  const current = document.body.dataset.page;
  el.className = "header";
  el.innerHTML = `
    <nav class="container nav">
      <a href="index.html" class="logo"><i class="fa-solid fa-paper-plane"></i> Voyago</a>
      <ul class="nav-links" id="navLinks">
        ${NAV_LINKS.map(l => `<li><a href="${l.href}" class="${l.page === current ? "active" : ""}">${l.label}</a></li>`).join("")}
        <li class="nav-cta"><a href="contact.html" class="btn btn-primary">Book Now</a></li>
      </ul>
      <a href="contact.html" class="btn btn-primary btn-sm">Book Now</a>
      <button class="nav-toggle" id="navToggle" aria-label="Menu" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
    </nav>`;

  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const setOpen = open => {
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.innerHTML = `<i class="fa-solid ${open ? "fa-xmark" : "fa-bars"}"></i>`;
  };
  toggle.addEventListener("click", e => {
    e.stopPropagation();
    setOpen(!links.classList.contains("open"));
  });
  links.addEventListener("click", e => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("click", e => { if (!el.contains(e.target)) setOpen(false); });
  window.addEventListener("resize", () => { if (innerWidth > 1024) setOpen(false); });
}

function renderFooter() {
  const el = document.getElementById("footer");
  if (!el) return;
  el.className = "footer";
  el.innerHTML = `
    <div class="container footer-grid">
      <div>
        <a href="index.html" class="logo"><i class="fa-solid fa-paper-plane"></i> Voyago</a>
        <p>Crafting unforgettable journeys to the world's most breathtaking destinations since 2010.</p>
        <div class="socials">
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>${NAV_LINKS.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h4>Top Destinations</h4>
        <ul>${destinations.slice(0, 5).map(d => `<li><a href="destinations.html">${d.name}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h4>Contact Us</h4>
        <ul class="footer-contact">
          <li><i class="fa-solid fa-location-dot"></i> Sheikh Zayed Rd, Dubai, UAE</li>
          <li><i class="fa-solid fa-phone"></i> +971 4 123 4567</li>
          <li><i class="fa-solid fa-envelope"></i> hello@voyago.com</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">&copy; ${new Date().getFullYear()} Voyago Travel. All rights reserved.</div>`;
}

const destinationCard = d => `
  <div class="dest-card" onclick="location.href='packages.html?q=${encodeURIComponent(d.name)}'">
    <img src="${d.img}" alt="${d.name}" loading="lazy">
    <span class="badge">${d.region}</span>
    <div class="overlay">
      <h3>${d.name}</h3>
      <div class="meta"><span><i class="fa-solid fa-location-dot"></i> ${d.country}</span><span>${d.tours} Tours</span></div>
    </div>
  </div>`;

const packageCard = p => `
  <div class="pkg-card">
    <div class="pkg-img">
      <img src="${p.img}" alt="${p.title}" loading="lazy">
      <span class="pkg-tag">${p.tag}</span>
      <button class="fav-btn" aria-label="Save"><i class="fa-solid fa-heart"></i></button>
    </div>
    <div class="pkg-body">
      <span class="pkg-loc"><i class="fa-solid fa-location-dot"></i> ${p.location}</span>
      <h3>${p.title}</h3>
      <div class="pkg-info">
        <span><i class="fa-regular fa-clock"></i>${p.days} Days</span>
        <span><i class="fa-solid fa-user-group"></i>${p.people} People</span>
        <span><i class="fa-solid fa-tag"></i>${p.type}</span>
      </div>
      <div class="pkg-foot">
        <div class="price">$${p.price.toLocaleString()} <small>/ person</small></div>
        <div class="rating"><i class="fa-solid fa-star"></i> ${p.rating} <span>(${p.reviews})</span></div>
      </div>
    </div>
  </div>`;

const reviewCard = t => `
  <div class="review">
    <div class="review-head">
      <img src="${t.img}" alt="${t.name}" loading="lazy">
      <div><h4>${t.name}</h4><span>${t.trip}</span></div>
      <i class="fa-solid fa-quote-right quote"></i>
    </div>
    <div class="stars">${'<i class="fa-solid fa-star"></i>'.repeat(5)}</div>
    <p>"${t.text}"</p>
  </div>`;

function renderList(selector, items, template, emptyText = "Nothing found.") {
  document.querySelectorAll(selector).forEach(el => {
    const limit = parseInt(el.dataset.limit, 10) || items.length;
    const list = items.slice(0, limit);
    el.innerHTML = list.length ? list.map(template).join("") : `<p class="empty">${emptyText}</p>`;
  });
}

function setupFilters(containerId, items, key, gridSelector, template) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const values = ["All", ...new Set(items.map(i => i[key]))];
  container.innerHTML = values.map((v, i) => `<button class="chip ${i === 0 ? "active" : ""}" data-value="${v}">${v}</button>`).join("");
  container.addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    container.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    const v = chip.dataset.value;
    renderList(gridSelector, v === "All" ? items : items.filter(i => i[key] === v), template);
  });
}

function setupPackagesSearch() {
  const grid = document.querySelector("[data-packages-page]");
  if (!grid) return;
  const q = new URLSearchParams(location.search).get("q");
  if (!q) return;
  const term = q.toLowerCase();
  const results = packages.filter(p => (p.title + p.location).toLowerCase().includes(term));
  const label = document.getElementById("searchLabel");
  if (label) label.innerHTML = `Showing results for "<strong>${q}</strong>" &middot; <a href="packages.html" class="view-all">Clear</a>`;
  renderList("[data-packages-page]", results, packageCard, `No packages found for "${q}".`);
}

function setupForms() {
  const search = document.getElementById("searchForm");
  if (search) {
    search.addEventListener("submit", e => {
      e.preventDefault();
      const q = search.querySelector("[name=destination]").value.trim();
      location.href = "packages.html" + (q ? `?q=${encodeURIComponent(q)}` : "");
    });
  }

  document.querySelectorAll(".newsletter").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      form.querySelector("input").value = "";
      form.querySelector("button").textContent = "Subscribed!";
    });
  });

  const contact = document.getElementById("contactForm");
  if (contact) {
    contact.addEventListener("submit", e => {
      e.preventDefault();
      contact.reset();
      document.getElementById("formMsg").style.display = "block";
    });
  }

  document.addEventListener("click", e => {
    const fav = e.target.closest(".fav-btn");
    if (fav) fav.classList.toggle("active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderList("[data-destinations]", destinations, destinationCard);
  renderList("[data-packages]", packages, packageCard);
  renderList("[data-packages-page]", packages, packageCard);
  renderList("[data-testimonials]", testimonials, reviewCard);
  setupFilters("destFilters", destinations, "region", "[data-destinations]", destinationCard);
  setupFilters("pkgFilters", packages, "type", "[data-packages-page]", packageCard);
  setupPackagesSearch();
  setupForms();
});
