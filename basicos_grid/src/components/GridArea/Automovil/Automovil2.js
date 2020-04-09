import React from 'react';
import auto from './../../../img/01.jpg';

const Automovil2 = () => {
    return (
        <div className="contenedor-media">
            <h1 className="titulo">Nombre del Automovil</h1>
            <img src={auto} alt="mustang" className="imagen"/>
            
            <div className="info">
                <p>Escritopor: Admin</p>
                <p>Fecha: 20 - Diciembre - 2020</p>
            </div>

            <blockquote className="slogan">
                "Autos Increibles para el 2020"
            </blockquote>

            <div className="entrada">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quaerat eum dignissimos. A voluptate cumque ab? Deleniti libero velit nulla a facere possimus itaque, harum perferendis reprehenderit, aspernatur rerum dignissimos!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque at voluptatum. Nam quas, nostrum vel libero aliquid doloribus aspernatur! Est quas vel officiis nesciunt, tempora veritatis praesentium provident odit.</p>
            </div>
            
        </div>
    );
}
 
export default Automovil2;