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

  const informacionDetallada: Record<string, string> = {
      'Día de la Educación Ambiental': 'Se conmemora cada 26 de enero para destacar el papel de la educación como herramienta para formar sociedades conscientes y comprometidas con el cuidado del medio ambiente.',
      'Día Mundial por la reducción de CO2': 'Promueve acciones para reducir las emisiones de dióxido de carbono, uno de los principales gases de efecto invernadero, y mitigar el cambio climático.',
      'Día Internacional de los Humedales': 'Conmemora la firma del Convenio de Ramsar (1971) y visibiliza la importancia de estos ecosistemas como hábitat de biodiversidad y reserva de agua dulce.',
      'Día Mundial de las Ballenas': 'Promueve la conservación de las ballenas y sus hábitats marinos, y llama la atención sobre amenazas como la contaminación, la captura incidental y el cambio climático.',
      'Día Internacional de los Recicladores de Base': 'Reconoce la labor de millones de personas que recolectan y reciclan residuos, aportando al cuidado ambiental y a la economía circular.',
      'Día Mundial de la Naturaleza': 'Conmemora la adopción de la Convención sobre el Comercio Internacional de Especies Amenazadas (CITES), el 3 de marzo de 1973, y destaca la importancia de conservar la vida silvestre.',
      'Día Mundial de la Eficiencia Energética': 'Promueve el uso responsable y eficiente de la energía como forma de reducir emisiones, ahorrar recursos y combatir el cambio climático.',
      'Día Internacional de los Bosques': 'La ONU destaca cada 21 de marzo el valor fundamental de los bosques para la biodiversidad, el agua, el clima y el sustento de millones de personas.',
      'Día Nacional de los Glaciares': 'En Argentina se conmemora la sanción de la Ley de Glaciares (2010), que protege estas reservas estratégicas de agua dulce frente al cambio climático.',
      'Día Mundial del Agua': 'Cada 22 de marzo sensibiliza sobre la crisis global del agua y la necesidad de gestionar de forma sostenible este recurso vital para la vida.',
      'Día Mundial del Clima': 'Invita a reflexionar sobre los efectos del cambio climático y a impulsar medidas para reducir las emisiones de gases de efecto invernadero.',
      'Día Hora del Planeta': 'La organización WWF invita a apagar las luces durante una hora como gesto simbólico para llamar la atención sobre la pérdida de naturaleza y el cambio climático.',
      'Día Mundial de la Salud': 'Conmemora la fundación de la Organización Mundial de la Salud en 1948 y promueve la atención a los principales desafíos de salud pública.',
      'Día de la Tierra': 'Más de mil millones de personas en el mundo celebran el cuidado del planeta y exigen acciones concretas contra la contaminación y la pérdida de biodiversidad.',
      'Día Mundial de los Pingüinos': 'Busca promover la protección de los pingüinos y sus hábitats, amenazados por el cambio climático, la pesca incidental y la contaminación marina.',
      'Día Internacional de la Conciencia sobre Ruido': 'Último miércoles de abril: promueve la reducción de la contaminación acústica, que afecta la salud humana y la comunicación de numerosas especies animales.',
      'Día Internacional de las Aves Migratorias': 'Segundo sábado de mayo alerta sobre las amenazas que enfrentan las aves en sus rutas de migración y la necesidad de conservar sus hábitats.',
      'Día Internacional de la Luz': 'Celebra la importancia de la luz en la vida cotidiana, la ciencia, la cultura y el desarrollo sostenible, recordando el descubrimiento del láser en 1960.',
      'Día Internacional del Reciclaje': 'Cada 17 de mayo fomenta las tres R (reducir, reutilizar y reciclar) para disminuir la cantidad de residuos y cuidar los recursos naturales.',
      'Día Mundial de las Abejas': 'Homenajea a Anton Janša, pionero de la apicultura eslovena, y visibiliza el papel insustituible de las abejas en la polinización y la seguridad alimentaria.',
      'Día Internacional de la Diversidad Biológica': 'Conmemora la adopción del Convenio sobre la Diversidad Biológica (1992) y llama a proteger la variedad de vida en la Tierra.',
      'Día Mundial de la Bicicleta': 'La ONU celebra cada 3 de junio la bicicleta como medio de transporte limpio, saludable y accesible que contribuye al desarrollo sostenible.',
      'Día Mundial del Medio Ambiente': 'Instaurado por la ONU en 1972, cada 5 de junio moviliza al mundo entero para proteger el planeta y enfrentar crisis como la contaminación y el cambio climático.',
      'Día de los Océanos': 'Cada 8 de junio reconocemos que los océanos cubren más del 70% del planeta, regulan el clima y albergan una enorme biodiversidad que debemos cuidar.',
      'Día Mundial de las Tortugas Marinas': 'Sensibiliza sobre la protección de las tortugas marinas, amenazadas por plásticos, redes de pesca, destrucción de playas y cambio climático.',
      'Día Mundial de Lucha contra la Desertificación': 'Alerta sobre la degradación de las tierras áridas, que afecta a millones de personas, y promueve prácticas sostenibles para recuperar suelos productivos.',
      'Día Mundial de los Albatros': 'Busca proteger al albatros, ave marina amenazada por la pesca con palangre, el plástico y el cambio climático en los océanos del sur.',
      'Día del Sol': 'Cada 21 de junio, en el solsticio de verano del hemisferio norte, destacamos la energía solar como fuente limpia e inagotable para un futuro sostenible.',
      'Día Mundial del Árbol': 'Se celebra en distintas fechas según el país para recordar el valor de los árboles: purifican el aire, albergan biodiversidad y combaten el cambio climático.',
      'Día Internacional sin Bolsas Plásticas': 'Cada 3 de julio convoca a reducir el consumo de bolsas plásticas de un solo uso, que contaminan suelos, ríos y océanos y dañan a la fauna marina.',
      'Día de la Conservación del Suelo': 'En Argentina se dedica a difundir prácticas que eviten la erosión y degradación del suelo, recurso no renovable esencial para la alimentación y la vida.',
      'Día Mundial del Cóndor Andino': 'Celebra al ave voladora más grande de Sudamérica, símbolo cultural y ecológico cuya conservación enfrenta amenazas como el envenenamiento y el tráfico ilegal.',
      'Día Internacional del Guardaparques': 'Reconoce la labor de quienes protegen día a día las áreas protegidas del mundo, custodiando la biodiversidad y los patrimonios naturales de la humanidad.',
      'Prohibición Ley Bolsas Plásticas': 'Recordamos la entrada en vigor de normativas que prohíben las bolsas plásticas de un solo uso, un avance clave para reducir la contaminación por plásticos.',
      'Día Internacional del Huemul': 'Concientiza sobre la conservación del huemul, ciervo nativo de la Patagonia en peligro de extinción y figura del escudo nacional de Chile.',
      'Día Internacional de los Parques Nacionales': 'Cada 24 de agosto celebramos los parques nacionales como espacios esenciales para conservar la naturaleza, la investigación y el turismo responsable.',
      'Día Internacional de Los Lagos': 'Destaca la importancia de los lagos como reservas de agua dulce, hábitat de biodiversidad y fuente de sustento para comunidades de todo el mundo.',
      'Día Mundial de las Aves Playeras': 'Destaca la importancia de proteger las rutas migratorias y los ecosistemas costeros de los que dependen estas aves.',
      'Día Internacional de la Preservación de la Capa de Ozono': 'La capa de ozono protege la vida en la Tierra al filtrar gran parte de la radiación ultravioleta del Sol. Esta fecha recuerda la importancia de protegerla.',
      'Día Mundial sin Automóvil': 'Promueve la movilidad sostenible. Trasladarse utilizando bicicletas, scooters e incluso a pie ayuda a reducir la huella de carbono en la ciudad.',
      'Día Marítimo Mundial': 'El transporte marítimo es clave en la economía mundial. Es importante promover que sea sostenible y que se cuide el ambiente marítimo y sus ecosistemas.',
      'Limpieza de Playas y Costas': 'Movilizaciones voluntarias para retirar residuos —sobre todo plásticos— de playas y costas, protegiendo la vida marina y los ecosistemas costeros.',
      'Día Nacional sin Automóvil': 'Invita a dejar el auto en casa y optar por caminar, pedalear o usar transporte público, reduciendo la contaminación y la congestión en las ciudades.',
      'Concienciación sobre pérdida de alimentos': 'Cada 29 de septiembre la ONU llama la atención sobre la pérdida y el desperdicio de alimentos y sus consecuencias ambientales, sociales y económicas.',
      'Día Nacional del Guardaparque': 'Rinde homenaje en Chile a los guardaparques, funcionarios dedicados a proteger los parques nacionales y la biodiversidad del país.',
      'Día Nacional del Medio Ambiente': 'En Chile, esta fecha invita a reflexionar sobre el cuidado del medio ambiente y a promover acciones para protegerlo.',
      'Día Mundial de los Animales': 'Cada 4 de octubre, festividad de San Francisco de Asís, patrono de los animales, promueve el respeto y la protección de todas las especies.',
      'Día Mundial del Hábitat': 'Primer lunes de octubre: la ONU reflexiona sobre el derecho a una vivienda adecuada y al desarrollo de asentamientos humanos sostenibles.',
      'Día Mundial de la Alimentación': 'Conmemora la fundación de la FAO (1945) y llama a garantizar el acceso a alimentos suficientes, nutritivos y producidos de forma sostenible.',
      'Día de Protección de la Naturaleza': 'En Argentina recuerda la creación del Parque Nacional Nahuel Huapi en 1934 e impulsa el compromiso con la conservación del patrimonio natural.',
      'Día del Forjador Ambiental': 'Reconoce a personas y organizaciones que con su esfuerzo cotidiano construyen —como forjadores— una cultura de protección ambiental en sus territorios.',
      'Día Internacional contra el Cambio Climático': 'Refuerza la urgencia de reducir las emisiones de gases de efecto invernadero y de actuar frente a los impactos del cambio climático.',
      'Día Mundial de las Ciudades': 'Cada 31 de octubre la ONU promueve ciudades inclusivas, seguras, resilientes y sostenibles, capaces de ofrecer calidad de vida sin dañar el ambiente.',
      'Día de la Fauna Chilena': 'Se conmemora el primer sábado de noviembre en Chile y busca promover el conocimiento y la protección de la fauna nativa.',
      'Día Nacional de las Áreas Protegidas': 'Se conmemora el segundo sábado de noviembre en Chile y destaca la importancia de las áreas protegidas para conservar la biodiversidad.',
      'Día Mundial sin compras': 'El último viernes de noviembre, Buy Nothing Day invita a cuestionar el consumismo absteniéndose de comprar y promoviendo un consumo responsable.',
      'Día de la Gestión del Olor': 'Visibiliza la contaminación odorante, que afecta la calidad de vida de las comunidades, y promueve tecnologías y normas para controlarla.',
      'Día Mundial de los Suelos': 'Cada 5 de diciembre recordamos que los suelos sanos son base de la alimentación, la biodiversidad y la regulación del clima, y están seriamente amenazados.',
      'Día Internacional de las Montañas': 'Cada 11 de diciembre destaca el valor de las montañas como fuentes de agua, biodiversidad y culturas, y la necesidad de desarrollarlas sosteniblemente.',
      'Aniversario Acuerdo de París': 'Cada 12 de diciembre se conmemora la adopción del Acuerdo de París en 2015. El acuerdo busca mantener el aumento de la temperatura media mundial muy por debajo de 2 °C y proseguir los esfuerzos para limitarlo a 1,5 °C.',
    };

    const textoInformativo = informacionDetallada[eventoActual.nombre] || 'Información en construcción para esta fecha ambiental.';

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
      <div className="tarjeta-informacion">
        <h4>¿Por qué es importante?</h4>
        <p>{textoInformativo}</p>
      </div>
    </div>
  );
}
