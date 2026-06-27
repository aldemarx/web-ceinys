// Home.jsx — CEINYS · Home institucional
// One-page interactive prototype. Sections: navbar, hero, stats, catálogo,
// por qué CEINYS, cobertura, referidos teaser, footer.

const { useState, useEffect } = React;

/* ---------------------------------------------------------------
   Inline Lucide-style icons (1.5px stroke geometric)
   ---------------------------------------------------------------- */
const Ic = {
  menu: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round"/></svg>,
  close: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 6l12 12M18 6L6 18" strokeLinecap="round"/></svg>,
  arrow: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  mapPin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s-7-7.5-7-13a7 7 0 1114 0c0 5.5-7 13-7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>,
  download: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 4v12M6 11l6 6 6-6M4 20h16" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  calendar: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round"/></svg>,
  handshake: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M11 17l-2 2a2 2 0 11-3-3l3-3"/><path d="M14 19l-1 1a2 2 0 11-3-3l1-1"/><path d="M18 13l2-2a2 2 0 00-3-3l-2 2"/><path d="M5 11l5-5 4 4 2-2 4 4-4 4-4-4-3 3-4-4z"/></svg>,
  layers: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2l10 5-10 5L2 7l10-5z" strokeLinejoin="round"/><path d="M2 12l10 5 10-5M2 17l10 5 10-5" strokeLinejoin="round"/></svg>,
  building: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M9 9h2M13 9h2M9 13h2M13 13h2M9 17h2M13 17h2" strokeLinecap="round"/></svg>,
  tag: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12V4h8l9 9-8 8-9-9z" strokeLinejoin="round"/><circle cx="7.5" cy="7.5" r="1.2" fill="currentColor"/></svg>,
  home: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-7h-6v7H4a1 1 0 01-1-1v-9z" strokeLinejoin="round"/></svg>,
  trees: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M8 16v5M8 16l-3-4h2L4 8h2L4 4h8l-2 4h2l-2 4h2l-3 4"/><path d="M16 21v-4M16 17l-2-3h1.5l-1.5-3h1.5L14 8h4l-1.5 3H18l-1.5 3H18l-2 3" strokeLinejoin="round"/></svg>,
  users: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 21c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"/><circle cx="17" cy="6.5" r="2.5"/><path d="M16 13.2c2.6.4 4.5 2.6 4.5 5.3"/></svg>,
  phone: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L7.9 9.7a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0122 16.9z" strokeLinejoin="round"/></svg>,
  mail: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7" strokeLinejoin="round"/></svg>,
  whatsapp: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 21l1.7-5A8.5 8.5 0 1112 20.5a8.5 8.5 0 01-4.3-1.2L3 21z" strokeLinejoin="round"/><path d="M8.5 8.5c.4-.3.8 0 1 .5l.4 1c.1.3 0 .6-.2.8l-.5.4c.4.9 1.2 1.7 2.1 2.1l.4-.5c.2-.2.5-.3.8-.2l1 .4c.5.2.8.6.5 1l-.3.4c-.4.7-1.3.9-2 .7-1.5-.4-2.8-1.5-3.6-2.9-.4-.7-.4-1.6.1-2.2l.3-.5z" strokeLinejoin="round"/></svg>,
  instagram: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>,
  facebook: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 3h-2a3.5 3.5 0 00-3.5 3.5V9H7v3h2.5v9h3v-9H15l.5-3h-3V7a1 1 0 011-1H15V3z" strokeLinejoin="round"/></svg>,
  tiktok: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 3v11a3 3 0 11-3-3"/><path d="M14 3c.5 2.2 2.3 4 4.5 4.3" strokeLinecap="round"/></svg>,
  linkedin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7v.5M11 17v-4a2.5 2.5 0 015 0v4M11 17v-7" strokeLinecap="round"/></svg>,
};

/* ---------------------------------------------------------------
   NAVBAR
   ---------------------------------------------------------------- */
const NAV_LINKS = [
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'confianza', label: 'Respaldo Legal' },
  { id: 'referidos', label: 'Referidos' },
  { id: 'contacto', label: 'Contacto' },
];

const PROJECTS = [
  { label: 'La Palma Paracas',  href: '#proyectos' },
  { label: 'Sol de Carhuaz',    href: '#proyectos' },
  { label: 'Monte Alegre',      href: '#proyectos' },
  { label: 'Valle Sacta',       href: '#proyectos' },
  { label: 'Altos de Sacta',    href: './proyectoaltos.html' },
  { label: 'Los Sauces',        href: '#proyectos' },
];

function NavBar({ onOpenMenu }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="header-logo" href="#" onClick={(e)=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});}}>
          <img src={window.__resources.logoCeinys} alt="CEINYS" />
        </a>
        <nav className="header-nav">
          <div className="nav-dropdown">
            <button className="nav-dropdown-toggle">
              Proyectos
              <svg className="nav-dropdown-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="nav-dropdown-menu">
              {PROJECTS.map(p => (
                <a key={p.label} href={p.href}
                   onClick={p.href.startsWith('#') ? go(p.href.slice(1)) : undefined}>
                  {p.label}
                </a>
              ))}
            </div>
          </div>
          {NAV_LINKS.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={go(l.id)}>{l.label}</a>
          ))}
        </nav>
        <div className="header-cta-desktop">
          <a className="btn btn-ghost" href="#contacto" onClick={go('contacto')}>
            Hablar con un asesor
          </a>
        </div>
        <button className="header-burger" onClick={onOpenMenu} aria-label="Abrir menú">
          {Ic.menu}
        </button>
      </div>
    </header>
  );
}

/* ---------------------------------------------------------------
   MOBILE OVERLAY (Albamar reference, grafito instead de azul)
   ---------------------------------------------------------------- */
function MobileOverlay({ open, onClose }) {
  const [proyOpen, setProyOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    if (!open) setProyOpen(false);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  const click = (id) => (e) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
    }, 200);
  };

  return (
    <div className={`mobile-overlay ${open ? 'open' : ''}`} aria-hidden={!open}>
      <div className="mobile-overlay-head">
        <img src={window.__resources.logoCeinys} alt="CEINYS" />
        <button className="mobile-overlay-close" onClick={onClose} aria-label="Cerrar menú">
          {Ic.close}
        </button>
      </div>
      <nav className="mobile-overlay-nav">
        <div className={`mobile-overlay-dropdown ${proyOpen ? 'open' : ''}`}>
          <button className="mobile-overlay-dropdown-toggle"
                  style={{ transitionDelay: open ? '120ms' : '0ms' }}
                  onClick={() => setProyOpen(!proyOpen)}>
            Proyectos
            <svg className="mobile-dropdown-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="mobile-overlay-sub">
            {PROJECTS.map(p => (
              <a key={p.label} href={p.href}
                 onClick={p.href.startsWith('#') ? click(p.href.slice(1)) : onClose}>
                {p.label}
              </a>
            ))}
          </div>
        </div>
        {NAV_LINKS.map((l, i) => (
          <a key={l.id} href={`#${l.id}`}
             style={{ transitionDelay: open ? `${180 + i*60}ms` : '0ms' }}
             onClick={click(l.id)}>
            {l.label}
          </a>
        ))}
      </nav>
      <div className="mobile-overlay-foot">
        <a className="btn btn-ghost-light" href="#contacto" onClick={click('contacto')}>
          Hablar con un asesor {Ic.arrow}
        </a>
        <div className="mobile-overlay-social">
          <a href="#" aria-label="Instagram">{Ic.instagram}</a>
          <a href="#" aria-label="Facebook">{Ic.facebook}</a>
          <a href="#" aria-label="TikTok">{Ic.tiktok}</a>
          <a href="#" aria-label="LinkedIn">{Ic.linkedin}</a>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
   HERO
   ---------------------------------------------------------------- */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
      <div className="container">
        <div className="hero-inner">
          <div className="eyebrow">Constructora e Inmobiliaria · Perú</div>
          <h1>Construimos proyectos serios en el <em>sur del Perú</em>.</h1>
          <p className="lead">
            Más de 9 años desarrollando lotes, condominios y casas de campo
            en Ica y Paracas, con respaldo legal verificable.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#proyectos"
               onClick={(e)=>{e.preventDefault();document.getElementById('proyectos').scrollIntoView({behavior:'smooth',block:'start'});}}>
              Ver proyectos {Ic.arrow}
            </a>
            <a className="btn-link" style={{color:'white'}} href="#nosotros"
               onClick={(e)=>{e.preventDefault();document.getElementById('nosotros').scrollIntoView({behavior:'smooth',block:'start'});}}>
              Conocer CEINYS →
            </a>
          </div>
        </div>
      </div>
      <div className="hero-meta">
        <div><strong>14°04′ S · 75°44′ O</strong></div>
        <div>Ica · Paracas · Pisco</div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   STATS BANDA
   ---------------------------------------------------------------- */
const STATS = [
  { num: '9', unit: '+',   lbl: 'años de experiencia operando en el sur chico del Perú' },
  { num: '6',  unit: null, lbl: 'proyectos activos en portafolio' },
  { num: '4',  unit: null, lbl: 'etapas entregadas al 100% en condominio Los Sauces' },
  { num: '10,000', unit: '+', lbl: 'lotes vendidos a lo largo de 9 años de operación' },
];
function StatsBanda() {
  return (
    <section className="stats-banda" aria-label="Indicadores de trayectoria">
      <div className="container">
        {STATS.map((s, i) => (
          <div className="stat" key={i}>
            <div className="stat-num">
              {s.num}{s.unit && <span className="unit">{s.unit}</span>}
            </div>
            <div className="stat-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   PROJECT CARD
   ---------------------------------------------------------------- */
function ProjectCard({ p }) {
  return (
    <article className="pcard" data-brand={p.brand}>
      <div className="pcard-media">
        <span className="pcard-chip" data-tone={p.chipTone}>
          {Ic.tag}{p.chip}
        </span>
        <span className="pcard-pin">{Ic.mapPin}{p.zona}</span>
        <div className="pcard-img">
          <img src={window.__resources[p.photoKey]} alt={p.nombre} loading="lazy" />
        </div>
      </div>
      <div className="pcard-name">
        <h3>{p.nombre}</h3>
        <p className="pcard-sub">{p.tipo} · {p.descripcion}</p>
      </div>
      <div className="pcard-actions">
        <a className="pcard-act secondary" href={p.brochure || '#'}>{Ic.download}Brochure</a>
        <a className="pcard-act primary" href={p.url || '#'}>Ver proyecto {Ic.arrow}</a>
      </div>
    </article>
  );
}

/* ---------------------------------------------------------------
   CATALOG
   ---------------------------------------------------------------- */
function Catalogo() {
  const PROJECTS = window.CEINYS_PROJECTS;
  return (
    <section id="proyectos" className="paper">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Nuestros proyectos</div>
            <h2>Seis proyectos activos en Ica y Paracas.</h2>
          </div>
          <p>
            Cada uno pensado para un perfil de comprador distinto — desde lote
            entry-level hasta casa de campo premium.
          </p>
        </div>
        <div className="cards-grid">
          {PROJECTS.map(p => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   POR QUÉ CEINYS — 4 pilares
   ---------------------------------------------------------------- */
const PILARES = [
  {
    icon: Ic.shield,
    titulo: 'Respaldo legal verificable',
    cuerpo: 'Cada proyecto opera bajo un vehículo legal registrado, con partida registral pública y RUC activo en SUNAT.',
  },
  {
    icon: Ic.calendar,
    titulo: '9 años de operación continua',
    cuerpo: 'Hemos entregado 4 etapas completas de condominio y mantenemos 6 proyectos activos en simultáneo.',
  },
  {
    icon: Ic.handshake,
    titulo: 'Alianzas con constructoras',
    cuerpo: 'Trabajamos con Stellar Property Investments and Builders SAC y Compeinar SAC.',
  },
  {
    icon: Ic.layers,
    titulo: 'Productos para cada perfil',
    cuerpo: 'Desde lotes entry-level hasta casas de campo premium, sin un solo segmento abandonado.',
  },
];
function PorQue() {
  return (
    <section id="nosotros" className="bone">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Por qué CEINYS</div>
            <h2>Cuatro razones por las que vale la pena conocernos.</h2>
          </div>
          <p>
            No prometemos urgencia ni exclusividades. Lo que sí podemos respaldar
            son nuestros años en operación, etapas entregadas y partidas registrales.
          </p>
        </div>
        <div className="pillars">
          {PILARES.map((p, i) => (
            <div className="pillar" key={i}>
              <div className="pillar-icon">{p.icon}</div>
              <h4>{p.titulo}</h4>
              <p>{p.cuerpo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   COBERTURA GEOGRÁFICA — mapa simplificado del Perú
   ---------------------------------------------------------------- */
function Cobertura() {
  return (
    <section id="confianza" className="paper cobertura-sec">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Dónde operamos</div>
            <h2>Concentrados en el sur chico peruano.</h2>
          </div>
          <p>
            El corredor de mayor proyección de revalorización del país: Ica
            y la franja costera de Paracas y Pisco.
          </p>
        </div>

        <div className="coverage">
          <div className="map-wrap" aria-label="Mapa de cobertura: Ica y Paracas">
            <svg className="map-grid" viewBox="0 0 400 420" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <pattern id="coordGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M40 0 L0 0 0 40" fill="none" stroke="#E6E7EB" strokeWidth="0.6"/>
                </pattern>
                <pattern id="coordGridMajor" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
                  <path d="M160 0 L0 0 0 160" fill="none" stroke="#D0D2D7" strokeWidth="0.9"/>
                </pattern>
              </defs>
              <rect width="400" height="420" fill="url(#coordGrid)"/>
              <rect width="400" height="420" fill="url(#coordGridMajor)"/>
              <g fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#A6A8AE" letterSpacing="0.5">
                <text x="6" y="50">13° S</text>
                <text x="6" y="210">14° S</text>
                <text x="6" y="370">15° S</text>
                <text x="40" y="414">76° O</text>
                <text x="200" y="414">75° O</text>
                <text x="360" y="414">74° O</text>
              </g>
            </svg>

            <svg className="map-connector" viewBox="0 0 400 420" preserveAspectRatio="none" aria-hidden="true">
              <line x1="112" y1="178" x2="262" y2="248"
                stroke="#A6A8AE" strokeWidth="1" strokeDasharray="3 4" strokeLinecap="round"/>
            </svg>

            <div className="map-zone-card" style={{ left: '8%', top: '34%' }}>
              <div className="map-zone-icon" data-tone="cian">{Ic.mapPin}</div>
              <div>
                <div className="map-zone-name">Paracas / Pisco</div>
                <div className="map-zone-count">1 proyecto</div>
                <div className="map-zone-coords">13°50′ S · 76°15′ O</div>
              </div>
            </div>
            <div className="map-zone-card" style={{ left: '50%', top: '52%' }}>
              <div className="map-zone-icon" data-tone="naranja">{Ic.mapPin}</div>
              <div>
                <div className="map-zone-name">Ica</div>
                <div className="map-zone-count">5 proyectos</div>
                <div className="map-zone-coords">14°04′ S · 75°43′ O</div>
              </div>
            </div>
          </div>

          <div className="coverage-list">
            <div className="coverage-zone">
              <div className="label">Ica · 5 proyectos</div>
              <h4>Corredor urbano y de campo</h4>
              <ul>
                <li>Sol de Carhuaz · Carretera Carhuaz</li>
                <li>Monte Alegre · Carretera Carhuaz Km 8</li>
                <li>Valle Sacta · Zona Pachacutec</li>
                <li>Altos de Sacta · Extensión Valle Sacta</li>
                <li>Los Sauces · Condominio entry-level</li>
              </ul>
            </div>
            <div className="coverage-zone" style={{ borderLeftColor: 'var(--ceinys-cian-500)' }}>
              <div className="label" style={{ color: 'var(--ceinys-cian-600)' }}>Paracas / Pisco · 1 proyecto</div>
              <h4>Franja costera Panamericana Sur</h4>
              <ul>
                <li>La Palma Paracas · Km 234, Sector Santa Cruz</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   REFERIDOS TEASER
   ---------------------------------------------------------------- */
function Referidos() {
  return (
    <section id="referidos" className="referidos" style={{ paddingTop: 0, paddingBottom: 0 }}>
      <div className="container">
        <div className="referidos-icon">{Ic.handshake}</div>
        <div className="referidos-text">
          <h3>Programa de Referidos CEINYS</h3>
          <p>
            Si conoces a alguien que esté buscando lote o casa propia, refiérelo
            y gana un bono al firmar el contrato. Cualquiera puede referir y aplica
            a los 6 proyectos del grupo.
          </p>
        </div>
        <a className="btn btn-primary" href="#">Conocer el programa {Ic.arrow}</a>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   FOOTER (Los Portales structure, grafito CEINYS)
   ---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={window.__resources.logoCeinysWhite} alt="CEINYS" />
            <p className="razon">CEINYS — Constructora e Inmobiliaria</p>
            <p className="ruc">RUC 20611776391</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">{Ic.instagram}</a>
              <a href="#" aria-label="Facebook">{Ic.facebook}</a>
              <a href="#" aria-label="TikTok">{Ic.tiktok}</a>
              <a href="#" aria-label="LinkedIn">{Ic.linkedin}</a>
            </div>
          </div>

          <div>
            <h5>Proyectos</h5>
            <ul>
              <li><a href="#">La Palma Paracas</a></li>
              <li><a href="#">Sol de Carhuaz</a></li>
              <li><a href="#">Monte Alegre</a></li>
              <li><a href="#">Valle Sacta</a></li>
              <li><a href="#">Altos de Sacta</a></li>
              <li><a href="#">Los Sauces</a></li>
            </ul>
          </div>

          <div>
            <h5>Empresa</h5>
            <ul>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Confianza y respaldo</a></li>
              <li><a href="#">Programa de Referidos</a></li>
              <li><a href="#">Trabaja con nosotros</a></li>
            </ul>
          </div>

          <div>
            <h5>Contacto</h5>
            <ul style={{ gap: 14 }}>
              <li className="contact-item">{Ic.mail}<a href="mailto:contacto@ceinys.pe">contacto@ceinys.pe</a></li>
              <li className="contact-item">{Ic.phone}<a href="tel:+51944263658">+51 944 263 658</a></li>
              <li className="contact-item">{Ic.whatsapp}<a href="https://wa.me/51944263658">WhatsApp</a></li>
            </ul>
          </div>

          <div>
            <h5>Legales</h5>
            <ul>
              <li><a href="#">Términos y condiciones</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Libro de reclamaciones</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>CEINYS — Constructora e Inmobiliaria · RUC 20611776391 · © 2026</div>
          <div className="legal-links">
            <a href="#">Términos</a>
            <a href="#">Privacidad</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------
   APP ROOT
   ---------------------------------------------------------------- */
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="fade-in">
      <NavBar onOpenMenu={() => setMenuOpen(true)} />
      <MobileOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Hero />
        <StatsBanda />
        <Catalogo />
        <PorQue />
        <Cobertura />
        <Referidos />
      </main>
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
