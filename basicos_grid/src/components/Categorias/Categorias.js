import React from 'react';
import audio_visual from './img/audio.jpg';
import marketing from './img/marketing.jpg';
import desarrollo from './img/desarrollo.jpg'; 
import diseno from './img/diseno.jpg';
import negocio from './img/negocio.jpg';
import profesional from './img/profesional.jpg';

const Categorias = () => {
    return (
        <div className="contenedor">
            <div className="buscador">
                <div className="buscador-contenedor">
                    <div className="titulo">
                        <h2><span>¿En qué quieres especializarte?</span></h2> 
                    </div>
                    <div className="contenido">
                        <span><i className="fas fa-search"></i></span>
                        <input type="search" placeholder="Busca entre los más de 600 cursos"/>
                    </div>
                </div>
            </div>
            <div className="categorias">
                <div className="categorias-contenedor">
                    <div className="items">
                        <div className="item produccion-audiovisual">
                            <div className="badgeAudioVisual">
                                <img src={audio_visual} alt="Producción Audiovisual"/>
                            </div>
                            <div className="categoria">
                                <h2>Producción Audiovisual</h2> 
                                <span>22 cursos</span>
                            </div>
                            <a href="/"></a>
                        </div>
                        <div className="item marketing">
                            <div className="badgeMarketing">
                                <img src={marketing} alt="Marketing"/>
                            </div>
                            <div className="categoria">
                                <h2>Marketing</h2>
                                <span>22 cursos</span>
                            </div>
                            <a href="/"></a>
                        </div>
                        <div className="item desarrollo">
                            <div className="badgeDesarrollo">
                                <img src={desarrollo} alt="Desarrollo e ingeniería"/>
                            </div>
                            <div className="categoria">
                                <h2>Desarrollo e ingeniería</h2>
                                <span>387 cursos</span>
                            </div>
                            <a href="/"></a>
                        </div>
                        <div className="item diseno">
                            <div className="badgeDiseno">
                                <img src={diseno} alt="Diseño y UX"/>
                            </div>
                            <div className="categoria">
                                <h2>Diseño y UX</h2>
                                <span>74 cursos</span>
                            </div>
                            <a href="/"></a>
                        </div>
                        <div className="item negocios"> 
                            <div className="badgeNegocio">
                                <img src={negocio} alt="Negocios y emprendimiento"/>
                            </div>
                            <div className="categoria">
                                <h2>Negocios y emprendimiento</h2>
                                <span>50 cursos</span>
                            </div>
                            <a href="/"></a>
                        </div>
                        <div className="item profesional">
                            <div className="badgeProfesional">
                                <img src={profesional} alt="Crecimiento Profesional"/>
                            </div>
                            <div className="categoria">
                                <h2>Crecimiento Profesional</h2>
                                <span>46 cursos</span>
                            </div>
                            <a href="/"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Categorias; 