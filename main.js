    // ======= Editable content =======
    const SITE = {
      artist: "Lín Li",
      tag: "Irish landscapes in oil - heavy impasto, directional strokes, shifting skies.",
      email: "lli30@qub.ac.uk",
      instagram: "lilinpalette",
      hero: "images/OilPainting_LinLi_SymphonyOfTheDome_BealFeirste_reducedquality.jpg",
      cvPdfUrl: "CV/CV_LIN_LI.pdf"
    };

    // Provide artworks. Replace image URLs with your own files (Netlify/Cloudinary/GitHub raw URLs work well)
    const ARTWORKS = [
  {
    id: "a1",
    title: "Crimson Plateau of An Mhucais",
    year: 2025,
    medium: "Oil on canvas",
    size: "15 × 22 cm",
    image: "images/LIN_LI_Crimson_Plateau_of_An_Mhucais_reducedquality.jpg",
    caption: "A semi-abstract vision of Muckish at dusk: saturated crimsons and sweeping impasto animate a ‘glowing plateau’ felt between waking and dream.",
    featured: true
  },
  {
    id: "a2",
    title: "Dathanna An Earagail (Colours of Errigal)",
    year: 2025,
    medium: "Oil on canvas",
    size: "30×30 cm",
    image: "images/LIN_LI_MA_OIL_30cmx30cm_2025_reducedquality.jpg",
    caption: "Errigal as a locus of emotion: complementary blues and oranges, directional strokes, and impasto unite sky and land in motion.",
    featured: false
  },
  {
    id: "a3",
    title: "Somnolent Fever of a Dreaming Oilean Reachlainn",
    year: 2025,
    medium: "Oil on canvas",
    size: "40×30 cm",
    image: "images/LIN_LI_MA_OIL_40cmx30cm_2025_reducedquality.jpg",
    caption: "Heavy oil and palette-knife textures emphasise surface and gesture—matter painting meets landscape.",
    featured: false
  },
  {
    id: "a4",
    title: "The Winds of Sliabh Mis",
    year: 2025,
    medium: "Oil on canvas",
    size: "30x30 cm",
    image: "images/LIN_LI_TheWindsOfSliabhMis_reducedquality.jpg",
    caption: "Vigorous, rhythmic strokes render Slemish’s contours; swirling skies and high-purity hues convey seasonal vitality and inner resonance.",
    featured: false
  },
  {
    id: "a5",
    title: "Sleepwalking, Dún Luiche",
    year: 2025,
    medium: "Oil on canvas",
    size: "40x30 cm",
    image: "images/linli_sleepwalking_dun_luiche_reducedquality.jpg",
    caption: "Bold, sculptural impasto and palette-knife relief turn Dunlewey’s terrain into a sensorial encounter of movement and feeling.",
    featured: false
  },
  {
    id: "a6",
    title: "Solas Ghlean Bhreath (Radiance of Glenveagh)",
    year: 2025,
    medium: "Oil on canvas",
    size: "51x41 cm",
    image: "images/OilPainting_LinLi_SolasGhleannBheatha_RadianceOfGlenveagh_reducedquality.jpg",
    caption: "Short, directional strokes thread light across lake and sky; contrasting blues, yellows, and oranges evoke spiritual calm and tension.",
    featured: false
  },
  {
    id: "a7",
    title: "Symphony of the Dome, Béal Feirste",
    year: 2025,
    medium: "Oil on canvas",
    size: "30x30 cm", // fill in
    image: "images/OilPainting_LinLi_SymphonyOfTheDome_BealFeirste_reducedquality.jpg",
    caption: "Belfast City Hall amid kinetic urban rhythm: impasto, chromatic contrasts, and gestural light articulate monument and modern tempo.",
    featured: false
  }
];


const EXHIBITIONS = [
      { when: "2026", where: "Bu Xi: Contemporary Chinese Painting Exhibition (China / Russia)", desc: "Juried online exhibition." },
      { when: "2026", where: "Kirkcudbright Galleries, Dumfries and Galloway, Scotland (UK)", desc: "Common Ground: The Living Landscape — Group exhibition." },
      { when: "2026", where: "ISLAND Arts Centre, Lisburn, NI (UK)", desc: "The Anna Cheyne Centenary Award Exhibition — Group exhibition." },
      { when: "2025", where: "One Home Art Gallery (Room 2), Belfast, NI (UK)", desc: "Across Eurasia, Encountering Ulster — Solo Exhibition." },
      { when: "2025", where: "RSA Edinburgh, UK (Visual Arts Scotland)", desc: "The Thread That Pulls — 30 x 30, Group exhibition." },
      { when: "2025", where: "Castle Park Arts Centre, Cheshire (UK)", desc: "40th Annual Open Exhibition — Group exhibition." },
      { when: "2025", where: "Colors of Humanity Art Gallery (USA)", desc: "Landscapes (Online) - Group exhibition, awarded Noteworthy Distinction." },
      { when: "2025", where: "Boomer Gallery, London (UK)", desc: "Dreams & Nightmares - Group exhibition." },
      { when: "2024", where: "Xinyang City Cultural Centre, Henan (China)", desc: "Folk Art Exhibition (Spring Festival) - Group exhibition." },
      { when: "2024", where: "Erenhot City Cultural Centre, Inner Mongolia (China)", desc: "Northern Frontier · Northern Gateway - Group exhibition." },
      { when: "2024", where: "Baojing County Cultural Centre, Hunan (China)", desc: "Literature, Calligraphy and Fine Art Exhibition - Group exhibition." },
      { when: "2023", where: "Longgang District Cultural Centre, Shenzhen (China)", desc: "Fine Art, Calligraphy and Photography Touring Exhibition - Group exhibition." },
      { when: "2022", where: "Zhengda Arts Studio, Luoyang (China)", desc: "In the Cracks of Growth - Solo Exhibition." },
      { when: "2022", where: "Songyang Cultural Activity Centre, Dengfeng, Henan (China)", desc: "Ink Painting and Calligraphy Exhibition - Group exhibition." },
      { when: "2021", where: "Jiaozuo, Henan (China)", desc: "Fine Art and Calligraphy Exhibition - Group exhibition." },
      { when: "2019", where: "Anyang, Henan (China)", desc: "Fine Art Exhibition - Group exhibition." },
      { when: "2017", where: "Dunhuang, Gansu (China)", desc: "Fine Art Exhibition - Group exhibition." }
    ];

    const ABOUT = {
        bio: "Lin Li (李琳) is a Belfast-based visual artist exploring cross-continental connections and cultural dialogue through expressive oil painting.",
        statement: "I am a contemporary painter working between Ulster landscapes and East Asian philosophical traditions. My practice explores landscape as a cultural and psychological space shaped by memory, migration, and lived experience. Drawing on oil painting and the conceptual structures of Chinese ink painting, my work emphasises slowness, material presence, and spatial restraint. I construct painterly environments that reflect inner states and collective histories rather than specific locations. Since relocating to the UK, my practice has developed through professionally curated and juried exhibitions nationally and internationally, supported by independent critical responses. Alongside exhibition activity, research, archival engagement, and sustained observation of place form a core part of my methodology, contributing a cross-cultural perspective to the UK’s contemporary visual arts landscape.",
        cv: [
          "2025 - Colors of Humanity Art Gallery (USA) - Landscapes (October, selected)",
          "2025 - Boomer Gallery, London - Group exhibition (recent)",
          "2025 - The Green Room, Black Box Belfast - Solo proposal submitted",
        ]
      };

    // ======= Minimal client-side router =======
    const routes = Array.from(document.querySelectorAll('.route'));
    const links = Array.from(document.querySelectorAll('[data-route]'));
    function setRoute(hash){
      const target = (hash || location.hash || '#home').replace('#','');
      routes.forEach(s => s.hidden = s.id !== target);
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${target}`));
    }
    window.addEventListener('hashchange', () => setRoute(location.hash));

    // ======= Render dynamic content =======
    function byId(id){ return document.getElementById(id); }
    function renderSite(){
      byId('brandName').textContent = SITE.artist;
      byId('siteTitle').textContent = `Oil Paintings by ${SITE.artist}`;
      byId('siteTag').textContent = SITE.tag;
      byId('siteQuote').textContent = '“My work is about bridging distances - geographical, cultural, and emotional.” - Lín Li';
      byId('footerName').textContent = SITE.artist;
      byId('year').textContent = new Date().getFullYear();
      byId('heroImg').src = SITE.hero;
      const email = SITE.email || 'hello@example.com';
      byId('emailLink').href = `mailto:${email}`;
      byId('emailLink').textContent = email;
      const ig = SITE.instagram ? `https://instagram.com/${SITE.instagram}` : '#';
      byId('igLink').href = ig; byId('igLink').textContent = SITE.instagram ? `@${SITE.instagram}` : '@instagram';
      if(SITE.cvPdfUrl && SITE.cvPdfUrl !== '#') byId('cvDownload').href = SITE.cvPdfUrl;

      // About
    byId('bioText').textContent = ABOUT.bio;

    const statementEl = byId('statementText');
    statementEl.className = "artist-statement";
    statementEl.innerHTML = `
      <h3>Artist Statement</h3>
      <p class="lead-quote">
        “I am a contemporary painter working between Ulster landscapes and East Asian philosophical traditions. My practice explores landscape as a cultural and psychological space shaped by memory, migration, and lived experience.”
      </p>
      <p>
        Drawing on oil painting and the conceptual structures of Chinese ink painting, my work emphasizes slowness, material presence, and spatial restraint—constructing painterly environments that reflect inner states and collective histories rather than specific locations.
      </p>
      <p>
        Since relocating to the UK, my practice has developed through professionally curated and juried exhibitions nationally and internationally. Alongside exhibition activity, research, archival engagement, and sustained observation of place form a core part of my methodology, contributing a cross-cultural perspective to the UK’s contemporary visual arts landscape.
      </p>
    `;

      // CV
      const cvList = byId('cvList');
      cvList.innerHTML = '';
      ABOUT.cv.forEach(item => { const li = document.createElement('li'); li.textContent = item; cvList.appendChild(li); });

      // Exhibitions
      const ex = byId('exhibitionsList');
      ex.innerHTML = '';
      EXHIBITIONS.forEach(e => {
        const row = document.createElement('div'); row.className = 'exhibit';
        row.innerHTML = `<div><div class="when">${e.when}</div><div class="where">${e.where}</div></div><div class="desc">${e.desc}</div>`;
        ex.appendChild(row);
      });

      // Gallery
      const grid = byId('galleryGrid');
      grid.innerHTML = '';
      ARTWORKS.forEach(a => {
        const card = document.createElement('article');
        card.className = 'art';
        card.innerHTML = `
          <div class="thumb"><img src="${a.image}" alt="${a.title} — ${a.medium}, ${a.size}" loading="lazy" /></div>
          <div class="meta"><div class="title">${a.title}</div><div class="year">${a.year}</div></div>
          <div class="medium">${a.medium} · ${a.size}</div>
        `;
        card.querySelector('.thumb').addEventListener('click', () => openLightbox(a));
        grid.appendChild(card);
      });
    }

      // Mini gallery strip: pick 4 highlights (featured first, then recent)
      const strip = byId('miniStrip');
      if (strip) {
        strip.innerHTML = '';
        const highlights = [...ARTWORKS]
          .sort((a, b) => (b.featured?1:0) - (a.featured?1:0) || b.year - a.year)
          .slice(0, 4);
      
        highlights.forEach(a => {
          const div = document.createElement('div');
          div.className = 'mini-item';
          div.innerHTML = `
            <img src="${a.image}" alt="${a.title} — ${a.medium}, ${a.size}" loading="lazy">
            <div class="mini-cap">${a.title} <span style="opacity:.7">(${a.year})</span></div>
          `;
      // Click: open lightbox AND navigate to Gallery
      div.addEventListener('click', () => {
        location.hash = '#gallery';
        openLightbox(a);
      });
      strip.appendChild(div);
    });
  }


    // ======= Lightbox =======
    const lb = byId('lightbox');
    function openLightbox(a){
      byId('lbImg').src = a.image;
      byId('lbCap').textContent = `${a.title} (${a.year}) — ${a.medium}, ${a.size}. ${a.caption || ''}`;
      lb.classList.add('open');
    }
    lb.addEventListener('click', e => { if(e.target === lb) lb.classList.remove('open'); });
    window.addEventListener('keydown', e => { if(e.key === 'Escape') lb.classList.remove('open'); });

    // ======= Contact form (mailto fallback) =======
    document.getElementById('contactForm').addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(e.target);
      const name = data.get('name');
      const email = data.get('email');
      const message = data.get('message');
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
      document.getElementById('formMsg').textContent = "Opening your email app…";
    });

    // Init
    renderSite();
    setRoute('#home');
