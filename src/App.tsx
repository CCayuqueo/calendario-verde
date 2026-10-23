import { Header } from './components/Header';
import { Calendario } from './components/Calendario';
import { CarruselEventos } from './components/CarruselEventos';
import { FadeIn } from './components/FadeIn';
import './index.css'; 

function App() {
  return (
    <div className="contenedor-principal">
      <Header />
      <main id="inicio">
        <section className="hero" aria-labelledby="titulo-principal">
          <FadeIn className="hero-interior" stagger>
            <p className="hero-etiqueta">Fechas que inspiran cambios</p>
            <h1 id="titulo-principal">
              Un año para cuidar <span>lo que nos rodea.</span>
            </h1>
            <p className="hero-descripcion">
              Explora los días que nos recuerdan la importancia de proteger la naturaleza,
              y encuentra nuevas razones para pasar a la acción.
            </p>
            <a className="boton-principal" href="#calendario">
              Explorar calendario
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </FadeIn>
        </section>

        <section id="calendario" className="contenido-principal" aria-labelledby="titulo-calendario">
          <FadeIn className="encabezado-seccion">
            <div>
              <p className="seccion-etiqueta">Descubre y participa</p>
              <h2 id="titulo-calendario">Calendario ambiental</h2>
            </div>
            <p className="nota-seccion">Una fecha, una oportunidad para actuar.</p>
          </FadeIn>
          <FadeIn className="panel-calendario" stagger>
            <Calendario />
            <CarruselEventos />
          </FadeIn>
        </section>
      </main>
      <footer className="pie-pagina">
        <FadeIn>
          <p>Pequeñas acciones, grandes cambios. Cuidemos nuestro planeta todos los días.</p>
        </FadeIn>
      </footer>
    </div>
  );
}

export default App
