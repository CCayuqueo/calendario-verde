import { useState, useMemo } from 'react';

// Reutilizamos tus funciones de cálculo de fechas dinámicas
const obtenerNthDia = (año: number, mes: number, diaSemana: number, n: number) => {
  const primerDiaDelMes = new Date(año, mes, 1).getDay();
  const diasParaElPrimer = (diaSemana - primerDiaDelMes + 7) % 7;
  return 1 + diasParaElPrimer + (n - 1) * 7;
};

const obtenerUltimoDia = (año: number, mes: number, diaSemana: number) => {
  const ultimoDiaFecha = new Date(año, mes + 1, 0);
  const ultimoDiaDeLaSemana = ultimoDiaFecha.getDay();
  const diasARestar = (ultimoDiaDeLaSemana - diaSemana + 7) % 7;
  return ultimoDiaFecha.getDate() - diasARestar;
};

export function CarruselEventos() {
  // Lógica para detectar los 3 próximos eventos
  const proximosEventos = useMemo(() => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Reseteamos la hora a medianoche para comparar correctamente
    const año = hoy.getFullYear();

    // Mapeamos todos los eventos del año en formato Date
    const eventosDelAño = [
      { fecha: new Date(año, 0, 26), nombre: 'Día de la Educación Ambiental' },
      { fecha: new Date(año, 0, 28), nombre: 'Día Mundial por la reducción de CO2' },
      { fecha: new Date(año, 1, 2), nombre: 'Día Internacional de los Humedales' },
      { fecha: new Date(año, 1, 19), nombre: 'Día Mundial de las Ballenas' },
      { fecha: new Date(año, 2, 1), nombre: 'Día Internacional de los Recicladores de Base' },
      { fecha: new Date(año, 2, 3), nombre: 'Día Mundial de la Naturaleza' },
      { fecha: new Date(año, 2, 5), nombre: 'Día Mundial de la Eficiencia Energética' },
      { fecha: new Date(año, 2, 21), nombre: 'Día Internacional de los Bosques' },
      { fecha: new Date(año, 2, 21), nombre: 'Día Nacional de los Glaciares' },
      { fecha: new Date(año, 2, 22), nombre: 'Día Mundial del Agua' },
      { fecha: new Date(año, 2, 26), nombre: 'Día Mundial del Clima' },
      { fecha: new Date(año, 2, 28), nombre: 'Día Hora del Planeta' },
      { fecha: new Date(año, 3, 7), nombre: 'Día Mundial de la Salud' },
      { fecha: new Date(año, 3, 22), nombre: 'Día de la Tierra' },
      { fecha: new Date(año, 3, 25), nombre: 'Día Mundial de los Pingüinos' },
      { fecha: new Date(año, 3, obtenerUltimoDia(año, 3, 3)), nombre: 'Día Internacional de la Conciencia sobre Ruido' },
      { fecha: new Date(año, 4, obtenerNthDia(año, 4, 6, 2)), nombre: 'Día Internacional de las Aves Migratorias' },
      { fecha: new Date(año, 4, 16), nombre: 'Día Internacional de la Luz' },
      { fecha: new Date(año, 4, 17), nombre: 'Día Internacional del Reciclaje' },
      { fecha: new Date(año, 4, 20), nombre: 'Día Mundial de las Abejas' },
      { fecha: new Date(año, 4, 22), nombre: 'Día Internacional de la Diversidad Biológica' },
      { fecha: new Date(año, 5, 3), nombre: 'Día Mundial de la Bicicleta' },
      { fecha: new Date(año, 5, 5), nombre: 'Día Mundial del Medio Ambiente' },
      { fecha: new Date(año, 5, 8), nombre: 'Día de los Océanos' },
      { fecha: new Date(año, 5, 16), nombre: 'Día Mundial de las Tortugas Marinas' },
      { fecha: new Date(año, 5, 17), nombre: 'Día Mundial de Lucha contra la Desertificación' },
      { fecha: new Date(año, 5, 19), nombre: 'Día Mundial de los Albatros' },
      { fecha: new Date(año, 5, 21), nombre: 'Día del Sol' },
      { fecha: new Date(año, 5, 28), nombre: 'Día Mundial del Árbol' },
      { fecha: new Date(año, 6, 3), nombre: 'Día Internacional sin Bolsas Plásticas' },
      { fecha: new Date(año, 6, 7), nombre: 'Día de la Conservación del Suelo' },
      { fecha: new Date(año, 6, 7), nombre: 'Día Mundial del Cóndor Andino' },
      { fecha: new Date(año, 6, 31), nombre: 'Día Internacional del Guardaparques' },
      { fecha: new Date(año, 7, 3), nombre: 'Prohibición Ley Bolsas Plásticas' },
      { fecha: new Date(año, 7, 5), nombre: 'Día Internacional del Huemul' },
      { fecha: new Date(año, 7, 24), nombre: 'Día Internacional de los Parques Nacionales' },
      { fecha: new Date(año, 7, 27), nombre: 'Día Internacional de Los Lagos' },
      { fecha: new Date(año, 8, 6), nombre: 'Día Mundial de las Aves Playeras' },
      { fecha: new Date(año, 8, 16), nombre: 'Día Internacional de la Preservación de la Capa de Ozono' },
      { fecha: new Date(año, 8, 22), nombre: 'Día Mundial sin Automóvil' },
      { fecha: new Date(año, 8, obtenerUltimoDia(año, 8, 4)), nombre: 'Día Marítimo Mundial' },
      { fecha: new Date(año, 8, obtenerUltimoDia(año, 8, 5)), nombre: 'Limpieza de Playas y Costas' },
      { fecha: new Date(año, 8, obtenerUltimoDia(año, 8, 5)), nombre: 'Día Nacional sin Automóvil' },
      { fecha: new Date(año, 8, 29), nombre: 'Concienciación sobre pérdida de alimentos' },
      { fecha: new Date(año, 8, 30), nombre: 'Día Nacional del Guardaparque' },
      { fecha: new Date(año, 9, 2), nombre: 'Día Nacional del Medio Ambiente' },
      { fecha: new Date(año, 9, 4), nombre: 'Día Mundial de los Animales' },
      { fecha: new Date(año, 9, obtenerNthDia(año, 9, 1, 1)), nombre: 'Día Mundial del Hábitat' },
      { fecha: new Date(año, 9, 16), nombre: 'Día Mundial de la Alimentación' },
      { fecha: new Date(año, 9, 18), nombre: 'Día de Protección de la Naturaleza' },
      { fecha: new Date(año, 9, 18), nombre: 'Día del Forjador Ambiental' },
      { fecha: new Date(año, 9, 24), nombre: 'Día Internacional contra el Cambio Climático' },
      { fecha: new Date(año, 9, 31), nombre: 'Día Mundial de las Ciudades' },
      { fecha: new Date(año, 10, obtenerNthDia(año, 10, 6, 1)), nombre: 'Día de la Fauna Chilena' },
      { fecha: new Date(año, 10, obtenerNthDia(año, 10, 6, 2)), nombre: 'Día Nacional de las Áreas Protegidas' },
      { fecha: new Date(año, 10, obtenerUltimoDia(año, 10, 5)), nombre: 'Día Mundial sin compras' },
      { fecha: new Date(año, 11, 2), nombre: 'Día de la Gestión del Olor' },
      { fecha: new Date(año, 11, 5), nombre: 'Día Mundial de los Suelos' },
      { fecha: new Date(año, 11, 11), nombre: 'Día Internacional de las Montañas' },
      { fecha: new Date(año, 11, 12), nombre: 'Aniversario Acuerdo de París' }
    ];

    // Filtramos solo los eventos cuya fecha sea igual o mayor a hoy
    const futuros = eventosDelAño.filter(e => e.fecha >= hoy);
    
    // Los ordenamos cronológicamente
    futuros.sort((a, b) => a.fecha.getTime() - b.fecha.getTime());
    
    // Devolvemos solo los primeros 3
    return futuros.slice(0, 3);
  }, []);

  // Lógica de control del Carrusel
  const [indice, setIndice] = useState(0);

  if (proximosEventos.length === 0) {
    return <div className="carrusel-contenedor">No hay más eventos este año.</div>;
  }

  const eventoActual = proximosEventos[indice];

  return (
    <div className="carrusel-contenedor">
      <h3 className="carrusel-titulo">Próximos Eventos</h3>
      
      <div className="carrusel-tarjeta">
        <div className="carrusel-fecha">
          {eventoActual.fecha.toLocaleDateString('es-ES', { 
            weekday: 'long', day: 'numeric', month: 'long' 
          }).toUpperCase()}
        </div>
        <div className="carrusel-nombre">{eventoActual.nombre}</div>
      </div>

      <div className="carrusel-controles">
        <button 
          onClick={() => setIndice(i => i - 1)} 
          disabled={indice === 0}
        >
          &lt; Anterior
        </button>
        
        <span>{indice + 1} de {proximosEventos.length}</span>
        
        <button 
          onClick={() => setIndice(i => i + 1)} 
          disabled={indice === proximosEventos.length - 1}
        >
          Siguiente &gt;
        </button>
      </div>
    </div>
  );
}
