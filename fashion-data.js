/* =========================================================
   FASHION 작품 목록 — fashion.html 과 fashion-detail.html 이 함께 씁니다.

   - 실제 이미지를 넣으려면 images/fashion/ 폴더에 01.jpg, 02.jpg ...
     파일을 넣거나, 아래 src 경로를 바꿔주세요.
   - 파일이 없으면 자동으로 임시 이미지가 표시됩니다.
   - title / desc / year / info 는 상세 페이지에 표시되는 글입니다.
   ========================================================= */
window.FASHION_WORKS = [
  { project: '01', title: 'Collection 01', src: 'images/fashion/01.jpg', year: '2026', info: 'Womenswear',
    desc: 'A study of draped volume — soft structure built from a single length of fabric.' },
  { project: '02', title: 'Collection 02', src: 'images/fashion/02.jpg', year: '2026', info: 'Textile',
    desc: 'Layered surfaces and hand-finished edges, exploring how material holds a shape.' },
  { project: '03', title: 'Collection 03', src: 'images/fashion/03.jpg', year: '2025', info: 'Outerwear',
    desc: 'Folded panels and warm tones, translating architectural lines into garments.' },
  { project: '04', title: 'Collection 04', src: 'images/fashion/04.jpg', year: '2025', info: 'Object',
    desc: 'Between clothing and object — pieces that can be worn, held, or simply placed.' },
  { project: '05', title: 'Collection 05', src: 'images/fashion/05.jpg', year: '2025', info: 'Womenswear',
    desc: 'Pale, quiet colours and light fabrics layered to create depth without weight.' },
  { project: '06', title: 'Collection 06', src: 'images/fashion/06.jpg', year: '2024', info: 'Pattern',
    desc: 'Monochrome pattern cutting — rebuilding a classic silhouette piece by piece.' },
  { project: '07', title: 'Collection 07', src: 'images/fashion/07.jpg', year: '2024', info: 'Image',
    desc: 'An image-led project, styling and photographing the collection as one story.' },
  { project: '08', title: 'Collection 08', src: 'images/fashion/08.jpg', year: '2024', info: 'Accessory',
    desc: 'Small accessories developed from leftover materials of earlier collections.' },
];

window.FashionData = (() => {
  // Shared scene size so the image keeps exactly the same size between pages.
  const CAMERA_Z = 8;
  const FOV = 45;
  const VIEW_UNITS = 2 * CAMERA_Z * Math.tan((FOV / 2) * Math.PI / 180);
  const HERO_H = 3.1;

  const PALETTE = [
    ['#d9d3c9', '#2a2724'], ['#1f2422', '#e9e4da'], ['#b9573e', '#f3e6d6'], ['#cfd6c8', '#26302a'],
    ['#d8d0dc', '#3b3142'], ['#e7e3dc', '#161616'], ['#26303a', '#efe7da'], ['#c9b79c', '#2b241c'],
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
    // centre-image size; wide images shrink so they never overflow a phone screen
    heroSize: aspect => {
      let h = HERO_H * window.innerHeight / VIEW_UNITS;
      let w = h * aspect;
      const maxW = window.innerWidth * (window.innerWidth <= 700 ? 0.86 : 0.9);
      if (w > maxW) { h *= maxW / w; w = maxW; }
      return { w, h };
    },
    loadAll: () => Promise.all(window.FASHION_WORKS.map(loadOne)),
    indexOf: project => Math.max(0, window.FASHION_WORKS.findIndex(w => w.project === project)),
    detailUrl: work => `fashion-detail.html?project=${work.project}`,
    listUrl: work => `fashion.html?work=${work.project}`,
  };
})();
