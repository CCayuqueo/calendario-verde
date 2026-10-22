import { useState } from 'react';
import { EventoCalendario } from './EventoCalendario';

// --- FUNCIONES AUXILIARES PARA FECHAS DINÁMICAS ---

// Calcula el "N-ésimo" día de la semana en un mes (ej: 2do Sábado)
// diaSemana: 0 (Dom) a 6 (Sáb). n: 1 (primer), 2 (segundo), etc.
const obtenerNthDia = (año: number, mes: number, diaSemana: number, n: number) => {
  const primerDiaDelMes = new Date(año, mes, 1).getDay();
  const diasParaElPrimerObjetivo = (diaSemana - primerDiaDelMes + 7) % 7;
  return 1 + diasParaElPrimerObjetivo + (n - 1) * 7;
};

// Calcula el "último" día de la semana en un mes (ej: último Viernes)
const obtenerUltimoDia = (año: number, mes: number, diaSemana: number) => {
  const ultimoDiaFecha = new Date(año, mes + 1, 0); 
  const ultimoDiaDeLaSemana = ultimoDiaFecha.getDay();
  const diasARestar = (ultimoDiaDeLaSemana - diaSemana + 7) % 7;
  return ultimoDiaFecha.getDate() - diasARestar;
};

export function Calendario() {
  const [fechaActual, setFechaActual] = useState(new Date());

  const año = fechaActual.getFullYear();
  const mes = fechaActual.getMonth(); // Enero es 0, Diciembre es 11

  const primerDiaDelMes = new Date(año, mes, 1).getDay();
  const diasEnElMes = new Date(año, mes + 1, 0).getDate();

  const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const dias = Array.from({ length: diasEnElMes }, (_, i) => i + 1);
  const espaciosVacios = Array.from({ length: primerDiaDelMes }, (_, i) => i);

  const mesAnterior = () => setFechaActual(new Date(año, mes - 1, 1));
  const mesSiguiente = () => setFechaActual(new Date(año, mes + 1, 1));

  // --- LÓGICA DE EVENTOS DEL CALENDARIO AMBIENTAL ---
  
 const obtenerEventosDelMes = () => {
    const eventos: { dia: number; nombre: string }[] = [];

    if (mes === 0) { // Enero
      eventos.push({ dia: 26, nombre: 'Día de la Educación Ambiental' }); /*[cite: 1] */
      eventos.push({ dia: 28, nombre: 'Día Mundial por la reducción de CO2' }); /*[cite: 1] */
    }
    if (mes === 1) { // Febrero
      eventos.push({ dia: 2, nombre: 'Día Internacional de los Humedales' }); /*[cite: 1] */
      eventos.push({ dia: 19, nombre: 'Día Mundial de las Ballenas' }); /*[cite: 1] */
    }
    if (mes === 2) { // Marzo
      eventos.push({ dia: 1, nombre: 'Día Internacional de los Recicladores de Base' }); /*[cite: 1] */
      eventos.push({ dia: 3, nombre: 'Día Mundial de la Naturaleza' }); /*[cite: 1] */
      eventos.push({ dia: 5, nombre: 'Día Mundial de la Eficiencia Energética' }); /*[cite: 1] */
      eventos.push({ dia: 21, nombre: 'Día Internacional de los Bosques' }); /*[cite: 1] */
      eventos.push({ dia: 21, nombre: 'Día Nacional de los Glaciares' }); /*[cite: 1] */
      eventos.push({ dia: 22, nombre: 'Día Mundial del Agua' }); /*[cite: 1] */
      eventos.push({ dia: 26, nombre: 'Día Mundial del Clima' }); /*[cite: 1] */
      eventos.push({ dia: 28, nombre: 'Día Hora del Planeta' }); /*[cite: 1] */
    }
    if (mes === 3) { // Abril
      eventos.push({ dia: 7, nombre: 'Día Mundial de la Salud' }); /*[cite: 1] */
      eventos.push({ dia: 22, nombre: 'Día de la Tierra' }); /*[cite: 1] */
      eventos.push({ dia: 25, nombre: 'Día Mundial de los Pingüinos' }); /*[cite: 1] */
      // Último miércoles (3)
      eventos.push({ dia: obtenerUltimoDia(año, mes, 3), nombre: 'Día Internacional de la Conciencia sobre Ruido' }); /*[cite: 1] */
    }
    if (mes === 4) { // Mayo
      // Segundo sábado (6)
      eventos.push({ dia: obtenerNthDia(año, mes, 6, 2), nombre: 'Día Internacional de las Aves Migratorias' }); /*[cite: 1] */
      eventos.push({ dia: 16, nombre: 'Día Internacional de la Luz' }); /*[cite: 1] */
      eventos.push({ dia: 17, nombre: 'Día Internacional del Reciclaje' }); /*[cite: 1] */
      eventos.push({ dia: 20, nombre: 'Día Mundial de las Abejas' }); /*[cite: 1] */
      eventos.push({ dia: 22, nombre: 'Día Internacional de la Diversidad Biológica' }); /*[cite: 1] */
    }
    if (mes === 5) { // Junio
      eventos.push({ dia: 3, nombre: 'Día Mundial de la Bicicleta' }); /*[cite: 1] */
      eventos.push({ dia: 5, nombre: 'Día Mundial del Medio Ambiente' }); /*[cite: 1] */
      eventos.push({ dia: 8, nombre: 'Día de los Océanos' }); /*[cite: 1] */
      eventos.push({ dia: 16, nombre: 'Día Mundial de las Tortugas Marinas' }); /*[cite: 1] */
      eventos.push({ dia: 17, nombre: 'Día Mundial de Lucha contra la Desertificación y la Sequía' }); /*[cite: 1] */
      eventos.push({ dia: 19, nombre: 'Día Mundial de los Albatros' }); /*[cite: 1] */
      eventos.push({ dia: 21, nombre: 'Día del Sol' }); /*[cite: 1] */
      eventos.push({ dia: 28, nombre: 'Día Mundial del Árbol' }); /*[cite: 1] */
    }
    if (mes === 6) { // Julio
      eventos.push({ dia: 3, nombre: 'Día Internacional sin Bolsas Plásticas' }); /*[cite: 1] */
      eventos.push({ dia: 7, nombre: 'Día de la Conservación del Suelo' }); /*[cite: 1] */
      eventos.push({ dia: 7, nombre: 'Día Mundial del Cóndor Andino' }); /*[cite: 1] */
      eventos.push({ dia: 31, nombre: 'Día Internacional del Guardaparques' }); /*[cite: 1] */
    }
    if (mes === 7) { // Agosto
      eventos.push({ dia: 3, nombre: 'Prohibición Ley Bolsas Plásticas en el Comercio' }); /*[cite: 1] */
      eventos.push({ dia: 5, nombre: 'Día Internacional del Huemul' }); /*[cite: 1] */
      eventos.push({ dia: 24, nombre: 'Día Internacional de los Parques Nacionales' }); /*[cite: 1] */
      eventos.push({ dia: 27, nombre: 'Día Internacional de Los Lagos' }); /*[cite: 1] */
    }
    if (mes === 8) { // Septiembre
      eventos.push({ dia: 6, nombre: 'Día Mundial de las Aves Playeras' }); /*[cite: 1] */
      eventos.push({ dia: 16, nombre: 'Día Internacional de la Preservación de la Capa de Ozono' }); /*[cite: 1] */
      eventos.push({ dia: 22, nombre: 'Día Mundial sin Automóvil' }); /*[cite: 1] */
      // Último jueves (4)
      eventos.push({ dia: obtenerUltimoDia(año, mes, 4), nombre: 'Día Marítimo Mundial' }); /*[cite: 1] */
      // Último viernes (5)
      eventos.push({ dia: obtenerUltimoDia(año, mes, 5), nombre: 'Día de Limpieza de Playas y Costas' }); /*[cite: 1] */
      // Último viernes (5)
      eventos.push({ dia: obtenerUltimoDia(año, mes, 5), nombre: 'Día Nacional sin Automóvil' }); /*[cite: 1] */
      eventos.push({ dia: 29, nombre: 'Día Internacional de Concienciación sobre la Pérdida y el Desperdicio de Alimentos' }); /*[cite: 1] */
      eventos.push({ dia: 30, nombre: 'Día Nacional del Guardaparque' }); /*[cite: 1] */
    }
    if (mes === 9) { // Octubre
      eventos.push({ dia: 2, nombre: 'Día Nacional del Medio Ambiente' }); /*[cite: 1] */
      eventos.push({ dia: 4, nombre: 'Día Mundial de los Animales' }); /*[cite: 1] */
      // Primer lunes (1)
      eventos.push({ dia: obtenerNthDia(año, mes, 1, 1), nombre: 'Día Mundial del Hábitat' }); /*[cite: 1] */
      eventos.push({ dia: 16, nombre: 'Día Mundial de la Alimentación' }); /*[cite: 1] */
      eventos.push({ dia: 18, nombre: 'Día de Protección de la Naturaleza' }); /*[cite: 1] */
      eventos.push({ dia: 18, nombre: 'Día del Forjador Ambiental' }); /*[cite: 1] */
      eventos.push({ dia: 24, nombre: 'Día Internacional contra el Cambio Climático' }); /*[cite: 1] */
      eventos.push({ dia: 31, nombre: 'Día Mundial de las Ciudades' }); /*[cite: 1] */
    }
    if (mes === 10) { // Noviembre
      // Primer sábado (6)
      eventos.push({ dia: obtenerNthDia(año, mes, 6, 1), nombre: 'Día de la Fauna Chilena' }); /*[cite: 1] */
      // Segundo sábado (6)
      eventos.push({ dia: obtenerNthDia(año, mes, 6, 2), nombre: 'Día Nacional de las Áreas Protegidas' }); /*[cite: 1] */
      // Último viernes (5)
      eventos.push({ dia: obtenerUltimoDia(año, mes, 5), nombre: 'Día Mundial sin compras' }); /*[cite: 1] */
    }
    if (mes === 11) { // Diciembre
      eventos.push({ dia: 2, nombre: 'Día de la Gestión del Olor' }); /*[cite: 1] */
      eventos.push({ dia: 5, nombre: 'Día Mundial de los Suelos' }); /*[cite: 1] */
      eventos.push({ dia: 11, nombre: 'Día Internacional de las Montañas' }); /*[cite: 1] */
      eventos.push({ dia: 12, nombre: 'Aniversario Acuerdo de París' }); /*[cite: 1] */
    }

    return eventos;
  };

  const eventosEsteMes = obtenerEventosDelMes();

  return (
    <article className="calendario-contenedor" aria-label="Calendario de fechas ambientales">
      <div className="calendario-controles">
        <button className="navegacion-calendario" onClick={mesAnterior} aria-label="Mes anterior">&lsaquo;</button>
        <h3 aria-live="polite">
          {fechaActual.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }).toUpperCase()}
        </h3>
        <button className="navegacion-calendario" onClick={mesSiguiente} aria-label="Mes siguiente">&rsaquo;</button>
      </div>

      <div className="calendario-grid">
        {diasSemana.map((dia) => (
          <div key={dia} className="dia-semana" aria-label={dia}>{dia}</div>
        ))}

        {espaciosVacios.map((espacio) => (
          <div key={`vacio-${espacio}`} className="celda-vacia"></div>
        ))}

        {dias.map((dia) => {
          // Buscamos si el día actual del bucle tiene eventos asignados
          const eventosDelDia = eventosEsteMes.filter(e => e.dia === dia);
          
          const hoy = new Date();
          const esHoy = hoy.getDate() === dia && 
                        hoy.getMonth() === mes && 
                        hoy.getFullYear() === año;
          
          return (
            <div
              key={dia}
              className={`celda-dia ${esHoy ? 'dia-hoy' : ''}`}
              aria-current={esHoy ? 'date' : undefined}
              aria-label={`${dia} de ${fechaActual.toLocaleDateString('es-ES', { month: 'long' })}${eventosDelDia.length ? `: ${eventosDelDia.map(evento => evento.nombre).join(', ')}` : ''}`}
            >
              <span className="numero-dia">{dia}</span>
              
              {/* Si hay eventos, los dibujamos debajo del número */}
              <div className="contenedor-eventos">
                {eventosDelDia.map((evento) => (
                  <EventoCalendario key={evento.nombre} nombre={evento.nombre} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
