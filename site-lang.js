/* Language switch for the detail pages: English (default) / 한국어.
   Only the work descriptions change — titles, menus and labels stay in English.
   The choice is remembered (localStorage) and can be forced with ?lang=ko / ?lang=en.
   Load this before ko-text.js and before the page's own detail script. */
(() => {
  const KEY = 'site-lang';             // the same key the intro's 한국어 / English choice (index.html) saves
  const q = new URLSearchParams(location.search).get('lang');
  let saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  const lang = q === 'ko' || q === 'en' ? q : (saved === 'ko' ? 'ko' : 'en');
  if (q) { try { localStorage.setItem(KEY, q); } catch (e) {} }
  window.SiteLang = { lang };
  document.documentElement.classList.toggle('lang-ko', lang === 'ko');

  // a small "EN / KO" switch at the end of the top-right menu
  const mount = () => {
    const nav = document.querySelector('.site-info');
    if (!nav || nav.querySelector('.lang-switch')) return;
    const box = document.createElement('span');
    box.className = 'lang-switch';
    box.setAttribute('aria-label', 'Language');
    ['en', 'ko'].forEach((l, i) => {
      if (i) box.insertAdjacentHTML('beforeend', '<span class="lang-sep">/</span>');
      const b = document.createElement('button');
      b.type = 'button'; b.textContent = l === 'en' ? 'EN' : 'KO';
      b.lang = l; b.className = l === lang ? 'is-active' : '';
      b.setAttribute('aria-pressed', l === lang);
      b.addEventListener('click', () => {
        if (l === lang) return;
        try { localStorage.setItem(KEY, l); } catch (e) {}
        const u = new URL(location.href); u.searchParams.delete('lang');
        location.replace(u.href);
      });
      box.appendChild(b);
    });
    nav.appendChild(box);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();

  const css = document.createElement('style');
  css.textContent =
    '.lang-switch{display:inline-flex;gap:4px;align-items:baseline;margin-left:8px}' +
    '.lang-switch button{font:inherit;color:#8c8c8c;background:none;border:0;padding:0;cursor:pointer}' +
    '.lang-switch button:hover,.lang-switch button.is-active{color:inherit}' +
    '.lang-switch button.is-active{text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1px}' +
    '.lang-sep{color:#bdbdbd}' +
    '.lang-ko .desc,.lang-ko #workDesc{word-break:keep-all;line-height:1.6}';
  document.head.appendChild(css);
})();
