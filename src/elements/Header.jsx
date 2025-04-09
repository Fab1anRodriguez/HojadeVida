import React from 'react';

function Header() {
  return (
    <header className="encabezado">
      <div className="contenedor-encabezado">
        <div className="contenido-encabezado d-flex justify-content-center align-items-center">
          <div className="texto-encabezado">
            <h1 className="titulo-principal text-white">
              HOJA DE VIDA
            </h1>
            <p className="subtitulo">Desarrollador Full Stack</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
