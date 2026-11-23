/* =========================================================
   전체 작업 목록 — Archive(전체 보기)와 Graphic 화면이 이 목록을 써요.

   카테고리: Fashion · 3D · Product · Graphic
   - Fashion 작업은 fashion-data.js 의 목록을 그대로 가져와요.
   - 3D(object 목록) / Product(product 목록) / Graphic 작업은 아래에서 수정하세요.
   - product: Product 화면 가운데에 뜨는 건 누끼 이미지예요. cutouts: ['images/product/...png'] 에 배경 없는 PNG 를 적어요.
     cutouts 가 없으면 images 의 사진을 대신 써요.
   - product 의 size: .7 처럼 적으면 Product 화면 가운데 사진이 그만큼 작게 떠요(1 = 기본).
   - product 의 kind 는 Product 화면 위쪽 분류 버튼이에요(Living · Stationery · Accessories). 새 이름을 적으면 버튼이 자동으로 생겨요.
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
    // Living — fabrics, bead curtains and paperweights, in colour order
    { title: 'Rose Garden Blanket', kind: 'Living', type: 'Blanket · Packaging', year: '2025',
      desc: 'Pink roses blooming out of black, printed on a soft blanket and boxed in a white window case with a rose-printed sleeve.',
      // 01 = blanket cut-out (cover); then the boxed set and the print artwork
      images: ['01', '02', '03', '04', '05'].map(n => `images/product/rose-garden-blanket/${n}.jpg`),
      cutouts: ['images/product/rose-garden-blanket/cover.jpg'] },
    { title: 'Rose Juicy Fabric', kind: 'Living', type: 'Fabric · FromW2', year: '2024',
      desc: 'Big blush-pink roses on deep navy, printed on a large fabric and used as a tablecloth, throw and wall hanging.',
      images: ['images/product/rose-juicy-fabric/main.jpg', ...Array.from({ length: 5 }, (_, i) => `images/product/rose-juicy-fabric/${String(i + 1).padStart(2, '0')}.jpg`)],
      cutouts: ['images/product/rose-juicy-fabric/cover.jpg'] },
    { title: 'Pale Rose Fabric', kind: 'Living', type: 'Fabric · FromW2', year: '2024',
      desc: 'Pale roses in a misty grey-green garden, printed on a large fabric that drapes over sofas, chairs and desks.',
      images: ['images/product/pale-rose-fabric/main.jpg', ...Array.from({ length: 12 }, (_, i) => `images/product/pale-rose-fabric/${String(i + 1).padStart(2, '0')}.jpg`)],
      cutouts: ['images/product/pale-rose-fabric/cover.jpg'] },
    { title: 'Goldfish Fabric Poster', kind: 'Living', type: 'Fabric Poster · FromW2', year: '2024',
      desc: 'Fancy goldfish drifting past green water plants and rising bubbles, printed on a hanging fabric poster in two sizes — a large portrait and a small landscape.',
      images: ['images/product/goldfish-fabric/main.jpg', 'images/product/goldfish-fabric/small.jpg'],
      cutouts: ['images/product/goldfish-fabric/cover.jpg'] },
    { title: 'Aerial Aquarium Fabric', kind: 'Living', type: 'Fabric · FromW2', year: '2024',
      desc: '공중어항 — the phone-booth aquarium turned into a large fabric: fish drifting through glass, hung on windows and thrown over sofas.',
      images: ['images/product/aerial-aquarium-fabric/main.jpg', ...Array.from({ length: 10 }, (_, i) => `images/product/aerial-aquarium-fabric/${String(i + 1).padStart(2, '0')}.jpg`)],
      cutouts: ['images/product/aerial-aquarium-fabric/cover.jpg'] },
    { title: 'Daybreak & Sparkling Fabric Posters', kind: 'Living', type: 'Fabric Poster · FromW2', year: '2024',
      desc: 'Two fabric posters — Sparkling, sunlight glittering on dark water, and Daybreak, a pale lily glowing on black — hung around the home.',
      images: ['images/product/fabric-posters/main.jpg', ...Array.from({ length: 5 }, (_, i) => `images/product/fabric-posters/${String(i + 1).padStart(2, '0')}.jpg`)],
      cutouts: ['images/product/fabric-posters/cover.jpg'] },
    { title: 'Jellyfish Fabric Poster', kind: 'Living', type: 'Fabric Poster · FromW2', year: '2024',
      desc: 'Moon jellyfish glowing white and lilac in dark water, printed on a hanging fabric poster.',
      images: ['images/product/jellyfish-fabric/main.jpg'],
      cutouts: ['images/product/jellyfish-fabric/cover.jpg'] },
    { title: 'Aquarium Paperweight', kind: 'Living', size: .72, type: 'Epoxy Paperweight · FromW2', year: '2024',
      desc: '어항 문진 — a dome paperweight holding a tiny aquarium of goldfish, rocks and water plants: "clean, clear".',
      images: ['01', '02', '03', '04', '05', '06', '07', '08'].map(n => `images/product/aquarium-paperweight/${n}.jpg`),
      cutouts: ['images/product/aquarium-paperweight/cover.jpg'] },
    { title: 'Wave Paperweight', kind: 'Living', size: .62, type: 'Acrylic Paperweight · FromW2', year: '2024',
      desc: '파도 문진 — a breaking wave sealed inside a clear acrylic block, set on books, magazines and desks.',
      images: Array.from({ length: 19 }, (_, i) => `images/product/wave-paperweight/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/wave-paperweight/cover.jpg'] },
    { title: 'Pudding Bead Curtain — Blue', kind: 'Living', type: 'Bead Curtain · DIY Kit', year: '2025',
      desc: '푸딩 비즈발 — the blue pudding edition: a mint jelly bead curtain, its pixel bead pattern and a FromW2 make-it-yourself kit guide.',
      // 01–02 = cut-outs; 03–09 = styled / making shots; 10–11 = kit guide and bead pattern
      images: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'].map(n => `images/product/pudding-beads-blue/${n}.jpg`),
      cutouts: ['images/product/pudding-beads-blue/cover.jpg'] },
    { title: 'Melon Soda Bead Curtain', kind: 'Living', type: 'Bead Curtain · FromW2', year: '2024',
      desc: '메론소다 비즈발 — a green melon soda float with a cherry on top, beaded on sky blue and hung from a metal bar.',
      images: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'].map(n => `images/product/pudding-beads-melon/${n}.jpg`),
      cutouts: ['images/product/pudding-beads-melon/cover.jpg'] },
    { title: 'Pudding Bead Curtain — Yellow', kind: 'Living', type: 'Bead Curtain · FromW2', year: '2025',
      desc: '푸딩 비즈발 — a hanging bead curtain of a cherry-topped pudding with プリン spelled underneath, strung bead by bead on a metal bar.',
      // 01–02 = cut-outs (medium, mini); then styled shots
      images: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'].map(n => `images/product/pudding-beads-yellow/${n}.jpg`),
      cutouts: ['images/product/pudding-beads-yellow/cover.jpg'] },
    // Stationery — stickers and masking tapes, in colour order
    { title: 'Oriental Stickers', kind: 'Stationery', type: 'Sticker · FromW2', year: '2024',
      desc: '오리엔탈 스티커 — neon signs in hot pink and teal with Chinese characters, made as stickers for a black phone case with a bead strap.',
      images: Array.from({ length: 3 }, (_, i) => `images/product/oriental-stickers/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/oriental-stickers/cover.jpg'] },
    { title: 'Chungking Express Stickers', kind: 'Stationery', type: 'Sticker · FromW2', year: '2024',
      desc: '중경삼림 스티커 — koi, lotus, a goldfish bowl and a tiny glowing screen, after the film Chungking Express, stuck on clocks, tables and an old green phone.',
      images: Array.from({ length: 13 }, (_, i) => `images/product/chungking-stickers/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/chungking-stickers/cover.jpg'] },
    { title: 'Red Koi Stickers', kind: 'Stationery', type: 'Sticker · FromW2', year: '2025',
      desc: '레드 잉어 스티커 — red-and-white koi with sheer, flowing fins, cut as clear stickers that swim over whatever they are stuck on, shown here over the phone booth aquarium.',
      // 01 = on the phone booth background (cover); 02 = the sheet on its own
      images: ['01', '02'].map(n => `images/product/koi-stickers/${n}.jpg`),
      cutouts: ['images/product/koi-stickers/cover.jpg'] },
    { title: 'About Love, Happiness & Sadness', kind: 'Stationery', type: 'Masking Tape · FromW2', year: '2024',
      desc: '사랑에 관하여 · 행복에 관하여 · 슬픔에 관하여 — three masking tapes that spell out the words for one feeling each: red on white for love, red on black for happiness, white on blue for sadness.',
      // 01–16 love, 17–32 happiness, 33–46 sadness; 04 (the unrolled love tape) goes first as the cover shot
      images: ['04', ...Array.from({ length: 46 }, (_, i) => String(i + 1).padStart(2, '0')).filter(n => n !== '04')].map(n => `images/product/emotion-masking-tape/${n}.jpg`),
      cutouts: ['images/product/emotion-masking-tape/cover.jpg'] },
    { title: 'Betta Stickers', kind: 'Stationery', type: 'Sticker · FromW2', year: '2024',
      desc: '베타 스티커 — betta fish fins as translucent stickers in pastel, red, black and white, scattered over fridges, guitars and tables.',
      images: Array.from({ length: 25 }, (_, i) => `images/product/betta-stickers/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/betta-stickers/cover.jpg'] },
    { title: 'Call Me Stickers', kind: 'Stationery', type: 'Sticker · FromW2', year: '2024',
      desc: '콜미 스티커 — old flip phones, pagers and cassettes in faded blue and purple, made into stickers and a clear phone case.',
      images: Array.from({ length: 3 }, (_, i) => `images/product/call-me-stickers/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/call-me-stickers/cover.jpg'] },
    { title: 'Sea Creature Stickers', kind: 'Stationery', type: 'Sticker · FromW2', year: '2024',
      desc: '해양생물 — whales, sharks, rays and jellyfish in glowing blues on a clear sticker sheet.',
      images: Array.from({ length: 1 }, (_, i) => `images/product/sea-creature-stickers/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/sea-creature-stickers/cover.jpg'] },
    { title: 'Jellyfish & Fish Masking Tape', kind: 'Stationery', type: 'Masking Tape · FromW2', year: '2024',
      desc: '해파리 마스킹 — glowing jellyfish drifting along a black tape, and a white tape of tropical fish and starfish.',
      images: Array.from({ length: 17 }, (_, i) => `images/product/sea-masking-tape/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/sea-masking-tape/cover.jpg'] },
    { title: 'Cyberpunk Stickers', kind: 'Stationery', type: 'Sticker · FromW2', year: '2025',
      desc: '사이버 펑크 스티커 — chrome chains, a liquid-metal android, a chained head, a glass orb and a CD, made as glossy clear stickers and stuck on phone cases and an old payphone.',
      // 01 = sheet with backdrop (cover); 02 = clear sheet; 03 = on a phone case; 04–06 = on the payphone
      images: ['01', '02', '03', '04', '05', '06'].map(n => `images/product/cyberpunk-stickers/${n}.jpg`),
      cutouts: ['images/product/cyberpunk-stickers/cover.jpg'] },
    { title: 'Ink & Jade Koi Stickers', kind: 'Stationery', type: 'Sticker · FromW2', year: '2024',
      desc: '잉어 스티커 — koi in ink black, grey and jade, cut as clear stickers that swim across laptops, headphones, phone cases and lamps.',
      images: Array.from({ length: 39 }, (_, i) => `images/product/koi-stickers-ink/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/koi-stickers-ink/cover.jpg'] },
    { title: 'White & Black Goldfish Stickers', kind: 'Stationery', type: 'Sticker · FromW2', year: '2024',
      desc: '화이트·블랙 피시 스티커 — fancy goldfish in pure white and deep black, as clear sticker strips scattered over laptops and phone cases.',
      images: Array.from({ length: 33 }, (_, i) => `images/product/goldfish-stickers/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/goldfish-stickers/cover.jpg'] },
    { title: 'Rose Stickers', kind: 'Stationery', type: 'Sticker · FromW2', year: '2024',
      desc: '장미 스티커 — monochrome roses and bows, stuck on a white iPhone and a grey iPad.',
      images: Array.from({ length: 4 }, (_, i) => `images/product/rose-stickers/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/rose-stickers/cover.jpg'] },
    { title: 'Odd Stickers', kind: 'Stationery', type: 'Sticker · FromW2', year: '2024',
      desc: '오드 스티커 — a phone, a heart, a revolver, dice and a red-nailed hand: an odd mix of objects in black, silver and blue.',
      images: Array.from({ length: 3 }, (_, i) => `images/product/odd-stickers/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/odd-stickers/cover.jpg'] },
    // Accessories — lighters, cases, pouches and the umbrella, in colour order
    { title: 'Pieonam Lighter', kind: 'Accessories', size: .7, type: 'Lighter · FromW2', year: '2024',
      desc: '피어남 라이터 — blooming flowers in white on pastel lighters: grey, lilac, mint, lemon and peach.',
      images: Array.from({ length: 6 }, (_, i) => `images/product/pieonam-lighter/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/pieonam-lighter/cover.jpg'] },
    { title: 'About Love Lighter', kind: 'Accessories', size: .7, type: 'Lighter · FromW2', year: '2024',
      desc: '사랑에 관하여 라이터 — the words of the About Love tape, printed on soft pink lighters.',
      images: Array.from({ length: 1 }, (_, i) => `images/product/about-love-lighter/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/about-love-lighter/cover.jpg'] },
    { title: 'Ballet Shoe Cases', kind: 'Accessories', type: 'iPad & Phone Case · FromW2', year: '2024',
      desc: '발레슈 케이스 — satin pointe shoes and loose ribbons printed on a soft pink iPad folio tied with a real ribbon, and on clear phone cases in pink, black and silver.',
      images: Array.from({ length: 9 }, (_, i) => `images/product/ballet-ipad-case/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/ballet-ipad-case/cover.jpg'] },
    { title: 'Rose iPad Case', kind: 'Accessories', type: 'iPad Case · FromW2', year: '2024',
      desc: 'Rose Juicy and Pale Rose prints carried onto iPad cases, used at the desk and on the go.',
      images: Array.from({ length: 8 }, (_, i) => `images/product/rose-ipad-case/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/rose-ipad-case/cover.jpg'] },
    { title: 'Nakhwa Pouch', kind: 'Accessories', type: 'Pouch · FromW2', year: '2024',
      desc: '낙화 파우치 — falling white blossoms embroidered on a black padded pouch, with 落花 stitched in the corner.',
      images: Array.from({ length: 4 }, (_, i) => `images/product/nakhwa-pouch/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/nakhwa-pouch/cover.jpg'] },
    { title: 'Knot Cushion Pouch', kind: 'Accessories', type: 'Pouch · FromW2', year: '2024',
      desc: '낫쿠션 파우치 — a black satin cushion pouch with ruffled edges and small bows, given with a ribbon charm.',
      images: Array.from({ length: 18 }, (_, i) => `images/product/knot-cushion-pouch/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/knot-cushion-pouch/cover.jpg'] },
    { title: 'Mir Lighter', kind: 'Accessories', size: .55, type: 'Lighter · FromW2', year: '2024',
      desc: '미르 라이터 — a silver dragon coiling over a black turbo lighter.',
      images: Array.from({ length: 12 }, (_, i) => `images/product/mir-lighter/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/mir-lighter/cover.jpg'] },
    { title: 'Tattoo Lighter', kind: 'Accessories', size: .6, type: 'Lighter · FromW2', year: '2024',
      desc: '타투 라이터 — tribal butterfly tattoos in silver on black turbo lighters.',
      images: Array.from({ length: 10 }, (_, i) => `images/product/tattoo-lighter/${String(i + 1).padStart(2, '0')}.jpg`),
      cutouts: ['images/product/tattoo-lighter/cover.jpg'] },
    { title: 'Basalt Umbrella', kind: 'Accessories', type: 'Umbrella · Tote Bag', year: '2025',
      desc: '현무암 우산 — waves crashing on black basalt rock, printed across an automatic folding umbrella, with a matching sleeve and a tote bag that carries it.',
      // 01 = front shot (cover, and the cut-out in the middle of the Product page); then open → details → folded → set
      images: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'].map(n => `images/product/basalt-umbrella/${n}.jpg`),
      cutouts: ['images/product/basalt-umbrella/cover.jpg'] },
    /* ornaments & jewellery — hidden for now
    { title: 'Ornament Tree', kind: 'Living', type: 'Display · Ornaments', year: '2025',
      desc: 'A flat-pack Christmas tree in deep red, slotted together from wavy panels on a black flower-shaped base — hung with hand-beaded hearts, crosses and baubles in crystal, pearl and gold.',
      // 01 = the whole tree (cover); 02 = close-up of the ornaments
      images: ['01', '02'].map(n => `images/product/ornament-tree/${n}.jpg`),
      cutouts: ['images/product/ornament-tree/cover.jpg'] },
    { title: 'Spine Bracelet', kind: 'Accessories', type: 'Metal · Bracelet', year: '2025',
      desc: 'A gold bracelet cast as a coiled spine — the same bone language as the Alien cases, closed into a ring around the wrist.',
      images: ['images/product/spine-bracelet/01.jpg'],
      cutouts: ['images/product/spine-bracelet/cover.jpg'] },
    (hidden for now — remove the comment marks to show them again) */
  ],
  graphic: [
    // FromW2 — goods & graphics
    { title: '2025 Wall Calendar', type: 'Poster Calendar', year: '2025',
      desc: 'A 2025 poster calendar in two editions, Columbine and Iris — flowers floating on black, styled into everyday spaces.',
      images: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'].map(n => `images/graphic/wall-calendar/${n}.jpg`),
      // posters = the calendars cropped to the print itself (no white margin / caption) so they fill their card
      posters: ['images/graphic/wall-calendar/poster-09.jpg', 'images/graphic/wall-calendar/poster-10.jpg'] },
    { title: 'Phone Booth Aquarium', type: 'Poster · Phone Case', year: '2025',
      desc: '"From W2 sells fantasy" — goldfish drifting through an old phone booth, made into a poster, phone cases and AirPods cases.',
      images: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'].map(n => `images/graphic/phone-booth/${n}.jpg`),
      posters: ['images/graphic/phone-booth/poster-01.jpg'] },
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
      // main page shows the Love Beta poster only; Love Fish and Love Green are in the detail page
      posters: ['images/graphic/love-bumper/01.jpg'] },
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
    const h = 400, w = Math.round(h * aw / ah);
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

  // Archive only needs a small copy of the first two photos of each work: images/thumbs/… (480px)
  // mirrors images/… — if a thumb is missing, the full photo is used instead.
  const thumbOf = src => src && src.startsWith('images/') ? 'images/thumbs/' + src.slice(7).replace(/\.png$/i, '.jpg') : '';
  const loadThumb = (src, fallback) => loadImage(thumbOf(src), () => null).then(r => r || loadImage(src, fallback));

  /* every work as { category, categoryName, title, year, info, url, images:[{url,ar}] } (at most 2 images each) */
  async function loadAll() {
    const rows = [];
    if (window.FASHION_WORKS) {
      // images that share a group become one project row
      const groups = new Map();
      window.FASHION_WORKS.forEach((w, k) => {
        const key = w.group || w.title;
        if (!groups.has(key)) groups.set(key, {
          row: { category: 'fashion', categoryName: 'Fashion', title: key, year: w.year, info: w.info,
                 url: detailUrl('fashion', +w.project || k + 1), images: [] },
          srcs: [],
        });
        groups.get(key).srcs.push({ src: w.src, k });
      });
      groups.forEach(g => rows.push(Promise.all(g.srcs.slice(0, 2).map(({ src, k }) =>
        loadThumb(src, () => placeholder('fashion', k, 0, 'Fashion')))).then(images => Object.assign(g.row, { images }))));
    }
    for (const cat of Object.keys(window.OTHER_WORKS)) {
      window.OTHER_WORKS[cat].forEach((w, p) => {
        rows.push(Promise.all(w.images.slice(0, 2).map((src, i) => loadThumb(src, () => placeholder(cat, p, i, w.type))))
          .then(images => ({
            category: cat, categoryName: CATEGORY_NAMES[cat], title: w.title, year: w.year, info: w.type || '',
            url: detailUrl(cat, p + 1), images,
          })));
      });
    }
    return Promise.all(rows);   // all at once, not one after another
  }

  return { CATEGORY_NAMES, loadAll, loadImage };
})();
