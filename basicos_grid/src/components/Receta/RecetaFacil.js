import React, { Fragment } from 'react';
import Header from './Header/Header';
import Navegacion from './Navegacion/Navegacion';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const RecetaFacil = () => {
    return (
        <Fragment>
            <Header/>
            <Navegacion/> 
            <Main/>
            <Footer/>
        </Fragment>
    );
}

export default RecetaFacil;