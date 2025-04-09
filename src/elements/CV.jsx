import React from "react";
import HojadeVida from '../pdf/HojadeVida.pdf';

const DescargarHojaDeVida = () => {
    return (
        
            <a 
                href={HojadeVida} download="FabianRodriguez_CV.pdf" className="boton-cv text-center mb-4">
                <i className="bi bi-filetype-pdf"></i>
                <span>Descargar CV</span>
            </a>
        
    );
};

export default DescargarHojaDeVida;