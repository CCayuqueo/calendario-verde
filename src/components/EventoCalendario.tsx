import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type EventoCalendarioProps = {
  nombre: string;
  descripcion?: string;
  hora?: string;
};

type Posicion = {
  left: number;
  top: number;
};

const DURACION_TRANSICION = 160;

export function EventoCalendario({ nombre, descripcion, hora }: EventoCalendarioProps) {
  const id = useId();
  const activadorRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const temporizadorCierreRef = useRef<number | undefined>(undefined);
  const temporizadorDesmontajeRef = useRef<number | undefined>(undefined);
  const [montado, setMontado] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const [posicion, setPosicion] = useState<Posicion>({ left: 0, top: 0 });

  const cancelarCierre = () => {
    window.clearTimeout(temporizadorCierreRef.current);
    window.clearTimeout(temporizadorDesmontajeRef.current);
  };

  const abrir = () => {
    cancelarCierre();
    setMontado(true);
    setAbierto(true);
  };

  const cerrar = () => {
    cancelarCierre();
    setAbierto(false);
    temporizadorDesmontajeRef.current = window.setTimeout(() => {
      setMontado(false);
    }, DURACION_TRANSICION);
  };

  const programarCierre = () => {
    window.clearTimeout(temporizadorCierreRef.current);
    temporizadorCierreRef.current = window.setTimeout(cerrar, 120);
  };

  useLayoutEffect(() => {
    if (!montado) return;

    const actualizarPosicion = () => {
      const activador = activadorRef.current;
      const tooltip = tooltipRef.current;
      if (!activador || !tooltip) return;

      const margen = 12;
      const activadorRect = activador.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();
      const left = Math.min(
        Math.max(activadorRect.left + activadorRect.width / 2 - tooltipRect.width / 2, margen),
        window.innerWidth - tooltipRect.width - margen,
      );
      const espacioSuperior = activadorRect.top - margen;
      const top = espacioSuperior >= tooltipRect.height
        ? activadorRect.top - tooltipRect.height - 8
        : Math.min(activadorRect.bottom + 8, window.innerHeight - tooltipRect.height - margen);

      setPosicion({ left, top: Math.max(margen, top) });
    };

    actualizarPosicion();
    window.addEventListener('resize', actualizarPosicion);
    window.addEventListener('scroll', actualizarPosicion, true);
    return () => {
      window.removeEventListener('resize', actualizarPosicion);
      window.removeEventListener('scroll', actualizarPosicion, true);
    };
  }, [montado, nombre, descripcion, hora]);

  useEffect(() => {
    if (!abierto) return;

    const cerrarAnteInteraccionExterna = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (activadorRef.current?.contains(target) || tooltipRef.current?.contains(target)) return;
      cerrar();
    };

    const cerrarConEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        cerrar();
      }
    };

    document.addEventListener('pointerdown', cerrarAnteInteraccionExterna);
    document.addEventListener('keydown', cerrarConEscape);
    return () => {
      document.removeEventListener('pointerdown', cerrarAnteInteraccionExterna);
      document.removeEventListener('keydown', cerrarConEscape);
    };
  }, [abierto]);

  useEffect(() => () => {
    window.clearTimeout(temporizadorCierreRef.current);
    window.clearTimeout(temporizadorDesmontajeRef.current);
  }, []);

  return (
    <>
      <button
        ref={activadorRef}
        type="button"
        className="etiqueta-evento"
        aria-label={nombre}
        aria-describedby={montado ? id : undefined}
        aria-expanded={abierto}
        aria-controls={id}
        onPointerEnter={(event) => {
          if (event.pointerType === 'mouse') abrir();
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === 'mouse') programarCierre();
        }}
        onFocus={abrir}
        onBlur={programarCierre}
        onClick={abrir}
      >
        <span className="etiqueta-evento-texto">{nombre}</span>
      </button>
      {montado && createPortal(
        <div
          ref={tooltipRef}
          id={id}
          role="tooltip"
          aria-hidden={!abierto}
          className={`evento-tooltip${abierto ? ' evento-tooltip-abierto' : ''}`}
          style={{ left: posicion.left, top: posicion.top }}
          onPointerEnter={cancelarCierre}
          onPointerLeave={(event) => {
            if (event.pointerType === 'mouse') programarCierre();
          }}
        >
          <strong className="evento-tooltip-titulo">{nombre}</strong>
          {descripcion && <p className="evento-tooltip-descripcion">{descripcion}</p>}
          {hora && <span className="evento-tooltip-hora">{hora}</span>}
        </div>,
        document.body,
      )}
    </>
  );
}
