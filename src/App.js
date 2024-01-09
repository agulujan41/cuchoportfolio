
import './App.css';
import Control from './Control';


function App() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
      <div className="container">
        <a className="navbar-brand" href="#inicioSection">Cucho Lujan DEV</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mx-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#inicioSection">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#sobremiSection">Sobre mi</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link text-white" href="#misProyectosSection">Mis proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contactoSection">Contactarme</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section id="inicioSection">
      <div className="contenedor">
        <a href="https://www.google.com" target="_blank"  rel="noreferrer">JORGE VALENTIN LUJAN</a>
        <img
          src="https://img.freepik.com/fotos-premium/3d-dibujos-animados-nino-pequeno-pelo-rojo-cara-pecosa-gafas-sobre-fondo-blanco_812426-4734.jpg"
          alt=""
        />
        <section id="sobremiSection">
          <p>
            Hola, soy Jorge Valentín Luján, un apasionado programador web
            especializado en el desarrollo de aplicaciones utilizando la potente
            tecnología React. Mi experiencia y dedicación en el mundo del desarrollo
            web me han permitido destacarme en la creación de soluciones
            innovadoras. A lo largo de mi carrera, he adquirido una sólida formación
            técnica y he trabajado en diversos proyectos, demostrando un compromiso
            constante con la excelencia en cada línea de código que escribo. Mi
            enfoque se centra en construir interfaces de usuario dinámicas y
            eficientes, aprovechando al máximo las capacidades de React. Creo en la
            importancia de ofrecer experiencias digitales de alta calidad tanto a
            mis clientes como a los usuarios finales. Mi creatividad y habilidades
            proactivas me impulsan a enfrentar nuevos desafíos y mantenerme
            actualizado con las últimas tendencias y tecnologías en constante
            evolución en el desarrollo web. Estoy comprometido con proporcionar
            soluciones que no solo cumplan, sino que superen las expectativas de
            quienes confían en mi trabajo.
          </p>
          <div className="tecnologias">
            <h2>TECNOLOGÍAS QUE MANEJO</h2>
    
            <div id="tecnologiasCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="icons/html.svg" alt="HTML"/>
                        <p>HTML</p>
                    </div>
                    <div className="carousel-item">
                        <img src="icons/css.svg" alt="CSS"/>
                        <p>CSS</p>
                    </div>
                    <div className="carousel-item">
                        <img src="icons/javascript.svg" alt="JavaScript"/>
                        <p>JavaScript</p>
                    </div>
                    <div className="carousel-item">
                        <img src="icons/reactJS.svg" alt="React"/>
                        <p>React JS</p>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#tecnologiasCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#tecnologiasCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Siguiente</span>
                </a>
            </div>
        </div>
        </section>
        
      </div>
    </section>

    <div className="espacio"></div>
    <section id="misProyectosSection">
      <div id="app">
        <div id="hero">
          <h1>PROXIMAMENTE<br/>MIS PROYECTOS</h1>
          <a target="_blank" href="https://www.messi.com" rel="noreferrer">por JVL CUCHO</a>
        </div>
      </div>
    </section>
    <div className="espacio"></div>
    <section id="contactoSection">
        <div className="containerContact">
            <div className="content">
              <div className="left-side">
                <div className="address details">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="topic">Dirección</div>
                  <div className="text-one">Ciudad de Salta</div>
                  <div className="text-two">Argentina</div>
                </div>
                <div className="phone details">
                  <i className="fas fa-phone-alt"></i>
                  <div className="topic">Telefono</div>
                  <div className="text-one">+54 387 491 1911</div>
                  <div className="text-two">+54 387 491 1911</div>
                </div>
                <div className="email details">
                  <i className="fas fa-envelope"></i>
                  <div className="topic">Email</div>
                  <div className="text-one">cucholujan10@gmail.com</div>
                  <div className="text-two">info.cucholujan@gmail.com</div>
                </div>
              </div>
              <div className="right-side">
                <div className="topic-text">Enviame un mensaje para contactarme</div>
                <p>Si tiene algún trabajo mío o algún tipo de consulta relacionada conmigo, puede enviarme un mensaje desde aquí. Es un placer ayudarte.</p>
              <form action="#">
                <div className="input-box">
                  <input type="text" placeholder="Ingresa tu nombre" />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Ingresa tu email" />
                </div>
                <div className="input-box message-box">
                  
                </div>
                <div className="button">
                  <input type="button" value="Enviar Ahora" />
                </div>
              </form>
            </div>
            </div>
          </div>
    </section>
    <div className="espacio"></div>
    <div className="espacio"></div>
    <footer>
      <p >CUCHO LUJAN</p>
      <p>Contacto: 3874918980  - Salta Argentina</p>

      <div className="social-icons">
          <a href="https://www.youtube.com/tucanal" target="_blank" rel="noreferrer" title="Canal de YouTube"><img src="icons/youtube.png" alt="YouTube"/></a>
          <a href="https://github.com/tucuenta" target="_blank"   rel="noreferrer" title="GitHub"><img src="icons/github2.png" alt="GitHub"/></a>
          <a href="https://bitbucket.org/tucuenta" target="_blank" rel="noreferrer" title="Bitbucket"><img src="icons/bitbucket.png" alt="Bitbucket"/></a>
      </div>
  </footer>
  <Control/>
    </>
  );
}

export default App;
