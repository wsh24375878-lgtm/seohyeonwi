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
  const label = category === 'graphic' ? 'Graphic' : category === 'object' ? '3D' : category === 'product' ? 'Product' : (cfg.label || 'Archive');
  const title = work ? work.title : `Project ${pad(n)}`;
  const $ = id => document.getElementById(id);

  document.title = `${title} — SEOHYEON WI™`;
  $('projectTitle').textContent = title;
  const desc = document.querySelector('.head .desc');
  if (desc) desc.textContent = (work && work.desc) || '';
  if (desc && work && window.SiteLang && window.SiteLang.lang === 'ko') wallLabel(desc, work);
  const type = work && work.type ? work.type.split(label + ' · ').join('') : '';   // "3D · Resin" under 3D → "Resin"
  $('projectMeta').textContent = `${pad(n)} / ${pad(total)} — ${[label, type, work && work.year].filter(Boolean).join(', ')}`;
  const next = n % total + 1;
  const keepCat = params.get('category') ? `&category=${category}` : '';
  $('nextLink').href = `project-detail.html?project=${pad(next)}${keepCat}`;

  // back link and the active item in the top bar
  const back = $('backLink');
  if (back && cfg.backUrl) { back.href = cfg.backUrl; back.textContent = cfg.backText; }
  if (back && category === 'product') { back.href = 'index.html?cat=product'; back.textContent = '← Back to Product'; }
  if (category === 'graphic' || category === 'product') {
    const name = category === 'graphic' ? 'Graphic' : 'Product';
    document.querySelectorAll('.site-cats a').forEach(a => {
      const on = a.textContent.trim() === name;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }

  /* 한국어: the description is set like a museum wall label —
       작품명 (Korean title)
       연도 / 분류 · 재료 / 재료·크기 (short facts, one per line)
       ─
       the first sentence as a lead, then the rest in short paragraphs */
  function wallLabel(el, w) {
    const K = window.KO_TEXT || {};
    const cat = (K.categories || {})[label] || label;
    let text = (w.desc || '').trim();
    const titleKo = w.titleKo || '';
    // "어항 문진 — …": the Korean name already heads the label, so drop it from the text
    const m = text.match(/^([^—.]{1,30}) — /);
    if (m && titleKo && titleKo.startsWith(m[1].split(' ')[0])) text = text.slice(m[0].length);
    const sentences = text.split(/(?<=다\.|”\.|\.”)\s+/).map(s => s.trim()).filter(Boolean);
    // a closing phrase that isn't a sentence ("레진 출력, 핸드 피니시.", "불투명 아크릴과 철, 71 × 53 × 74 cm.") is a fact, not prose
    const facts = [w.year, [cat, w.typeKo && w.typeKo.split(' · ').filter(t => t !== cat).join(' · ')].filter(Boolean).join(' · ')];
    if (sentences.length > 1) {
      const last = sentences[sentences.length - 1];
      if (!/다\.$/.test(last) && last.length <= 48) facts.push(last.replace(/\.$/, '')), sentences.pop();
    }
    // the last sentence may hold "…했다. 불투명 아크릴과 철, 71 × 53 × 74 cm." in one piece — split off the size line
    const tail = sentences.length && sentences[sentences.length - 1].match(/^(.*다\.)\s+([^.]*\d+\s*cm\.?)$/);
    if (tail) { sentences[sentences.length - 1] = tail[1]; facts.push(tail[2].replace(/\.$/, '')); }
    const paras = [];
    for (let i = 1; i < sentences.length; i += 2) paras.push(sentences.slice(i, i + 2).join(' '));
    const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    el.className = 'desc wall-label';
    el.innerHTML =
      (titleKo ? `<span class="wl-title">${esc(titleKo)}</span>` : '') +
      `<span class="wl-facts">${facts.filter(Boolean).map(f => `<span>${esc(f)}</span>`).join('')}</span>` +
      `<span class="wl-rule" aria-hidden="true"></span>` +
      (sentences[0] ? `<span class="wl-lead">${esc(sentences[0])}</span>` : '') +
      paras.map(p => `<span class="wl-p">${esc(p)}</span>`).join('');
    if (!document.getElementById('wallLabelCss')) {
      const css = document.createElement('style');
      css.id = 'wallLabelCss';
      css.textContent = `
        .wall-label{display:block;max-width:440px;margin-top:22px;word-break:keep-all;overflow-wrap:break-word;text-wrap:pretty}
        .wall-label>span{display:block}
        .wl-title{font-size:17px;line-height:1.4;letter-spacing:-.01em;color:#050505}
        .wl-facts{margin-top:6px;font-size:13px;line-height:1.65;color:#8c8c8c}
        .wl-facts span{display:block}
        .wl-rule{width:24px;height:1px;background:#050505;margin:20px 0 18px}
        .wl-lead{font-size:15px;line-height:1.8;color:#050505}
        .wl-p{margin-top:12px;font-size:14px;line-height:1.85;color:#333}
        @media (max-width:700px){ .wall-label{margin-top:16px} .wl-title{font-size:16px} .wl-lead{font-size:14px} .wl-p{font-size:13px} }`;
      document.head.appendChild(css);
    }
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
