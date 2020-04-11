import React, { Fragment } from 'react';
import platillo from './../img/platillo.jpg';

const Navegacion = () => {
    return (
        <Fragment>
            <div className="navegacion">
                <nav className="contenedor">
                    <a href="/">Recetas</a>
                    <a href="/">Productos</a>
                    <a href="/">Recomendaciones</a>
                    <a href="/">Videos</a>
                </nav>
            </div>
            <div className="slider contenedor">
                <img src={platillo} alt="platillo"/>
            </div>
        </Fragment>
    );
}

export default Navegacion;