import React from 'react';

function Estudios() {
  const educacion = [
    {
      titulo: "Bachillerato",
      institucion: "JOSE CELESTINO MUTIS DE IBAGUE",
      year: "2023"
    },
    {
      titulo: "Programacion de Software",
      institucion: "SERVICIO NACIONAL DE APRENDIZAJE (SENA)",
      year: "2022- 2023"
    },
    {
      titulo: "Analisis y Desarrollo de Software",
      institucion: "SERVICIO NACIONAL DE APRENDIZAJE (SENA)",
      year: "2024- 2025 (EN PROGRESO)"
    },
    {
      titulo: "Angular y Springboot",
      institucion: "ACADEMIA DEV SENIOR",
      year: "2025 (EN PROGRESO)"
    }
    
  ];

  return (
    <div className="seccionEstudios">
      <h2 className="text-center mb-4">Estudios</h2>
      {educacion.map((educacion, index) => (
        <div key={index} className="tarjetaEstudio">
          <h4 className="mb-2">{educacion.titulo}</h4>
          <h6 className="text-muted">{educacion.institucion}</h6>
          <p className="text-primary">{educacion.year}</p>
        </div>
      ))}
    </div>
  );
}

export default Estudios;