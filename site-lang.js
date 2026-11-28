/* Language switch: English (default) / 한국어 — the "EN / KO" in the top-right menu of every page.
   Work descriptions (detail pages) and the About / Contact text change; menus and labels stay in English.
   Load it in the <head> where the page has .t-ko / .t-en text, so the other language never flashes.
   The choice is remembered (localStorage) and can be forced with ?lang=ko / ?lang=en.
   Load this before ko-text.js and before the page's own detail script. */
(() => {
  const KEY = 'site-lang';             // the same key the intro's 한국어 / English choice (index.html) saves
  const q = new URLSearchParams(location.search).get('lang');
  let saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  let lang = q === 'ko' || q === 'en' ? q : (saved === 'ko' ? 'ko' : 'en');
  if (q) { try { localStorage.setItem(KEY, q); } catch (e) {} }
  window.SiteLang = { lang };
  const root = document.documentElement;
  const apply = () => { root.classList.toggle('lang-ko', lang === 'ko'); root.lang = lang; root.dataset.lang = lang; };
  apply();

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
        // pages whose text is built by a script (work details) reload; the others just swap at once
        if (window.KO_TEXT || u.href !== location.href) { location.replace(u.href); return; }
        lang = window.SiteLang.lang = l; apply();
        box.querySelectorAll('button').forEach(x => { const on = x.lang === l; x.classList.toggle('is-active', on); x.setAttribute('aria-pressed', on); });
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
    // text written in both languages (About, Contact): .t-ko / .t-en, only the chosen one shows
    'html:not(.lang-ko) .t-ko,html.lang-ko .t-en{display:none!important}' +
    // Korean: wrap lines between words (어절), never inside a word — on every page
    'html.lang-ko,:lang(ko){word-break:keep-all;overflow-wrap:break-word}' +
    '.lang-ko .desc,.lang-ko #workDesc{line-height:1.6}' +
    // phones: the Korean descriptions break where the phrase pauses (the \n in ko-text.js); computers keep one flowing text
    '@media (max-width:700px){.lang-ko #workDesc,.lang-ko .wl-lead,.lang-ko .wl-p,.lang-ko .story p{white-space:pre-line}}';
  document.head.appendChild(css);
})();
