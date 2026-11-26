/* =========================================================
   FASHION 작품 목록 — fashion.html / fashion-detail.html / Archive 가 함께 씁니다.

   - 한 줄이 원형 화면의 이미지 한 장이에요.
   - group 이 같은 이미지는 Archive 에서 한 프로젝트로 묶여요.
   - title / desc / info / year 는 상세 페이지에 표시되는 글입니다.
   - 이미지는 포트폴리오 PDF(포트폴리오_지원자 위서현.pdf)에서 가져왔어요.
   ========================================================= */
window.FASHION_WORKS = [
  // 졸업 컬렉션 — 혼란 (Confusion)
  { project: '01', group: 'Confusion', title: 'Confusion — Final Look', src: 'images/fashion/confusion/01.jpg', info: 'Graduation Collection',
    desc: 'Inflated volumes and trailing threads — the fear of the unknown, turned into a body you can wear.' },
  { project: '02', group: 'Confusion', title: 'Confusion — Final Work', src: 'images/fashion/confusion/02.jpg', info: 'Graduation Collection',
    desc: 'Starting from the film "Alien", the unknown is broken down and rebuilt as clothing instead of being avoided.' },
  { project: '03', group: 'Confusion', title: 'Confusion — Mood Board', src: 'images/fashion/confusion/03.jpg', info: 'Research',
    desc: 'Organic, parasitic forms and a cold palette of shadow mint, lucent white and midnight denim.' },
  { project: '04-0', group: 'Confusion', title: 'Confusion — Concept', src: 'images/fashion/material-board/00-concept.jpg', info: 'Concept',
    desc: 'The concept, Confusion: the fear in Alien comes from what we cannot know. Rather than avoid it, the project takes the alien’s design apart and recombines it — turning that fear into something I can handle.' },
  { project: '04', group: 'Confusion', title: 'Confusion — Material Board', src: 'images/fashion/material-board/01.jpg', info: 'Material',
    desc: 'A material board of belts, buckles, eyelets, padding and worn, frayed denim in grey and black.' },
  { project: '05', group: 'Confusion', title: 'Confusion — Design Sketch', src: 'images/fashion/confusion/05.jpg', info: 'Sketch',
    desc: 'Idea sketches exploring padded volume, straps and layered drapery across the line-up.' },
  { project: '06', group: 'Confusion', title: 'Confusion — Textile Design', src: 'images/fashion/confusion/06.jpg', info: 'Textile',
    desc: 'Original textile prints developed for the collection, with mock-up layouts on garments.' },
  { project: '06-2', group: 'Confusion', title: 'Confusion — Textile Design 02', src: 'images/fashion/confusion/06-2.jpg', info: 'Textile',
    desc: 'A scribbled, hair-like print in ink grey on white — tangled lines drifting across the cloth.' },
  { project: '06-3', group: 'Confusion', title: 'Confusion — Textile Design 03', src: 'images/fashion/confusion/06-3.jpg', info: 'Textile',
    desc: 'An organic lace print — cell-like growths and starburst forms in grey and pale blue.' },
  { project: '06-4', group: 'Confusion', title: 'Confusion — Textile Design 04', src: 'images/fashion/confusion/06-4.jpg', info: 'Textile',
    desc: 'A repeat of glowing blue wireframe busts on black, like scans of an unknown body.' },
  { project: '07', group: 'Confusion', title: 'Confusion — Final Sketch', src: 'images/fashion/confusion/07.jpg', info: 'Sketch',
    desc: 'The final look: exaggerated padded volume carried by straps and denim, finished with print.' },
  { project: '08', group: 'Confusion', title: 'Confusion — Making Process', src: 'images/fashion/confusion/08.jpg', info: 'Process',
    desc: 'Material tests and repeated fittings to find the balance between volume and structure.' },
  { project: '09', group: 'Confusion', title: 'Confusion — Tech Pack, Top', src: 'images/fashion/confusion/09.jpg', info: 'Tech Pack',
    desc: 'Sample work order for the padded top — measurements, details and construction notes.' },
  { project: '10', group: 'Confusion', title: 'Confusion — Tech Pack, Skirt', src: 'images/fashion/confusion/10.jpg', info: 'Tech Pack',
    desc: 'Sample work order for the wrapped denim skirt with belt details.' },
  // 기성복 디자인 — Ready-to-wear
  { project: '11', group: 'Ready-to-wear', title: 'Ready-to-wear — Line-up', src: 'images/fashion/ready-to-wear/11.jpg', info: 'Ready-to-wear',
    desc: 'A ready-to-wear line-up of layered, utility-driven pieces.' },
  { project: '12', group: 'Ready-to-wear', title: 'Ready-to-wear — Tech Pack 01', src: 'images/fashion/ready-to-wear/12.jpg', info: 'Tech Pack',
    desc: 'Cargo skirt with fold-over waist and drawcord hem.' },
  { project: '13', group: 'Ready-to-wear', title: 'Ready-to-wear — Tech Pack 02', src: 'images/fashion/ready-to-wear/13.jpg', info: 'Tech Pack',
    desc: 'Wide trousers with crossing belt straps.' },
  { project: '14', group: 'Ready-to-wear', title: 'Ready-to-wear — Tech Pack 03', src: 'images/fashion/ready-to-wear/14.jpg', info: 'Tech Pack',
    desc: 'Knit top with an asymmetric open shoulder.' },
  { project: '15', group: 'Ready-to-wear', title: 'Ready-to-wear — Tech Pack 04', src: 'images/fashion/ready-to-wear/15.jpg', info: 'Tech Pack',
    desc: 'Denim bustier with belt-buckle closures.' },
  // Miseki seoul 26FW — mood board first (cover), then the book spread and the flats
  { project: '16', group: 'Miseki seoul 26FW', title: 'Miseki seoul 26FW — Mood Board', src: 'images/fashion/miseki-seoul/01.jpg', info: 'Mood Board', year: '2025',
    desc: 'A mood board for Miseki seoul 26FW — misty greens and grey-blues, wet grass, blurred light and black layered looks.' },
  { project: '17', group: 'Miseki seoul 26FW', title: 'Miseki seoul 26FW — Book', src: 'images/fashion/miseki-seoul/02.jpg', info: 'Mood Book', year: '2025',
    desc: 'The mood board laid out as a printed book spread opposite the Miseki seoul wordmark.' },
  { project: '18', group: 'Miseki seoul 26FW', title: 'Miseki seoul 26FW — Flats', src: 'images/fashion/miseki-seoul/03.jpg', info: 'Technical Flats', year: '2025',
    desc: 'Design flats, front and back: a hooded long coat with toggles, a ribbed knit cardigan with an asymmetric button line, and a wrapped pleated skirt with a tie belt.' },
];
// slots that have no image yet (src: '') are kept above for later but not shown anywhere
window.FASHION_WORKS = window.FASHION_WORKS.filter(w => w.src);

/* =========================================================
   Fashion projects — one card each on the ring; the detail page opens with this story
   (history and how the design developed, from the portfolio), then the project's images.
   ========================================================= */
window.FASHION_PROJECTS = {
  'Confusion': {
    title: 'Confusion', kind: 'Graduation Collection', year: '',
    story: [
      'The fear in the film Alien is not the creature itself but the fear of what we cannot know. Like an alien that may appear anywhere in the dark, I feel uneasy about a future I cannot see one step ahead.',
      'Instead of avoiding that fear, I chose to analyse and rebuild it. Taking the alien’s biological design apart and recombining it on clothing turns what threatened me into something I can handle — a form I control.',
      'Unsorted feelings burst out through the garment: exaggerated padded volumes gather and come apart like a living thing that keeps multiplying, while loose strings and bleeding prints show a chaos that cannot be controlled. The human silhouette is erased so the clothes breathe like one organism — strange, yet overwhelmingly sublime.',
    ],
    process: 'Research → mood board → concept & material → design sketch → textile → final sketch → tech packs → making → final look',
  },
  'Ready-to-wear': {
    title: 'Ready-to-wear', kind: 'Ready-to-wear Design', year: '2022',
    story: [
      'A ready-to-wear line of layered, utility-driven pieces, drawn as a line-up of eleven looks.',
      'Four key items were taken further into sample work orders (tech packs): a cargo skirt with a fold-over waist, wide trousers crossed by belt straps, a knit top with an asymmetric open shoulder and a denim bustier closed with buckles. Each sheet sets out the flats, measurements, stitch details and the fabric swatch, next to reference images.',
    ],
    process: 'Line-up → tech pack 01 – 04',
  },
  'Miseki seoul 26FW': {
    title: 'Miseki seoul 26FW', kind: 'Mood Board · Flats', year: '2025',
    story: [
      'A season proposal for Miseki seoul 26FW: misty greens and grey-blues, wet grass and blurred light, set against black layered looks.',
      'The mood board was laid out as a printed book spread opposite the Miseki seoul wordmark, then developed into technical flats — a hooded long coat with toggles, a ribbed knit cardigan with an asymmetric button line and a wrapped pleated skirt with a tie belt.',
    ],
    process: 'Mood board → book → flats',
  },
};
window.fashionProjectOf = work => (window.FASHION_PROJECTS[work.group] || { title: work.group || work.title, kind: work.info, year: work.year, story: [] });

window.FashionData = (() => {
  // Shared scene size so the image keeps exactly the same size between pages.
  const CAMERA_Z = 8;
  const FOV = 45;
  const VIEW_UNITS = 2 * CAMERA_Z * Math.tan((FOV / 2) * Math.PI / 180);
  const HERO_H = 3.1;

  const PALETTE = [
    // grey stand-ins (light grey background, darker grey silhouette)
    ['#e6e6e6', '#bdbdbd'], ['#ebebeb', '#c4c4c4'], ['#e2e2e2', '#b8b8b8'], ['#ededed', '#c8c8c8'],
    ['#e4e4e4', '#bababa'], ['#e9e9e9', '#c2c2c2'], ['#e0e0e0', '#b5b5b5'], ['#eeeeee', '#cacaca'],
  ];
  const ASPECTS = [1080 / 1350, 1080 / 1293, 1080 / 1349, 1, 1080 / 1440, 1080 / 1350, 4 / 3, 1080 / 1349];

  function placeholder(i) {
    const [bg, fg] = PALETTE[i % PALETTE.length];
    const aspect = ASPECTS[i % ASPECTS.length];
    const h = 900, w = Math.round(h * aspect);
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const g = c.getContext('2d');
    g.fillStyle = bg; g.fillRect(0, 0, w, h);

    const grad = g.createRadialGradient(w * .35, h * .3, 10, w * .5, h * .5, h * .8);
    grad.addColorStop(0, 'rgba(255,255,255,.28)');
    grad.addColorStop(1, 'rgba(0,0,0,.18)');
    g.fillStyle = grad; g.fillRect(0, 0, w, h);

    g.save();
    g.translate(w / 2, h * .5);
    g.fillStyle = fg; g.globalAlpha = .82;
    const s = Math.min(w, h) / 900;
    g.beginPath();
    g.moveTo(-70 * s, -250 * s);
    g.quadraticCurveTo(0, -205 * s, 70 * s, -250 * s);
    g.lineTo(165 * s, -190 * s);
    g.lineTo(130 * s + (i % 3) * 20 * s, 40 * s);
    g.quadraticCurveTo(230 * s, 200 * s, 190 * s + (i % 2) * 40 * s, 300 * s);
    g.lineTo(-190 * s - (i % 2) * 40 * s, 300 * s);
    g.quadraticCurveTo(-230 * s, 200 * s, -130 * s - (i % 3) * 20 * s, 40 * s);
    g.lineTo(-165 * s, -190 * s);
    g.closePath();
    g.fill();
    g.globalAlpha = .35;
    g.strokeStyle = bg; g.lineWidth = 2 * s;
    g.beginPath(); g.moveTo(0, -205 * s); g.lineTo(0, 300 * s); g.stroke();
    g.restore();

    g.globalAlpha = 1;
    g.fillStyle = fg;
    g.font = `400 ${Math.round(h * .024)}px Arial, Helvetica, sans-serif`;
    g.fillText('FASHION / LOOK', w * .06, h * .07);
    g.fillText(String(i + 1).padStart(2, '0'), w * .06, h * .95);
    return c.toDataURL('image/jpeg', .86);
  }

  function loadOne(work, i) {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve({ src: img.src, aspect: img.naturalWidth / img.naturalHeight || 0.8 });
      img.onerror = () => {
        img.onerror = null;
        img.src = placeholder(i);
      };
      img.src = work.src || placeholder(i);
    });
  }

  return {
    VIEW_UNITS,
    HERO_H,
    unit: () => window.innerHeight / VIEW_UNITS,           // px per scene unit
    heroHeight: () => HERO_H * window.innerHeight / VIEW_UNITS,
    // centre-image size (ring page and project page alike): about 60% of the screen height on computers,
    // a little larger than the base on phones; never wider than the screen or taller than the room between
    // the text at the top and the line at the bottom
    heroSize: aspect => {
      const phone = window.innerWidth <= 700;
      let h = HERO_H * window.innerHeight / VIEW_UNITS * (phone ? 1.12 : 1.3);
      h = Math.min(h, window.innerHeight - (phone ? 300 : 230));
      let w = h * aspect;
      const maxW = window.innerWidth * (phone ? 0.9 : 0.92);
      if (w > maxW) { h *= maxW / w; w = maxW; }
      return { w, h };
    },
    loadAll: () => Promise.all(window.FASHION_WORKS.map(loadOne)),
    indexOf: project => Math.max(0, window.FASHION_WORKS.findIndex(w => w.project === project)),
    detailUrl: work => `fashion-detail.html?project=${work.project}`,
    listUrl: work => `fashion.html?work=${work.project}`,
  };
})();
