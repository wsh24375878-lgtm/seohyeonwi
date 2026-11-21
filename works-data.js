/* =========================================================
   전체 작업 목록 — Archive(전체 보기)와 Graphic 화면이 이 목록을 써요.

   카테고리: Fashion · 3D · Product · Graphic
   - Fashion 작업은 fashion-data.js 의 목록을 그대로 가져와요.
   - 3D(object 목록) / Product(product 목록) / Graphic 작업은 아래에서 수정하세요.
   - product: Product 화면 가운데에 뜨는 건 누끼 이미지예요. cutouts: ['images/product/...png'] 에 배경 없는 PNG 를 적어요.
     cutouts 가 없으면 images 의 사진을 대신 써요.
   - type 은 작업 종류(예: 3D, Metal Craft, Product, Poster …)예요.
   - posters: Graphic 메인 화면에 뜨는 포스터(디자인 원본)만 적어요. 연출컷·상세컷은 images 에만 두세요.
     posters 가 비어 있는 작업은 Graphic 메인 화면에 나오지 않아요.
   - images 에 경로를 적으면 실제 이미지가 쓰이고,
     비워두면('') 회색 임시 이미지가 표시됩니다.
   ========================================================= */
window.OTHER_WORKS = {
  // Living Design — "Reconstructing fear into techwear." (3D / resin, June 2025)
  object: [
    { title: 'Reconstructing Fear', type: '3D · Resin', year: '2025',
      desc: 'A living-design project that turns the fear of the unknown into objects you carry every day — modelled in Rhino and ZBrush, printed in resin and finished by hand.',
      images: ['images/object/reconstructing-fear/01.jpg'] },
    { title: 'Bone Case — Phone', type: '3D · Phone Case', year: '2025',
      desc: 'A phone case built from the organic bone structure of the alien, shaped so the hand naturally finds its grip.',
      images: [''],
      // 3D: vase + flower + stamen from "화병 작업 stl" (Metal Living Design, 2025-1), simplified to a 5 MB .glb
      models: ['models/object/vase.glb'] },
    { title: 'Bone Case — Lighter', type: '3D · Lighter Case', year: '2025',
      desc: 'The same bone language applied to a lighter case, kept light while holding a solid outer form.',
      images: [''] },
    { title: 'Bone Case — AirPods', type: '3D · AirPods Case', year: '2025',
      desc: 'Taking apart and rebuilding a spine-like structure — familiar and uncanny at the same time.',
      images: [''] },
    { title: 'Alien Case — AirPods Max', type: '3D · Headphone Case', year: '2025',
      desc: 'An exaggerated spine that wraps the headphones like a living creature, balancing function and form.',
      images: ['', ''] },
    // furniture — 3D files rebuilt from the product photos (bent black tube + black panels)
    { title: 'Tube Chair', type: 'Furniture · Chair', year: '2025',
      desc: 'One bent steel tube draws the whole chair — a stepped backrest, a curl at the arm and a triangle at the foot — around a glossy black seat.',
      images: ['images/object/tube-chair/01.jpg'],
      models: ['models/object/tube-chair.glb'] },
    { title: 'Two-Tier Side Table', type: 'Furniture · Side Table', year: '2025',
      desc: 'Two offset black tops held by a single bent tube — a leaning leg, a looping base and a short post stepping down between the tiers.',
      images: [''],
      models: ['models/object/side-table.glb'] },
    { title: 'Glass Paperweight', type: 'Glass · Paperweight', year: '2025',
      desc: 'A clear glass block holding a snowy forest — two thin grooves cross near one corner like a window frame, so the scene reads as a view through a window.',
      images: ['01', '02', '03'].map(n => `images/object/glass-paperweight/${n}.jpg`),
      // every photo slot in the strip shows the same 3D block
      models: ['models/object/glass-paperweight.glb', 'models/object/glass-paperweight.glb', 'models/object/glass-paperweight.glb'] },
  ],
  // Product — 2D cut-out photos (no 3D). Empty for now; add works like:
  // { title: "…", type: "…", year: "2025", desc: "…", images: ["images/product/…/01.jpg"], cutouts: ["images/product/…/cutout.png"] },
  product: [
    { title: 'Basalt Umbrella', type: 'Umbrella · Tote Bag', year: '2025',
      desc: '현무암 우산 — waves crashing on black basalt rock, printed across an automatic folding umbrella, with a matching sleeve and a tote bag that carries it.',
      // 01 = front shot (cover, and the cut-out in the middle of the Product page); then open → details → folded → set
      images: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'].map(n => `images/product/basalt-umbrella/${n}.jpg`),
      cutouts: ['images/product/basalt-umbrella/01.jpg'] },
  ],
  graphic: [
    // FromW2 — goods & graphics
    { title: '2025 Wall Calendar', type: 'Poster Calendar', year: '2025',
      desc: 'A 2025 poster calendar in two editions, Columbine and Iris — flowers floating on black, styled into everyday spaces.',
      images: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'].map(n => `images/graphic/wall-calendar/${n}.jpg`),
      posters: ['images/graphic/wall-calendar/09.jpg', 'images/graphic/wall-calendar/10.jpg'] },
    { title: 'Phone Booth Aquarium', type: 'Poster · Phone Case', year: '2025',
      desc: '"From W2 sells fantasy" — goldfish drifting through an old phone booth, made into a poster, phone cases and AirPods cases.',
      images: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'].map(n => `images/graphic/phone-booth/${n}.jpg`),
      posters: ['images/graphic/phone-booth/01.jpg'] },
    { title: 'Columbine', type: 'Phone Case', year: '2025',
      desc: 'A blue columbine on glossy black, carried over from the calendar onto phone cases.',
      images: ['01', '02', '03', '04', '05'].map(n => `images/graphic/columbine/${n}.jpg`) },
    { title: '2025 Desk Calendar', type: 'Desk Calendar', year: '2025',
      desc: 'A twelve-month desk calendar with bold red month numerals on soft cream paper.',
      // 06 = the December page cropped from the 12-month sheet (05) — the cover
      images: ['06', '01', '02', '03', '04', '05'].map(n => `images/graphic/desk-calendar/${n}.jpg`),
      posters: ['images/graphic/desk-calendar/06.jpg'] },
    { title: '2025 Annual Planner', type: 'Wall Planner', year: '2025',
      desc: '年間計劃 — a one-sheet year planner for FromW2: twelve months in sky blue, weekends in pink, holidays starred, with room for the year\'s goals.',
      images: ['images/graphic/annual-planner/01.jpg'],
      posters: ['images/graphic/annual-planner/01.jpg'] },
    { title: 'CIRCULATION', type: 'Exhibition Poster', year: '2022',
      desc: 'Poster for the 2022 SSWU Fashion Industry graduation exhibition — light and reflection as a loop that keeps returning.',
      images: [''] },
    { title: 'Piece of Cake', type: 'Exhibition Poster', year: '2025',
      desc: 'Graduation exhibition poster, feed and sticker design — 24 works gathering into one cake.',
      images: [''] },
    { title: 'FromW2', type: 'Brand Identity', year: '',
      desc: 'Identity and visuals for FromW2, a techwear brand — logo, product imagery and a collaboration with It\'s Skin.',
      images: ['', ''] },
  ],
};

window.WorksData = (() => {
  const CATEGORY_NAMES = { fashion: 'Fashion', object: '3D', product: 'Product', graphic: 'Graphic' };
  const pad = n => String(n).padStart(2, '0');

  // where each work opens
  const detailUrl = (cat, n) => {
    if (cat === 'fashion') return `fashion-detail.html?project=${pad(n)}`;
    if (cat === 'object') return `portfolio_with_detail_pages/project-detail.html?project=${pad(n)}`;
    if (cat === 'product') return `portfolio_with_detail_pages/project-detail.html?project=${pad(n)}&category=product`;
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
      // images that share a group become one project row
      const imgs = await window.FashionData.loadAll();
      const groups = new Map();
      window.FASHION_WORKS.forEach((w, k) => {
        const key = w.group || w.title;
        if (!groups.has(key)) groups.set(key, {
          category: 'fashion', categoryName: 'Fashion', title: key, year: w.year, info: w.info,
          url: detailUrl('fashion', +w.project || k + 1), images: [],
        });
        groups.get(key).images.push({ url: imgs[k].src, ar: imgs[k].aspect });
      });
      groups.forEach(g => list.push(g));
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

  return { CATEGORY_NAMES, loadAll, loadImage };
})();
