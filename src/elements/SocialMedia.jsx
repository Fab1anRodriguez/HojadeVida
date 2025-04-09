import React from 'react';

const SocialMedia = () => {
    return ( 
        <div className="seccionRedes contenedor my-4">
            <h2 className="tituloRedes text-center mb-4">Redes Sociales</h2>
            <ul className="listaRedes list-unstyled d-flex justify-content-center gap-4">
                <li>
                    <a href="https://www.linkedin.com/in/fabian-rodr%C3%ADguez-48085533a/" target="_blank" rel="noopener noreferrer" className="botonRed btn btn-primary">
                        <i className="bi bi-linkedin me-2"></i>
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Fab1anRodriguez" target="_blank" rel="noopener noreferrer" className="botonRed btn btn-dark">
                        <i className="bi bi-github me-2"></i>
                        GitHub
                    </a>
                </li>
            </ul>
        </div>
     );
}

export default SocialMedia;