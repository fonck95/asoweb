import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

// --- IMPORTACIÓN DE ASSETS ---
// Productos Frescos
import sandiaImg from './assets/sandia.jpeg';
import melonImg from './assets/melon.jpeg';
import ahuyamaImg from './assets/ahuyama.jpeg';

// Infraestructura Industrial
import plantaImg from './assets/planta.jpeg';
import concentradoImg from './assets/concentrado.jpeg';

// --- COMPONENTES ---

// Icono de menú hamburguesa
const MenuIcon = ({ isOpen }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {isOpen ? (
      <>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </>
    ) : (
      <>
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </>
    )}
  </svg>
);

// Icono de ubicación accesible
const LocationIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="location-icon"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

// Icono de check/frescura
const FreshIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="fresh-icon"
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
);

function App() {
  // Estados para UI interactiva
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para efectos del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Cerrar menú al hacer click en un enlace
  const handleNavClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Toggle del menú móvil
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // Datos de Productos Frescos
  const products = [
    {
      id: 1,
      name: "Sandía Crimson Sweet",
      description: "Reconocida por su corteza verde estriada y pulpa rojo intenso. Grados Brix superiores que garantizan dulzura explosiva.",
      image: sandiaImg,
      badgeClass: "red",
      badgeText: "Alta Demanda",
      origin: "Yondó, Zona Baja"
    },
    {
      id: 2,
      name: "Melón Hales Best Jumbo",
      description: "Variedad clásica tipo Cantaloupe. Piel reticulada y pulpa salmón aromática, firme y jugosa. Ideal para exportación.",
      image: melonImg,
      badgeClass: "orange",
      badgeText: "Premium",
      origin: "Valle del Magdalena"
    },
    {
      id: 3,
      name: "Ahuyama Valluna",
      description: "Textura suave y cremosa ideal para la industria. Alto contenido de betacarotenos y cáscara resistente para transporte.",
      image: ahuyamaImg,
      badgeClass: "green",
      badgeText: "Nutrición",
      origin: "Cultivo Sostenible"
    }
  ];

  // Datos de Plantas Industriales
  const industries = [
    {
      id: 1,
      title: "Planta Extractora de Pulpa",
      subtitle: "Línea Sandía & Melón",
      desc: "Procesamiento aséptico para obtención de pulpas naturales y bases para bebidas. Tecnología de prensado en frío para conservar nutrientes.",
      tags: ["Cadena de Frío", "Pasteurización", "Exportación"],
      image: plantaImg
    },
    {
      id: 2,
      title: "Planta de Concentrados",
      subtitle: "Bio-Procesamiento de Ahuyama",
      desc: "Transformación de ahuyama triturada y subproductos en concentrado energético de alto valor para alimentación de especies menores.",
      tags: ["Economía Circular", "Sostenibilidad", "FeedTech"],
      image: concentradoImg
    }
  ];

  return (
    <div className="app">

      {/* Navegación Glassmorphism con efectos de scroll */}
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#inicio" className="brand" onClick={handleNavClick}>
            ASOVICAM
          </a>

          {/* Botón hamburguesa para móviles */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="main-nav"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>

          {/* Navegación principal */}
          <nav id="main-nav" className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
            <ul className="nav-links">
              <li>
                <a href="#inicio" className="nav-link" onClick={handleNavClick}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#productos" className="nav-link" onClick={handleNavClick}>
                  Cosecha
                </a>
              </li>
              <li>
                <a href="#industria" className="nav-link" onClick={handleNavClick}>
                  Industria
                </a>
              </li>
              <li>
                <a href="#contacto" className="btn btn-primary" onClick={handleNavClick}>
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          {/* Overlay para cerrar menú en móvil */}
          {isMenuOpen && (
            <div
              className="nav-overlay"
              onClick={handleNavClick}
              aria-hidden="true"
            />
          )}
        </div>
      </header>

      {/* Hero Section con Parallax */}
      <section id="inicio" className="hero">
        <div className="container hero-content">
          <h1>
            Innovación Agrícola en el{' '}
            <span className="text-accent">Magdalena Medio</span>
          </h1>
          <p>
            Desde Yondó, Antioquia, transformamos la riqueza de nuestra tierra.
            Productores líderes de Sandía Crimson, Melón Jumbo y Ahuyama Valluna,
            integrando tecnología de procesamiento industrial.
          </p>
          <div className="hero-buttons">
            <a href="#productos" className="btn btn-primary">
              Ver Productos
            </a>
            <a href="#industria" className="btn btn-outline">
              Nuestras Plantas
            </a>
          </div>
        </div>
      </section>

      {/* Intro Institucional */}
      <section className="intro">
        <div className="container">
          <div className="section-header">
            <h2>Pasión por el Agro Colombiano</h2>
            <p>
              ASOVICAM representa la unión de agricultores visionarios comprometidos
              con la calidad, la sostenibilidad y el desarrollo industrial del campo.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Productos (Cosecha) */}
      <section id="productos" className="products-section">
        <div className="container">
          <div className="section-header">
            <h2>Nuestra Cosecha Selecta</h2>
            <p>Frutas cultivadas con estándares técnicos rigurosos para mercados exigentes.</p>
          </div>

          <div className="grid-3">
            {products.map((item) => (
              <article key={item.id} className="product-card">
                <div className="img-wrapper">
                  <img
                    src={item.image}
                    alt={`${item.name} - producto fresco de ASOVICAM`}
                    loading="lazy"
                  />
                </div>
                <div className="card-body">
                  <span className={`badge badge--${item.badgeClass}`}>
                    {item.badgeText}
                  </span>
                  <h3>{item.name}</h3>
                  <p className="card-description">{item.description}</p>
                  <div className="specs">
                    <span className="spec-item">
                      <LocationIcon />
                      <span>{item.origin}</span>
                    </span>
                    <span className="spec-item">
                      <FreshIcon />
                      <span>100% Fresco</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Industrial (Valor Agregado) */}
      <section id="industria" className="industrial-section">
        <div className="container">
          <div className="section-header">
            <h2>Infraestructura Industrial</h2>
            <p>
              Agregamos valor a nuestra materia prima mediante procesos de
              transformación de última generación.
            </p>
          </div>

          <div className="industrial-grid">
            {industries.map((plant) => (
              <article key={plant.id} className="industrial-card">
                <img
                  src={plant.image}
                  alt={`${plant.title} - instalaciones de ASOVICAM`}
                  className="industrial-bg"
                  loading="lazy"
                />
                <div className="industrial-content">
                  <div className="industrial-tags">
                    {plant.tags.map(tag => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                  <h3>{plant.title}</h3>
                  <h4 className="industrial-subtitle">{plant.subtitle}</h4>
                  <p>{plant.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand brand--footer">ASOVICAM</div>
              <p>
                Asociación Vida en el Campo.<br/>
                Transformando el futuro de Yondó.
              </p>
            </div>

            <div className="footer-location">
              <h3>Ubicación</h3>
              <address>
                <p>Yondó, Antioquia</p>
                <p>Región del Magdalena Medio</p>
                <p>Colombia</p>
              </address>
            </div>

            <div className="footer-contact">
              <h3>Contacto Comercial</h3>
              <p>
                <a href="mailto:comercial@asovicam.co" aria-label="Enviar correo a comercial@asovicam.co">
                  comercial@asovicam.co
                </a>
              </p>
              <p>
                <a href="tel:+573001234567" aria-label="Llamar al +57 300 123 4567">
                  +57 300 123 4567
                </a>
              </p>
              <p>
                <a href="tel:+576041234567" aria-label="Llamar al +57 604 123 4567">
                  +57 604 123 4567
                </a>
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} ASOVICAM. Todos los derechos reservados.
              <span className="footer-separator" aria-hidden="true"> | </span>
              <span>Desarrollado con dedicación para el Agro.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
