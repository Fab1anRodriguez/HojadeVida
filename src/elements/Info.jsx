import React from 'react';
import fabian from '../foto/fabian.jpg';
import DescargarHojaDeVida from './CV';

function Info() {
  return (
    <div className="infoPersonal text-center">
      <h2 className="text-center mb-4">Información Personal</h2>
      <div className="foto">
        <img src={fabian} alt="foto con corbata asi bien elegante :D" />
      </div>
      
      <DescargarHojaDeVida />
      <div className="contenido">
        <h3 className="text-center mb-3">Fabian David Rodriguez Castro</h3>
        <p className="text-center fs-5 mb-4">Desarrollador Full Stack</p>
        <div className="contacto text-center mb-4">
          <p><i className="bi bi-envelope-fill"></i> fabiandvid0311@gmail.com</p>
          <p><i className="bi bi-telephone-fill"></i> 311 870 9883</p>
          <p><i className="bi bi-geo-alt-fill"></i> Ibague, Colombia</p>
        </div>
        <p className="sobreMi">
          Desarrollador full stack con propositos de mejorar mis habilidades y aprender nuevas tecnologias en el dia a dia. 
          Me gusta trabajar en equipo y siempre estoy dispuesto a ayudar a los demas.

          Actualmente, estoy en formación como aprendiz del SENA en el tecnólogo
          de Análisis y Desarrollo de Software. En 2023, obtuve mi certificación en
          programación de software. Me destaco por mis habilidades técnicas, mi
          capacidad para adaptarme a nuevos entornos de trabajo y mi enfoque en la
          resolución de problemas. Trabajo muy bien en equipo, promoviendo una
          comunicación clara y practicando la escucha activa para contribuir con todo
          el apoyo en los proyectos. Además, tengo una sólida ética de trabajo y una
          actitud proactiva hacia el aprendizaje de nuevas tecnologías. Estoy
          comprometido con el desarrollo continuo y la mejora de mis habilidades
          profesionales
            <br />
        </p>
      </div>
    </div>
  );
}

export default Info;
