/* Fills a project detail page (title, description, images) from works-data.js.
   The page sets window.WORK_DETAIL = { category, prefix, label, backUrl, backText } first. */
(() => {
  const cfg = window.WORK_DETAIL || {};
  const params = new URLSearchParams(location.search);
  const category = params.get('category') || cfg.category;
  const list = (window.OTHER_WORKS && window.OTHER_WORKS[category]) || [];
  const total = Math.max(1, list.length);
  const raw = params.get('project') || '01';
  const n = /^\d{1,2}$/.test(raw) ? Math.min(total, Math.max(1, Number(raw))) : 1;
  const pad = v => String(v).padStart(2, '0');
  const work = list[n - 1];
  const prefix = cfg.prefix || '';
  const label = category === 'graphic' ? 'Graphic' : category === 'object' ? 'Object' : (cfg.label || 'Archive');
  const title = work ? work.title : `Project ${pad(n)}`;
  const $ = id => document.getElementById(id);

  document.title = `${title} — SEOHYEON WI™`;
  $('projectTitle').textContent = title;
  const desc = document.querySelector('.head .desc');
  if (desc) desc.textContent = (work && work.desc) || '';
  $('projectMeta').textContent = `${pad(n)} / ${pad(total)} — ${[label, work && work.type, work && work.year].filter(Boolean).join(', ')}`;
  const next = n % total + 1;
  const keepCat = params.get('category') ? `&category=${category}` : '';
  $('nextLink').href = `project-detail.html?project=${pad(next)}${keepCat}`;

  // back link and the active item in the top bar
  const back = $('backLink');
  if (back && cfg.backUrl) { back.href = cfg.backUrl; back.textContent = cfg.backText; }
  if (category === 'graphic') {
    document.querySelectorAll('.site-cats a').forEach(a => {
      const on = a.textContent.trim() === 'Graphic';
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }

  // images: the first one is the cover, the rest go below it
  const images = work ? work.images.filter(Boolean).map(src => prefix + src) : [];
  if (!images.length) return;
  const hero = document.querySelector('.hero');
  hero.innerHTML = `<img src="${images[0]}" alt="${title}">`;
  hero.classList.add('has-image');
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = images.slice(1).map((src, i) =>
    `<div class="shot has-image"><img src="${src}" alt="${title}, image ${i + 2}" loading="lazy"></div>`).join('');
  gallery.classList.toggle('is-empty', images.length < 2);
})();
