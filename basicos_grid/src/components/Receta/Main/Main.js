import React from 'react';
import mini1 from './../img/mini1.jpg';
import mini2 from './../img/mini2.jpg';

const Main = () => {
    return (
        <main className="contenedor contenido-principal">
            <h1 className="titulo">La mejor receta para hacer pizza en tu hogar</h1>

            <div className="entrada">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, eligendi?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus aliquam illum repudiandae. Aliquam, ipsa vero.</p>
                <blockquote>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, soluta.
                </blockquote>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto natus dolorem, quas reprehenderit cupiditate facere aliquid ipsa nisi explicabo odit.</p>
            </div>
            <div className="informacion">
                <p>30 Minutos</p>
                <p>4 Personas</p>
                <p>$200</p>
            </div>
            <div className="imagen1">
                <img src={mini1} alt="mini1"/>
            </div>
            <div className="imagen2">
                <img src={mini2} alt="mini2"/>
            </div>
        </main>
    );
}

export default Main;