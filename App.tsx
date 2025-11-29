import React from 'react';
import './App.css';

// --- IMPORTACIÓN DE ASSETS ---
// Productos Frescos
import sandiaImg from './assets/sandia.jpeg';
import melonImg from './assets/melon.jpeg';
import ahuyamaImg from './assets/ahuyama.jpeg';

// Infraestructura Industrial (NUEVAS IMÁGENES)
import plantaImg from './assets/planta.jpeg';
import concentradoImg from './assets/concentrado.jpeg';

function App() {

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

  // Datos de Plantas Industriales (Actualizado con imágenes locales)
  const industries = [
    {
      id: 1,
      title: "Planta Extractora de Pulpa",
      subtitle: "Línea Sandía & Melón",
      desc: "Procesamiento aséptico para obtención de pulpas naturales y bases para bebidas. Tecnología de prensado en frío para conservar nutrientes.",
      tags: ["Cadena de Frío", "Pasteurización", "Exportación"],
      image: plantaImg // Usando la imagen local planta.jpeg
    },
    {
      id: 2,
      title: "Planta de Concentrados",
      subtitle: "Bio-Procesamiento de Ahuyama",
      desc: "Transformación de ahuyama triturada y subproductos en concentrado energético de alto valor para alimentación de especies menores.",
      tags: ["Economía Circular", "Sostenibilidad", "FeedTech"],
      image: concentradoImg // Usando la imagen local concentrado.jpeg
    }
  ];

  return (
    <div className="app">
      
      {/* Navegación Glassmorphism */}
      <header className="header">
        <div className="nav-container">
          <div className="brand">ASOVICAM</div>
          <nav>
            <ul className="nav-links">
              <li><a href="#inicio" className="nav-link">Inicio</a></li>
              <li><a href="#productos" className="nav-link">Cosecha</a></li>
              <li><a href="#industria" className="nav-link">Industria</a></li>
              <li><a href="#contacto" className="btn btn-primary">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section con Parallax */}
      <section id="inicio" className="hero">
        <div className="container hero-content">
          <h1>Innovación Agrícola en el <span style={{color: 'var(--color-accent)'}}>Magdalena Medio</span></h1>
          <p>
            Desde Yondó, Antioquia, transformamos la riqueza de nuestra tierra. 
            Productores líderes de Sandía Crimson, Melón Jumbo y Ahuyama Valluna, 
            integrando tecnología de procesamiento industrial.
          </p>
          <div style={{display: 'flex', gap: '1rem'}}>
            <a href="#productos" className="btn btn-primary">Ver Productos</a>
            <a href="#industria" className="btn btn-outline">Nuestras Plantas</a>
          </div>
        </div>
      </section>

      {/* Intro Institucional */}
      <section className="intro">
        <div className="container">
          <div className="section-header">
            <h2>Pasión por el Agro Colombiano</h2>
            <p>ASOVICAM representa la unión de agricultores visionarios comprometidos con la calidad, la sostenibilidad y el desarrollo industrial del campo.</p>
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
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>
                <div className="card-body">
                  <span className={`badge ${item.badgeClass}`}>{item.badgeText}</span>
                  <h3>{item.name}</h3>
                  <p style={{color: '#555', fontSize: '0.95rem'}}>{item.description}</p>
                  <div className="specs">
                    <span>📍 {item.origin}</span>
                    <span>100% Fresco</span>
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
            <p>Agregamos valor a nuestra materia prima mediante procesos de transformación de última generación.</p>
          </div>

          <div className="industrial-grid">
            {industries.map((plant) => (
              <div key={plant.id} className="industrial-card">
                <img src={plant.image} alt={plant.title} className="industrial-bg" />
                <div className="industrial-content">
                  <div style={{marginBottom: '1rem'}}>
                    {plant.tags.map(tag => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                  <h3>{plant.title}</h3>
                  <h4 style={{color: 'var(--color-accent)', fontSize: '1.1rem', marginBottom: '0.5rem'}}>{plant.subtitle}</h4>
                  <p>{plant.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="brand" style={{color: 'white', marginBottom: '1rem'}}>ASOVICAM</div>
              <p>Asociación Vida en el Campo.<br/>Transformando el futuro de Yondó.</p>
            </div>
            
            <div>
              <h3>Ubicación</h3>
              <p>Yondó, Antioquia</p>
              <p>Región del Magdalena Medio</p>
              <p>Colombia</p>
            </div>

            <div>
              <h3>Contacto Comercial</h3>
              <p><a href="mailto:comercial@asovicam.co">comercial@asovicam.co</a></p>
              <p>+57 300 123 4567</p>
              <p>+57 604 123 4567</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} ASOVICAM. Todos los derechos reservados. | Desarrollado con ❤️ para el Agro.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App;