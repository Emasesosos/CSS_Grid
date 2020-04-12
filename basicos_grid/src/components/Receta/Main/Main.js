import React from 'react';
import mini1 from './../img/mini1.jpg';
import mini2 from './../img/mini2.jpg';

const Main = () => {
    return (
        <main className="contenedor contenido-principal">
            <h1 className="titulo">La mejor receta para hacer pizza en tu hogar</h1>

            <div className="entrada">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nulla veritatis cumque fuga vero sed, voluptates quas iusto in corrupti assumenda beatae architecto earum consequatur. Quam corrupti dolorum voluptatum pariatur.
                Autem amet debitis nemo ipsum fuga aut iste sed quia? Itaque possimus necessitatibus enim in qui odit aliquid unde, optio similique inventore quo, animi perspiciatis quas quidem culpa nam illo.
                Ab reprehenderit, tenetur porro laboriosam magnam, consectetur ipsam ad, a vero iure quibusdam beatae delectus voluptate? Sunt recusandae tenetur dicta velit architecto ex deserunt consectetur esse, labore repellendus, cupiditate ab!
                Quaerat soluta assumenda expedita saepe perferendis laboriosam autem, nobis iste laudantium quidem quas aspernatur itaque incidunt deleniti numquam quisquam eveniet tempora quos? Minus, magnam voluptas dolor distinctio velit soluta similique.
                Sint deleniti nobis debitis velit vel vitae, odit iusto unde, consectetur iste, excepturi esse? Impedit, minus accusantium. Quod, voluptatem fugiat. Suscipit, voluptates dolore impedit distinctio quam asperiores consectetur esse optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem dolor blanditiis modi obcaecati ullam, voluptate quam neque fugit a. At voluptate natus magnam facilis, modi porro quo ducimus ex.
                Necessitatibus deleniti quo quis excepturi exercitationem a nesciunt vel eveniet. Ducimus consectetur ratione aspernatur praesentium ullam! Rem labore cupiditate totam? Id voluptatibus quibusdam quis, minima praesentium ipsum ratione corporis cumque!
                Saepe distinctio sequi exercitationem reprehenderit eveniet error, harum ut culpa atque, provident consectetur quibusdam corporis magnam nam ratione adipisci. Voluptates ipsum aliquam nemo neque magni autem nostrum culpa suscipit inventore!
                Praesentium, hic laudantium enim asperiores ipsa et ratione magni voluptatem quo voluptatibus atque deserunt reiciendis est doloremque molestiae vitae eum repudiandae iste reprehenderit alias. Commodi recusandae fuga magnam quidem molestias?
                Natus tempore eaque, nostrum deleniti non beatae eius provident veniam atque fuga tempora ullam voluptate ipsum repudiandae. Optio molestiae ad saepe sed. Quam aliquam dolorem repudiandae itaque tempore, hic officia?</p>
                <blockquote>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, soluta.
                </blockquote>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore explicabo iusto velit, porro, reprehenderit eveniet deleniti laudantium eius provident maxime rerum adipisci facilis fugiat ab expedita tempora harum aut deserunt?
                Ex alias praesentium velit pariatur ea eos repellat corporis, autem, dignissimos, saepe voluptas debitis at voluptatem mollitia magni non! Modi unde adipisci atque harum, deserunt nihil porro itaque saepe nulla.
                Eius porro minus perferendis doloremque fugiat vitae numquam magnam sint perspiciatis? Hic quae suscipit assumenda expedita accusamus perferendis in, exercitationem totam incidunt, ullam nesciunt, temporibus libero voluptatem est eos consectetur?
                Minima ipsa odio maxime sequi nulla eligendi facilis quae provident voluptatem repellat ad hic ipsam sunt, ex amet rerum illum qui! Repellendus possimus qui iste. Saepe fugit dignissimos debitis sunt?
                Nulla, blanditiis dolor veritatis consectetur provident doloremque praesentium repellat sapiente possimus consequatur sed deserunt temporibus totam voluptatem cupiditate pariatur unde odio ducimus dolores. Illo esse perferendis rem eveniet inventore explicabo?</p>
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