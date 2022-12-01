import React from 'react';
import { MdVideogameAsset } from 'react-icons/md';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { VscGithubInverted } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

import '../../../css/home.css';

export const Home = () => {

    return (
        <div className="home flex-center animate__animated animate__slideInDown" id="home">
            <div className="home-container">
                <div className="media-icons">
                    <a href='https://www.facebook.com/mmiguell.madrigal' target="_blank"><BsFacebook className="icon" size="1.8rem" style={{'color': '4267B2'}} /></a>
                    <a href='https://github.com/Miguel-Arturo-Madrigal-Escoto' target="_blank"><VscGithubInverted className="icon" size="1.8rem" style={{'color': '333333'}} /></a>
                    <a href='https://www.linkedin.com/in/miguel-arturo-madrigal-escoto-794726229' target="_blank"><BsLinkedin className="icon" size="1.8rem" style={{'color': '0077b5'}} /></a>
                </div>
                <div className="info">
                    <h1>Hola, soy Miguel Madrigal{ <MdVideogameAsset size="1.3rem"/> }</h1>
                    <h2>Estudiante y desarrollador de software</h2>
                    <p>
                        Hola, soy estudiante de la carrera de Ingenieria en Computación, buscando trabajar en desarrollo de software.
                        Me considero una persona organizada, proactiva, buen compañero de equipo y responsable. Realmente me gusta aprender cosas nuevas,
                        lo cual me permite estar al día con las últimas herramientas y tecnologias.
                    </p>
                    <div className="cv-container">
                        <a href="https://drive.google.com/uc?export=download&id=1c1xH92X0_4atOcl79fSk4tlj0guZ0Rbm" target="_blank" download><button className="cv-btn">Descargar CV</button></a>        
                    </div>     
                </div>
                {/* <div className="home-img">
                    <img
                        src="https://miguel-arturo-madrigal-escoto.github.io/portafolio/assets/profile_pic.png" 
                        alt="fotografia de desarrollador"
                        loading="lazy"
                    />
                </div> */}
            </div>
        </div>
    )
}
