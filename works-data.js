/* =========================================================
   전체 작업 목록 — Archive(전체 보기)와 Graphic 화면이 이 목록을 써요.

   카테고리: Fashion · Object · Graphic
   - Fashion 작업은 fashion-data.js 의 목록을 그대로 가져와요.
   - Object(3D·금속공예·제품) / Graphic 작업은 아래에서 수정하세요.
   - type 은 작업 종류(예: 3D, Metal Craft, Product, Poster …)예요.
   - images 에 경로를 적으면 실제 이미지가 쓰이고,
     비워두면('') 회색 임시 이미지가 표시됩니다.
   ========================================================= */
window.OTHER_WORKS = {
  object: [
    { title: 'Object 01', type: '3D',          year: '2025', images: ['', '', '', ''] },
    { title: 'Object 02', type: '3D',          year: '2025', images: ['', '', ''] },
    { title: 'Object 03', type: 'Metal Craft', year: '2025', images: ['', '', ''] },
    { title: 'Object 04', type: 'Metal Craft', year: '2024', images: ['', '', '', ''] },
    { title: 'Object 05', type: 'Product',     year: '2024', images: ['', '', ''] },
    { title: 'Object 06', type: '3D',          year: '2024', images: ['', ''] },
    { title: 'Object 07', type: 'Metal Craft', year: '2023', images: ['', '', '', ''] },
    { title: 'Object 08', type: 'Product',     year: '2023', images: ['', '', ''] },
  ],
  graphic: [
    { title: 'Graduation Exhibition', type: 'Poster · Leaflet', year: '2025', images: ['', '', ''] },
    { title: 'OFF Magazine',          type: 'Magazine Cover',   year: '2019', images: ['', ''] },
    { title: 'Brand Graphics',        type: 'Identity',         year: '2024', images: ['', '', ''] },
    { title: 'Image Map',             type: 'Research',         year: '2026', images: ['', ''] },
  ],
};

window.WorksData = (() => {
  const CATEGORY_NAMES = { fashion: 'Fashion', object: 'Object', graphic: 'Graphic' };
  const pad = n => String(n).padStart(2, '0');

  // where each work opens
  const detailUrl = (cat, n) => {
    if (cat === 'fashion') return `fashion-detail.html?project=${pad(n)}`;
    if (cat === 'object') return `portfolio_with_detail_pages/project-detail.html?project=${pad(n)}`;
    return `project-detail.html?project=${pad(n)}&category=${cat}`;
  };

  // grey stand-in images with a simple form per category
  const ARS = [[4, 5], [1, 1], [3, 4], [4, 5], [3, 2]];
  function placeholder(cat, p, i, type) {
    const [aw, ah] = cat === 'graphic' ? [[3, 4], [1, 1.414], [4, 5]][(p + i) % 3] : ARS[(p + i) % ARS.length];
    const h = 900, w = Math.round(h * aw / ah);
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const g = c.getContext('2d');
    const tone = 214 + (p * 9 + i * 7) % 30;
    g.fillStyle = `rgb(${tone},${tone},${tone})`; g.fillRect(0, 0, w, h);
    if (cat === 'graphic') {                      // a poster-like layout
      g.fillStyle = '#050505';
      g.font = `${Math.round(h * .11)}px Arial, Helvetica, sans-serif`;
      g.fillText(String.fromCharCode(65 + p), w * .08, h * .2);
      g.fillRect(w * .08, h * .62, w * .84, 2);
      g.font = `${Math.round(h * .025)}px Arial, Helvetica, sans-serif`;
      g.fillText(type || 'Graphic', w * .08, h * .68);
      g.fillStyle = 'rgba(0,0,0,.12)';
      g.fillRect(w * .5, h * .25, w * .42, h * .3);
      return { url: c.toDataURL('image/jpeg', .82), ar: aw / ah };
    }
    const cx = w * (.42 + (i % 3) * .08), cy = h * .5, r = Math.min(w, h) * (.18 + (p % 3) * .04);
    g.fillStyle = 'rgba(0,0,0,.08)';
    g.beginPath(); g.ellipse(cx + r * .2, cy + r * 1.08, r * 1.1, r * .2, 0, 0, Math.PI * 2); g.fill();
    const sh = g.createRadialGradient(cx - r * .35, cy - r * .4, r * .08, cx, cy, r * 1.15);
    sh.addColorStop(0, '#fafafa'); sh.addColorStop(.55, '#bababa'); sh.addColorStop(1, '#616161');
    g.fillStyle = sh; g.beginPath();
    if (type === 'Metal Craft') { g.arc(cx, cy, r, 0, Math.PI * 2); g.arc(cx, cy, r * .55, 0, Math.PI * 2, true); }
    else if (type === 'Product') { g.roundRect ? g.roundRect(cx - r, cy - r, r * 2, r * 2, r * .3) : g.rect(cx - r, cy - r, r * 2, r * 2); }
    else g.arc(cx, cy, r, 0, Math.PI * 2);
    g.fill('evenodd');
    return { url: c.toDataURL('image/jpeg', .82), ar: aw / ah };
  }
  function loadImage(src, fallback) {
    return new Promise(res => {
      if (!src) return res(fallback());
      const im = new Image();
      im.onload = () => res({ url: im.src, ar: im.naturalWidth / im.naturalHeight || .8 });
      im.onerror = () => res(fallback());
      im.src = src;
    });
  }

  /* every work as { category, categoryName, title, year, info, url, images:[{url,ar}] } */
  async function loadAll() {
    const list = [];
    if (window.FASHION_WORKS && window.FashionData) {
      const imgs = await window.FashionData.loadAll();
      window.FASHION_WORKS.forEach((w, k) => list.push({
        category: 'fashion', categoryName: 'Fashion', title: w.title, year: w.year, info: w.info,
        url: detailUrl('fashion', +w.project || k + 1),
        images: [{ url: imgs[k].src, ar: imgs[k].aspect }],
      }));
    }
    for (const cat of Object.keys(window.OTHER_WORKS)) {
      const works = window.OTHER_WORKS[cat];
      for (let p = 0; p < works.length; p++) {
        const w = works[p];
        const images = await Promise.all(w.images.map((src, i) => loadImage(src, () => placeholder(cat, p, i, w.type))));
        list.push({
          category: cat, categoryName: CATEGORY_NAMES[cat], title: w.title, year: w.year, info: w.type || '',
          url: detailUrl(cat, p + 1), images,
        });
      }
    }
    return list;
  }

  return { CATEGORY_NAMES, loadAll };
})();
