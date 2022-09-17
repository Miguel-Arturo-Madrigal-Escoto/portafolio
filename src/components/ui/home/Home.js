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
                    <h2>Desarrollador de software</h2>
                    <p>
                            Soy estudiante y desarrollador de software, orientado tanto al desarrollo front-end como back-end. 
                            Soy Tecnólogo en Informática y actualmente me encuentro en séptimo semestre de 
                            la carrera de Ingeniería en Computación.
                    </p>
                    <div className="cv-container">
                        <a href="https://drive.google.com/uc?export=download&id=12EvFOZ6ntjnkn1fKV55FE3bV-lbmMlm4" target="_blank" download><button className="cv-btn">Descargar CV</button></a>        
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
