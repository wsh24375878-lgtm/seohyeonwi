/* =========================================================
   전체 작업 목록 — Archive(전체 보기)와 Graphic 화면이 이 목록을 써요.

   카테고리: Fashion · 3D · Product · Graphic
   - Fashion 작업은 fashion-data.js 의 목록을 그대로 가져와요.
   - 3D(object 목록) / Product(product 목록) / Graphic 작업은 아래에서 수정하세요.
   - product: Product 화면 가운데에 뜨는 건 누끼 이미지예요. cutouts: ['images/product/...png'] 에 배경 없는 PNG 를 적어요.
     cutouts 가 없으면 images 의 사진을 대신 써요.
   - product 의 kind 는 Product 화면 위쪽 분류 버튼이에요(Fabric · Bead Curtain · Paperweight · Stationery · Case). 새 이름을 적으면 버튼이 자동으로 생겨요.
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
      images: ['images/object/alien-airpods-max/01.jpg'] },
    // furniture — 3D files rebuilt from the product photos (bent black tube + black panels)
    { title: 'Curve Chair', type: 'Furniture · Chair', year: '2022',
      desc: 'One bent iron tube draws the whole chair — a stepped backrest, a curl at the arm and a triangle at the foot — around a glossy black seat. Opaque acrylic and iron, 71 × 53 × 74 cm.',
      images: ['images/object/tube-chair/01.jpg', 'images/object/tube-chair/02.jpg'],
      models: ['models/object/tube-chair.glb', 'models/object/tube-chair.glb'] },
    { title: 'Empty Container', type: 'Furniture · Side Table', year: '2022',
      desc: 'Two offset black tops held by a single bent tube — a leaning leg, a looping base and a short post stepping down between the tiers. Opaque acrylic and iron, made with iron banding, 30 × 24 × 30 cm.',
      images: ['01', '02', '03'].map(n => `images/object/side-table/${n}.jpg`),
      models: ['models/object/side-table.glb', 'models/object/side-table.glb', 'models/object/side-table.glb'] },
    { title: 'Glass Paperweight', type: 'Glass · Paperweight', year: '2025',
      desc: 'A clear glass block holding a snowy forest — two thin grooves cross near one corner like a window frame, so the scene reads as a view through a window.',
      images: ['01', '02', '03'].map(n => `images/object/glass-paperweight/${n}.jpg`),
      // every photo slot in the strip shows the same 3D block
      models: ['models/object/glass-paperweight.glb', 'models/object/glass-paperweight.glb', 'models/object/glass-paperweight.glb'] },
    { title: 'Fw2 Logo', type: '3D · Logo', year: '2024',
      desc: 'The FromW2 blackletter monogram — F, w and 2 stacked into one mark — rendered as a cut metal sign: dark brushed faces on polished silver edges.',
      images: ['images/object/fw2-logo/01.jpg'] },
  ],
  // Product — 2D cut-out photos (no 3D). Empty for now; add works like:
  // { title: "…", type: "…", year: "2025", desc: "…", images: ["images/product/…/01.jpg"], cutouts: ["images/product/…/cutout.png"] },
  product: [
    { title: 'Basalt Umbrella', kind: 'Fabric', type: 'Umbrella · Tote Bag', year: '2025',
      desc: '현무암 우산 — waves crashing on black basalt rock, printed across an automatic folding umbrella, with a matching sleeve and a tote bag that carries it.',
      // 01 = front shot (cover, and the cut-out in the middle of the Product page); then open → details → folded → set
      images: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'].map(n => `images/product/basalt-umbrella/${n}.jpg`),
      cutouts: ['images/product/basalt-umbrella/cover.jpg'] },
    { title: 'Rose Garden Blanket', kind: 'Fabric', type: 'Blanket · Packaging', year: '2025',
      desc: 'Pink roses blooming out of black, printed on a soft blanket and boxed in a white window case with a rose-printed sleeve.',
      // 01 = blanket cut-out (cover); then the boxed set and the print artwork
      images: ['01', '02', '03', '04', '05'].map(n => `images/product/rose-garden-blanket/${n}.jpg`),
      cutouts: ['images/product/rose-garden-blanket/cover.jpg'] },
    { title: 'Pudding Bead Curtain — Yellow', kind: 'Bead Curtain', type: 'Bead Curtain · FromW2', year: '2025',
      desc: '푸딩 비즈발 — a hanging bead curtain of a cherry-topped pudding with プリン spelled underneath, strung bead by bead on a metal bar.',
      // 01–02 = cut-outs (medium, mini); then styled shots
      images: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'].map(n => `images/product/pudding-beads-yellow/${n}.jpg`),
      cutouts: ['images/product/pudding-beads-yellow/cover.jpg'] },
    { title: 'Pudding Bead Curtain — Blue', kind: 'Bead Curtain', type: 'Bead Curtain · DIY Kit', year: '2025',
      desc: '푸딩 비즈발 — the blue pudding edition: a mint jelly bead curtain, its pixel bead pattern and a FromW2 make-it-yourself kit guide.',
      // 01–02 = cut-outs; 03–09 = styled / making shots; 10–11 = kit guide and bead pattern
      images: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'].map(n => `images/product/pudding-beads-blue/${n}.jpg`),
      cutouts: ['images/product/pudding-beads-blue/cover.jpg'] },
    { title: 'Melon Soda Bead Curtain', kind: 'Bead Curtain', type: 'Bead Curtain · FromW2', year: '2024',
      desc: '메론소다 비즈발 — a green melon soda float with a cherry on top, beaded on sky blue and hung from a metal bar.',
      images: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'].map(n => `images/product/pudding-beads-melon/${n}.jpg`),
      cutouts: ['images/product/pudding-beads-melon/cover.jpg'] },
    // paperweights
    { title: 'Wave Paperweight', kind: 'Paperweight', type: 'Acrylic Paperweight · FromW2', year: '2024',
      desc: '파도 문진 — a breaking wave sealed inside a clear acrylic block, set on books, magazines and desks.',
      images: Array.from({ length: 19 }, (_, i) => `images/product/wave-paperweight/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/wave-paperweight/cover.jpg'] },
    { title: 'Aquarium Paperweight', kind: 'Paperweight', type: 'Epoxy Paperweight · FromW2', year: '2024',
      desc: '어항 문진 — a dome paperweight holding a tiny aquarium of goldfish, rocks and water plants: "clean, clear".',
      images: ['01', '02', '03', '04', '05', '06', '07', '08'].map(n => `images/product/aquarium-paperweight/${n}.jpg`),
      cutouts: ['images/product/aquarium-paperweight/cover.jpg'] },
    // masking tapes
    { title: 'About Love, Happiness & Sadness', kind: 'Stationery', type: 'Masking Tape · FromW2', year: '2024',
      desc: '사랑에 관하여 · 행복에 관하여 · 슬픔에 관하여 — three masking tapes that spell out the words for one feeling each: red on white for love, red on black for happiness, white on blue for sadness.',
      // 01–16 love, 17–32 happiness, 33–46 sadness
      images: Array.from({ length: 46 }, (_, i) => `images/product/emotion-masking-tape/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/emotion-masking-tape/cover.jpg'] },
    { title: 'Jellyfish & Fish Masking Tape', kind: 'Stationery', type: 'Masking Tape · FromW2', year: '2024',
      desc: '해파리 마스킹 — glowing jellyfish drifting along a black tape, and a white tape of tropical fish and starfish.',
      images: Array.from({ length: 17 }, (_, i) => `images/product/sea-masking-tape/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/sea-masking-tape/cover.jpg'] },
    // stickers & cases
    { title: 'Betta Stickers', kind: 'Stationery', type: 'Sticker · FromW2', year: '2024',
      desc: '베타 스티커 — betta fish fins as translucent stickers in pastel, red, black and white, scattered over fridges, guitars and tables.',
      images: Array.from({ length: 15 }, (_, i) => `images/product/betta-stickers/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/betta-stickers/cover.jpg'] },
    { title: 'Ballet Shoe iPad Case', kind: 'Case', type: 'iPad Case · FromW2', year: '2024',
      desc: '발레슈 아이패드 케이스 — satin pointe shoes and loose ribbons printed on a soft pink folio case tied with a real ribbon.',
      images: ['01', '02', '03', '04', '05'].map(n => `images/product/ballet-ipad-case/${n}.jpg`),
      cutouts: ['images/product/ballet-ipad-case/cover.jpg'] },
    // ornaments & jewellery
    { title: 'Ornament Tree', kind: 'Objet', type: 'Display · Ornaments', year: '2025',
      desc: 'A flat-pack Christmas tree in deep red, slotted together from wavy panels on a black flower-shaped base — hung with hand-beaded hearts, crosses and baubles in crystal, pearl and gold.',
      // 01 = the whole tree (cover); 02 = close-up of the ornaments
      images: ['01', '02'].map(n => `images/product/ornament-tree/${n}.jpg`),
      cutouts: ['images/product/ornament-tree/cover.jpg'] },
    { title: 'Spine Bracelet', kind: 'Jewelry', type: 'Metal · Bracelet', year: '2025',
      desc: 'A gold bracelet cast as a coiled spine — the same bone language as the Alien cases, closed into a ring around the wrist.',
      images: ['images/product/spine-bracelet/01.jpg'],
      cutouts: ['images/product/spine-bracelet/cover.jpg'] },
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
      desc: 'Poster and catalogue cover for CIRCULATION (순환), the 30th graduation exhibition of SSWU Fashion Industry — light refracting over fabric, with the title rolling across the sheet like a loop that keeps returning. Gaon Gallery, June 16–19, 2022.',
      // 01 = exhibition poster (cover); 02 = the catalogue cover
      images: ['images/graphic/circulation/01.jpg', 'images/graphic/circulation/02.jpg'],
      posters: ['images/graphic/circulation/01.jpg'] },
    { title: 'Piece of Cake', type: 'Exhibition Poster', year: '2025',
      desc: 'Graduation exhibition poster, feed and sticker design — 24 works gathering into one cake.',
      // 01 = poster (original file); 04–05 = feed graphics; 02–03 = the Instagram feed grids (cut from screenshots, white made transparent)
      images: ['01.jpg', '04.jpg', '05.jpg', '02.png', '03.png'].map(f => `images/graphic/piece-of-cake/${f}`),
      posters: ['01.jpg', '04.jpg', '05.jpg', '02.png', '03.png'].map(f => `images/graphic/piece-of-cake/${f}`) },
    { title: 'Love Glass Bumper Case', type: 'Poster · Phone Case', year: '2025',
      desc: 'FromW2 posters for the "Love" glass bumper cases — a betta, goldfish and a green tank sealed into a phone case, each with a short care tip.',
      images: ['01', '02', '03'].map(n => `images/graphic/love-bumper/${n}.jpg`),
      posters: ['01', '02', '03'].map(n => `images/graphic/love-bumper/${n}.jpg`) },
    { title: 'Flower Epoxy Case', type: 'Poster · Phone Case', year: '2024',
      desc: 'FromW2 posters for the flower epoxy cases — orchid, cherry blossom, narcissus and lily, each pressed under glossy epoxy on black.',
      images: ['01', '02', '03', '04'].map(n => `images/graphic/flower-epoxy-case/${n}.jpg`),
      posters: ['01', '02', '03', '04'].map(n => `images/graphic/flower-epoxy-case/${n}.jpg`) },
    { title: 'Retro Epoxy Case', type: 'Poster · Phone Case', year: '2024',
      desc: 'An old flip phone turned into a phone case — "Wish" with a paper plane on the screen, "Jellyfish" with a glowing tank, for iPhone, Galaxy and Z Flip.',
      images: ['01', '02', '03', '04'].map(n => `images/graphic/retro-epoxy-case/${n}.jpg`),
      posters: ['01', '02'].map(n => `images/graphic/retro-epoxy-case/${n}.jpg`) },
    { title: 'Ftendo Jelhard Case', type: 'Poster · Phone Case', year: '2024',
      desc: 'A handheld game console reimagined as a Z Flip case — green waves or goldfish on the screen, with a film-still backdrop.',
      images: ['01', '02', '03', '04'].map(n => `images/graphic/ftendo-case/${n}.jpg`),
      posters: ['01', '02'].map(n => `images/graphic/ftendo-case/${n}.jpg`) },
    { title: 'October Wallpapers — Sea', type: 'Phone Wallpaper', year: '2024',
      desc: '10월 배경화면 — free phone wallpapers of jellyfish, goldfish, waves and sky reflected on still water. "Be the sea for me."',
      images: Array.from({ length: 12 }, (_, i) => `images/graphic/wallpaper-sea/${String(i + 1).padStart(2, '0')}.jpg`),
      posters: ['01', '03', '04', '11'].map(n => `images/graphic/wallpaper-sea/${n}.jpg`) },
    { title: 'October Wallpapers — Dessert', type: 'Phone Wallpaper', year: '2024',
      desc: '10월 배경화면 — jellies, pudding and soda floats on soft pastel backgrounds, made as free phone wallpapers.',
      images: ['01', '02', '03', '04', '05'].map(n => `images/graphic/wallpaper-dessert/${n}.jpg`),
      posters: ['01', '02', '03'].map(n => `images/graphic/wallpaper-dessert/${n}.jpg`) },
    { title: 'Mutant Collection', type: 'Poster · FromW2', year: '2021',
      desc: '突然變異 — a FromW2 poster for the Mutant Collection, January 2021: an inverted blue rose and pale butterflies with a short manifesto — "Don\'t be afraid to be different from others."',
      images: ['images/graphic/mutant-collection/01.jpg'],
      posters: ['images/graphic/mutant-collection/01.jpg'] },
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
