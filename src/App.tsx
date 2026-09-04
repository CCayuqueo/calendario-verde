import { Header } from './components/Header';
import { Calendario } from './components/Calendario';
import './index.css'; 

function App() {
  return (
    <div className="contenedor-principal">
      <Header />
      <main>
        <Calendario />
        <p>El área de trabajo está lista.</p>
      </main>
    </div>
  );
}

export default App