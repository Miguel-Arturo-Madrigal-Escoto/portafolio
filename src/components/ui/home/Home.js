import React from 'react';
import { MdVideogameAsset } from 'react-icons/md';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { VscGithubInverted } from 'react-icons/vsc';

import '../../../css/home.css';

export const Home = () => {
    return (
        <div className="home flex-center animate__animated animate__bounceInLeft" id="home">
            <div className="home-container">
                <div className="media-icons">
                    <a href='https://www.facebook.com/mmiguell.madrigal' target="_blank"><BsFacebook className="icon" size="1.3rem" style={{'color': '4267B2'}} /></a>
                    <a href='https://github.com/Miguel-Arturo-Madrigal-Escoto' target="_blank"><VscGithubInverted className="icon" size="1.3rem" style={{'color': '333333'}} /></a>
                    <a href='#' target="_blank"><BsLinkedin className="icon" size="1.3rem" style={{'color': '0077b5'}} /></a>
                </div>
                <div className="info">
                    <h1>Hola, soy Miguel { <MdVideogameAsset size="1.3rem"/> }</h1>
                    <h2>Desarrollador web</h2>
                    <p>
                        Soy programador orientado al desarrollo front-end. Además,
                        tengo experiencia en la parte del backend. Actualmente, me
                        encuentro en sexto semestre de carrera de Ingeniería en 
                        Computación; además soy Tecnólogo en Informática.
                    </p>
                    <div className="cv-container">
                        <button className="cv-btn">Descargar CV</button>
                    </div>     
                </div>
                <div className="home-img">
                    <img
                        src="https://miguel-arturo-madrigal-escoto.github.io/portafolio/assets/profile_pic.png" 
                        alt="fotografia de desarrollador"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    )
}
