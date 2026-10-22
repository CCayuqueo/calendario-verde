export function Header() {
  return (
    <header className="header-principal">
      <div className="header-interior">
        <a className="marca" href="#inicio" aria-label="Calendario Verde, inicio">
          <span className="marca-icono" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M19.5 4.5c-7.1 0-12 2.7-12 7.4 0 2.7 2.1 4.5 4.7 4.5 4.7 0 7.3-4.9 7.3-11.9Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              <path d="M4.5 20c2.2-4.4 5.6-7.4 10.2-9.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </span>
          <span>Calendario Verde</span>
        </a>
        <nav className="navegacion-principal" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a className="enlace-accion" href="#calendario">Ver calendario</a>
        </nav>
      </div>
    </header>
  );
}