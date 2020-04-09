import React, { Fragment } from 'react';
import auto from './../../../img/01.jpg';

const Automovil = () => {
    return (
        <Fragment>
            <div className="contenedor-media">
                <h1 className="titulo">Nombre del Automovil</h1>
                <img src={auto} alt="mustang" className="imagen"/>
                <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nesciunt quia saepe rerum mollitia id in sed adipisci libero, nisi hic laboriosam possimus distinctio, autem illo voluptate ut, eveniet voluptates?</p>
            </div>
            <div className="contenedor-media">
                <h1 className="titulo">Nombre del Automovil</h1>
                <img src={auto} alt="mustang" className="imagen"/>
                <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nesciunt quia saepe rerum mollitia id in sed adipisci libero, nisi hic laboriosam possimus distinctio, autem illo voluptate ut, eveniet voluptates?</p>
            </div>
            <div className="contenedor-media">
                <h1 className="titulo">Nombre del Automovil</h1>
                <img src={auto} alt="mustang" className="imagen"/>
                <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nesciunt quia saepe rerum mollitia id in sed adipisci libero, nisi hic laboriosam possimus distinctio, autem illo voluptate ut, eveniet voluptates?</p>
            </div>
        </Fragment>
    );
}
 
export default Automovil;