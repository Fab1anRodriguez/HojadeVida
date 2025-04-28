import React from "react";
import HojadeVida from '../pdf/Fabian_Rodriguez_HojaVida.pdf';

const DescargarHojaDeVida = () => {
    return (
        
            <a 
                href={HojadeVida} download="FabianRodriguez_CV.pdf" className="boton-cv text-center mb-4">
                <i className="bi bi-filetype-pdf"></i>
                <span>Descargar HV</span>
            </a>
        
    );
};

export default DescargarHojaDeVida;