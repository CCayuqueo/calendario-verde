import { Header } from './components/Header';
import { Calendario } from './components/Calendario';
import { CarruselEventos } from './components/CarruselEventos';
import './index.css'; 

function App() {
  return (
    <div className="contenedor-principal">
      <Header />
      <main>
        <Calendario />
        <CarruselEventos />
        <p>El área de trabajo está lista.</p>
      </main>
    </div>
  );
}

export default App
