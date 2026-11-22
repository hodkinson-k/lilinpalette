// =====================================================================
//  Editable content
//  Any text field can be a plain string (same in every language) or an
//  object { en: "...", zh: "..." }. Missing translations fall back to English.
// =====================================================================

const SITE = {
  artist: { en: "Lín Li", zh: "李琳" },
  email: "lli30@qub.ac.uk",
  instagram: "lilinpalette",
  hero: "images/OilPainting_LinLi_SymphonyOfTheDome_BealFeirste_reducedquality.jpg",
  cvPdfUrl: "CV/CV_LIN_LI.pdf"
};

const OIL_ON_CANVAS = { en: "Oil on canvas", zh: "布面油画" };

const ARTWORKS = [
  {
    id: "a1",
    title: { en: "Crimson Plateau of An Mhucais", zh: "马基什山的绯红高原" },
    year: 2025,
    medium: OIL_ON_CANVAS,
    size: "15 × 22 cm",
    image: "images/LIN_LI_Crimson_Plateau_of_An_Mhucais_reducedquality.jpg",
    caption: {
      en: "A semi-abstract vision of Muckish at dusk: saturated crimsons and sweeping impasto animate a ‘glowing plateau’ felt between waking and dream.",
      zh: "黄昏时分马基什山的半抽象景象：饱和的绯红与大幅厚涂笔触，赋予这片“发光的高原”一种介于清醒与梦境之间的生命。"
    },
    featured: true
  },
  {
    id: "a2",
    title: { en: "Dathanna An Earagail (Colours of Errigal)", zh: "埃里格尔山的色彩" },
    year: 2025,
    medium: OIL_ON_CANVAS,
    size: "30 × 30 cm",
    image: "images/LIN_LI_MA_Oil_30cmx30cm_2025_reducedquality.jpg",
    caption: {
      en: "Errigal as a locus of emotion: complementary blues and oranges, directional strokes, and impasto unite sky and land in motion.",
      zh: "埃里格尔山作为情感的场域：蓝与橙的互补色、方向性笔触与厚涂技法，将天空与大地融为流动的整体。"
    },
    featured: false
  },
  {
    id: "a3",
    title: { en: "Somnolent Fever of a Dreaming Oileán Reachlainn", zh: "沉睡之热：梦中的拉斯林岛" },
    year: 2025,
    medium: OIL_ON_CANVAS,
    size: "40 × 30 cm",
    image: "images/LIN_LI_MA_Oil_40cmx30cm_2025_reducedquality.jpg",
    caption: {
      en: "Heavy oil and palette-knife textures emphasise surface and gesture—matter painting meets landscape.",
      zh: "厚重的油彩与画刀肌理强调画面表面与笔势——物质绘画与风景在此相遇。"
    },
    featured: false
  },
  {
    id: "a4",
    title: { en: "The Winds of Sliabh Mis", zh: "斯莱米什山之风" },
    year: 2025,
    medium: OIL_ON_CANVAS,
    size: "30 × 30 cm",
    image: "images/LIN_LI_TheWindsOfSliabhMis_reducedquality.jpg",
    caption: {
      en: "Vigorous, rhythmic strokes render Slemish’s contours; swirling skies and high-purity hues convey seasonal vitality and inner resonance.",
      zh: "富有节奏的有力笔触勾勒出斯莱米什山的轮廓；旋动的天空与高纯度色彩传达出季节的生机与内心的共鸣。"
    },
    featured: false
  },
  {
    id: "a5",
    title: { en: "Sleepwalking Dún Lúiche", zh: "梦游邓卢伊" },
    year: 2025,
    medium: OIL_ON_CANVAS,
    size: "40 × 30 cm",
    image: "images/linli_sleepwalking_dun_luiche_reducedquality.jpg",
    caption: {
      en: "Bold, sculptural impasto and palette-knife relief turn Dunlewey’s terrain into a sensorial encounter of movement and feeling.",
      zh: "雕塑般大胆的厚涂与画刀浮雕，将邓卢伊的地貌化为一场关于运动与情感的感官体验。"
    },
    featured: false
  },
  {
    id: "a6",
    title: { en: "Solas Ghleann Bheatha (Radiance of Glenveagh)", zh: "格伦维之光" },
    year: 2025,
    medium: OIL_ON_CANVAS,
    size: "51 × 41 cm",
    image: "images/OilPainting_LinLi_SolasGhleannBheatha_RadianceOfGlenveagh_reducedquality.jpg",
    caption: {
      en: "Short, directional strokes thread light across lake and sky; contrasting blues, yellows, and oranges evoke spiritual calm and tension.",
      zh: "短促的方向性笔触让光线穿行于湖面与天空之间；蓝、黄、橙的对比色唤起精神上的宁静与张力。"
    },
    featured: false
  },
  {
    id: "a7",
    title: { en: "Symphony of the Dome, Béal Feirste", zh: "穹顶交响曲·贝尔法斯特" },
    year: 2025,
    medium: OIL_ON_CANVAS,
    size: "30 × 30 cm",
    image: "images/OilPainting_LinLi_SymphonyOfTheDome_BealFeirste_reducedquality.jpg",
    caption: {
      en: "Belfast City Hall amid kinetic urban rhythm: impasto, chromatic contrasts, and gestural light articulate monument and modern tempo.",
      zh: "置身于跃动城市节奏中的贝尔法斯特市政厅：厚涂、色彩对比与富有笔势的光影，诠释了纪念性建筑与现代都市的节奏。"
    },
    featured: false
  }
];

const EXHIBITIONS = [
  { when: "2026",
    where: { en: "Bu Xi: Contemporary Chinese Painting Exhibition (China / Russia)", zh: "Bu Xi 当代中国绘画展（中国 / 俄罗斯）" },
    desc:  { en: "Juried online exhibition.", zh: "线上评审展。" } },
  { when: "2026",
    where: { en: "Kirkcudbright Galleries, Dumfries and Galloway, Scotland (UK)", zh: "柯尔库布里美术馆，苏格兰邓弗里斯-加洛韦（英国）" },
    desc:  { en: "Common Ground: The Living Landscape — Group exhibition.", zh: "“共同之地：鲜活的风景”——群展。" } },
  { when: "2026",
    where: { en: "ISLAND Arts Centre, Lisburn, NI (UK)", zh: "ISLAND 艺术中心，北爱尔兰利斯本（英国）" },
    desc:  { en: "The Anna Cheyne Centenary Award Exhibition — Group exhibition.", zh: "安娜·切恩百年纪念奖展览——群展。" } },
  { when: "2025",
    where: { en: "One Home Art Gallery (Room 2), Belfast, NI (UK)", zh: "One Home 艺术画廊（2号展厅），北爱尔兰贝尔法斯特（英国）" },
    desc:  { en: "Across Eurasia, Encountering Ulster — Solo Exhibition.", zh: "“跨越欧亚，邂逅阿尔斯特”——个展。" } },
  { when: "2025",
    where: { en: "RSA Edinburgh, UK (Visual Arts Scotland)", zh: "苏格兰皇家学院（RSA），英国爱丁堡（苏格兰视觉艺术协会）" },
    desc:  { en: "The Thread That Pulls — 30 x 30, Group exhibition.", zh: "“牵引之线”——30 x 30，群展。" } },
  { when: "2025",
    where: { en: "Castle Park Arts Centre, Cheshire (UK)", zh: "城堡公园艺术中心，柴郡（英国）" },
    desc:  { en: "40th Annual Open Exhibition — Group exhibition.", zh: "第40届年度公开展——群展。" } },
  { when: "2025",
    where: { en: "Colors of Humanity Art Gallery (USA)", zh: "Colors of Humanity 艺术画廊（美国）" },
    desc:  { en: "Landscapes (Online) - Group exhibition, awarded Noteworthy Distinction.", zh: "“风景”线上群展，获“杰出荣誉奖”（Noteworthy Distinction）。" } },
  { when: "2025",
    where: { en: "Boomer Gallery, London (UK)", zh: "Boomer 画廊，伦敦（英国）" },
    desc:  { en: "Dreams & Nightmares - Group exhibition.", zh: "“梦与梦魇”——群展。" } },
  { when: "2024",
    where: { en: "Xinyang City Cultural Centre, Henan (China)", zh: "河南省信阳市文化馆（中国）" },
    desc:  { en: "Folk Art Exhibition (Spring Festival) - Group exhibition.", zh: "春节民间艺术展——群展。" } },
  { when: "2024",
    where: { en: "Erenhot City Cultural Centre, Inner Mongolia (China)", zh: "内蒙古二连浩特市文化馆（中国）" },
    desc:  { en: "Northern Frontier · Northern Gateway - Group exhibition.", zh: "“北疆·北门”——群展。" } },
  { when: "2024",
    where: { en: "Baojing County Cultural Centre, Hunan (China)", zh: "湖南省保靖县文化馆（中国）" },
    desc:  { en: "Literature, Calligraphy and Fine Art Exhibition - Group exhibition.", zh: "文学、书法、美术作品展——群展。" } },
  { when: "2023",
    where: { en: "Longgang District Cultural Centre, Shenzhen (China)", zh: "深圳市龙岗区文化馆（中国）" },
    desc:  { en: "Fine Art, Calligraphy and Photography Touring Exhibition - Group exhibition.", zh: "美术、书法、摄影巡回展——群展。" } },
  { when: "2022",
    where: { en: "Zhengda Arts Studio, Luoyang (China)", zh: "正大艺术工作室，洛阳（中国）" },
    desc:  { en: "In the Cracks of Growth - Solo Exhibition.", zh: "“在成长的裂缝中”——个展。" } },
  { when: "2022",
    where: { en: "Songyang Cultural Activity Centre, Dengfeng, Henan (China)", zh: "河南省登封市嵩阳文化活动中心（中国）" },
    desc:  { en: "Ink Painting and Calligraphy Exhibition - Group exhibition.", zh: "水墨画与书法展——群展。" } },
  { when: "2021",
    where: { en: "Jiaozuo, Henan (China)", zh: "河南焦作（中国）" },
    desc:  { en: "Fine Art and Calligraphy Exhibition - Group exhibition.", zh: "美术与书法作品展——群展。" } },
  { when: "2019",
    where: { en: "Anyang, Henan (China)", zh: "河南安阳（中国）" },
    desc:  { en: "Fine Art Exhibition - Group exhibition.", zh: "美术作品展——群展。" } },
  { when: "2017",
    where: { en: "Dunhuang, Gansu (China)", zh: "甘肃敦煌（中国）" },
    desc:  { en: "Fine Art Exhibition - Group exhibition.", zh: "美术作品展——群展。" } }
];

const ABOUT = {
  bio: {
    en: "Lin Li (李琳) is a Belfast-based visual artist exploring cross-continental connections and cultural dialogue through expressive oil painting.",
    zh: "李琳（Lín Li）是一位常驻贝尔法斯特的视觉艺术家，以富有表现力的油画探索跨越大陆的联系与文化对话。"
  },
  // The first paragraph is displayed as the highlighted lead quote.
  statement: {
    en: [
      "I am a contemporary painter working between Ulster landscapes and East Asian philosophical traditions. My practice explores landscape as a cultural and psychological space shaped by memory, migration, and lived experience.",
      "Drawing on oil painting and the conceptual structures of Chinese ink painting, my work emphasizes slowness, material presence, and spatial restraint—constructing painterly environments that reflect inner states and collective histories rather than specific locations.",
      "Since relocating to the UK, my practice has developed through professionally curated and juried exhibitions nationally and internationally. Alongside exhibition activity, research, archival engagement, and sustained observation of place form a core part of my methodology, contributing a cross-cultural perspective to the UK’s contemporary visual arts landscape."
    ],
    zh: [
      "我是一名当代画家，游走于阿尔斯特的风景与东亚哲学传统之间。我的创作将风景视为一个由记忆、迁徙与生活经验共同塑造的文化与心理空间。",
      "我借鉴油画语言与中国水墨画的观念结构，强调缓慢、物质的在场感与空间上的克制——所构建的绘画场域映照的是内心状态与集体历史，而非某个具体的地点。",
      "移居英国以来，我的创作在国内外专业策展与评审展览中不断发展。除展览活动外，研究、档案考察以及对地方的长期观察构成了我创作方法的核心，为英国当代视觉艺术领域带来跨文化的视角。"
    ]
  },
  cv: [
    { en: "2025 - Colors of Humanity Art Gallery (USA) - Landscapes (October, selected)", zh: "2025 - Colors of Humanity 艺术画廊（美国）-“风景”主题展（10月，入选）" },
    { en: "2025 - Boomer Gallery, London - Group exhibition (recent)", zh: "2025 - Boomer 画廊，伦敦 - 群展（近期）" },
    { en: "2025 - The Green Room, Black Box Belfast - Solo proposal submitted", zh: "2025 - The Green Room，Black Box 贝尔法斯特 - 已提交个展方案" }
  ]
};

// Interface text. Keys are referenced from index.html via data-i18n / data-i18n-placeholder.
const UI = {
  en: {
    "meta.title": "Artist Portfolio — Lín Li",
    "meta.description": "Portfolio website for a contemporary oil painter: gallery, exhibitions, bio, and contact.",
    "lang.switch": "中文",
    "lang.switchLabel": "切换到中文",
    "nav.home": "Home",
    "nav.gallery": "Gallery",
    "nav.exhibitions": "Exhibitions",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.title": "Oil Paintings by Lín Li",
    "hero.tag": "Irish landscapes in oil - heavy impasto, directional strokes, shifting skies.",
    "hero.quote": "“My work is about bridging distances - geographical, cultural, and emotional.” - Lín Li",
    "hero.viewGallery": "View Gallery",
    "hero.bio": "Artist Bio",
    "gallery.title": "Gallery",
    "exhibitions.title": "Exhibitions",
    "about.title": "About the Artist",
    "about.statement": "Artist Statement",
    "about.cv": "Selected CV",
    "about.cvDownload": "Download CV (PDF)",
    "contact.title": "Contact",
    "contact.intro": "If you’re interested in originals, commissions, or exhibition opportunities, please get in touch.",
    "contact.email": "Email:",
    "contact.instagram": "Instagram:",
    "form.name": "Name",
    "form.namePh": "Your name",
    "form.email": "Email",
    "form.emailPh": "you@example.com",
    "form.message": "Message",
    "form.messagePh": "Tell me about the piece you like…",
    "form.send": "Send",
    "form.opening": "Opening your email app…",
    "form.subject": "Portfolio enquiry from {name}",
    "footer": "© {year} Lín Li. All rights reserved.",
    "art.caption": "{title} ({year}) — {medium}, {size}. {caption}",
    "art.alt": "{title} — {medium}, {size}"
  },
  zh: {
    "meta.title": "李琳 Lín Li — 油画艺术家作品集",
    "meta.description": "当代油画艺术家李琳的作品集网站：作品、展览、简介与联系方式。",
    "lang.switch": "EN",
    "lang.switchLabel": "Switch to English",
    "nav.home": "首页",
    "nav.gallery": "作品",
    "nav.exhibitions": "展览",
    "nav.about": "关于",
    "nav.contact": "联系",
    "hero.title": "李琳油画作品",
    "hero.tag": "以油彩描绘爱尔兰风景——厚涂肌理、方向性笔触与变幻的天空。",
    "hero.quote": "“我的作品关乎跨越距离——地理的、文化的，以及情感的。”——李琳",
    "hero.viewGallery": "浏览作品",
    "hero.bio": "艺术家简介",
    "gallery.title": "作品",
    "exhibitions.title": "展览经历",
    "about.title": "关于艺术家",
    "about.statement": "艺术家自述",
    "about.cv": "简历精选",
    "about.cvDownload": "下载简历（PDF，英文）",
    "contact.title": "联系方式",
    "contact.intro": "如您对原作收藏、委托创作或展览合作感兴趣，欢迎与我联系。",
    "contact.email": "邮箱：",
    "contact.instagram": "Instagram：",
    "form.name": "姓名",
    "form.namePh": "您的姓名",
    "form.email": "邮箱",
    "form.emailPh": "you@example.com",
    "form.message": "留言",
    "form.messagePh": "请告诉我您喜欢哪件作品…",
    "form.send": "发送",
    "form.opening": "正在打开您的邮件应用…",
    "form.subject": "作品咨询：{name}",
    "footer": "© {year} 李琳。保留所有权利。",
    "art.caption": "{title}（{year}）—— {medium}，{size}。{caption}",
    "art.alt": "{title} —— {medium}，{size}"
  }
};

// =====================================================================
//  Language handling
// =====================================================================
const LANGS = { en: "en", zh: "zh-Hans" };   // our key -> HTML lang attribute
let lang = detectLang();

function detectLang(){
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (fromUrl && LANGS[fromUrl]) return fromUrl;
  try {
    const saved = localStorage.getItem('lang');
    if (saved && LANGS[saved]) return saved;
  } catch (e) { /* storage unavailable */ }
  return (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

function setLang(next){
  lang = next;
  try { localStorage.setItem('lang', next); } catch (e) { /* ignore */ }
  const url = new URL(location.href);
  if (next === 'en') url.searchParams.delete('lang'); else url.searchParams.set('lang', next);
  history.replaceState(null, '', url);
  render();
}

// Pick the current language from a {en, zh} value (or return a plain string as-is).
function L(v){
  if (v == null || typeof v !== 'object' || Array.isArray(v)) return v;
  return v[lang] ?? v.en;
}
// Interface string with {placeholders}.
function t(key, vars = {}){
  const s = UI[lang][key] ?? UI.en[key] ?? key;
  return s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
}

// =====================================================================
//  Minimal client-side router
// =====================================================================
const routes = Array.from(document.querySelectorAll('.route'));
const links = Array.from(document.querySelectorAll('[data-route]'));
function setRoute(hash){
  const target = (hash || location.hash || '#home').replace('#','');
  routes.forEach(s => s.hidden = s.id !== target);
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${target}`));
}
window.addEventListener('hashchange', () => setRoute(location.hash));

// =====================================================================
//  Render
// =====================================================================
function byId(id){ return document.getElementById(id); }

function el(tag, className, text){
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function artAlt(a){ return t('art.alt', { title: L(a.title), medium: L(a.medium), size: a.size }); }

function render(){
  // Document language, title and description
  document.documentElement.lang = LANGS[lang];
  document.title = t('meta.title');
  document.querySelector('meta[name="description"]').setAttribute('content', t('meta.description'));

  // Static interface text
  document.querySelectorAll('[data-i18n]').forEach(n => { n.textContent = t(n.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(n => { n.placeholder = t(n.dataset.i18nPlaceholder); });

  const toggle = byId('langToggle');
  toggle.textContent = t('lang.switch');
  toggle.setAttribute('aria-label', t('lang.switchLabel'));
  toggle.lang = lang === 'en' ? LANGS.zh : LANGS.en;   // the label is in the *other* language

  // Site details
  byId('brandName').textContent = L(SITE.artist);
  byId('footerText').textContent = t('footer', { year: new Date().getFullYear() });
  byId('heroImg').src = SITE.hero;
  const email = SITE.email || 'hello@example.com';
  byId('emailLink').href = `mailto:${email}`;
  byId('emailLink').textContent = email;
  const ig = SITE.instagram ? `https://instagram.com/${SITE.instagram}` : '#';
  byId('igLink').href = ig;
  byId('igLink').textContent = SITE.instagram ? `@${SITE.instagram}` : '@instagram';
  if (SITE.cvPdfUrl && SITE.cvPdfUrl !== '#') byId('cvDownload').href = SITE.cvPdfUrl;

  // About
  byId('bioText').textContent = L(ABOUT.bio);
  const statementEl = byId('statementText');
  statementEl.className = 'artist-statement';
  statementEl.replaceChildren(el('h3', null, t('about.statement')));
  L(ABOUT.statement).forEach((para, i) => statementEl.appendChild(el('p', i === 0 ? 'lead-quote' : null, para)));

  // CV
  byId('cvList').replaceChildren(...ABOUT.cv.map(item => el('li', null, L(item))));

  // Exhibitions
  byId('exhibitionsList').replaceChildren(...EXHIBITIONS.map(e => {
    const row = el('div', 'exhibit');
    const head = el('div');
    head.append(el('div', 'when', e.when), el('div', 'where', L(e.where)));
    row.append(head, el('div', 'desc', L(e.desc)));
    return row;
  }));

  // Gallery
  byId('galleryGrid').replaceChildren(...ARTWORKS.map(a => {
    const card = el('article', 'art');
    const thumb = el('div', 'thumb');
    const img = el('img');
    img.src = a.image; img.alt = artAlt(a); img.loading = 'lazy';
    thumb.appendChild(img);
    thumb.addEventListener('click', () => openLightbox(a));
    const meta = el('div', 'meta');
    meta.append(el('div', 'title', L(a.title)), el('div', 'year', a.year));
    card.append(thumb, meta, el('div', 'medium', `${L(a.medium)} · ${a.size}`));
    return card;
  }));

  // Mini gallery strip: 4 highlights (featured first, then most recent)
  const highlights = [...ARTWORKS]
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.year - a.year)
    .slice(0, 4);
  byId('miniStrip').replaceChildren(...highlights.map(a => {
    const div = el('div', 'mini-item');
    const img = el('img');
    img.src = a.image; img.alt = artAlt(a); img.loading = 'lazy';
    const cap = el('div', 'mini-cap', `${L(a.title)} `);
    const yr = el('span', null, `(${a.year})`);
    yr.style.opacity = '.7';
    cap.appendChild(yr);
    div.append(img, cap);
    // Click: open lightbox AND navigate to Gallery
    div.addEventListener('click', () => { location.hash = '#gallery'; openLightbox(a); });
    return div;
  }));

  // Clear any language-specific status message
  byId('formMsg').textContent = '';
}

// =====================================================================
//  Lightbox
// =====================================================================
const lb = byId('lightbox');
function openLightbox(a){
  byId('lbImg').src = a.image;
  byId('lbImg').alt = artAlt(a);
  byId('lbCap').textContent = t('art.caption', {
    title: L(a.title), year: a.year, medium: L(a.medium), size: a.size, caption: L(a.caption) || ''
  });
  lb.classList.add('open');
}
lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
window.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });

// =====================================================================
//  Contact form (mailto fallback)
// =====================================================================
byId('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');
  const subject = encodeURIComponent(t('form.subject', { name }));
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  byId('formMsg').textContent = t('form.opening');
});

// Language toggle
byId('langToggle').addEventListener('click', () => setLang(lang === 'en' ? 'zh' : 'en'));

// Init
render();
setRoute(location.hash || '#home');
