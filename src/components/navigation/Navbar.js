import { Link } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';

import { useState } from 'react';
import { NavItem } from './NavItem';

import '../../css/navbar.css';

export const Navbar = () => {

    const [ show, setShow ] = useState(false);

    return (
        <div className="header">
            
            <Link to="/portafolio" className="nav__link header__logo">Miguel Madrigal</Link>

            <FiMenu 
                size="1.3rem" 
                className="menu__toggle"
                onClick={ () => setShow(true) } 
            />
            
            <nav className={`nav ${ show && 'show'}`} id="nav-menu">
                <div className="nav__content bd-grid">
                    <IoIosClose 
                        size="2rem" 
                        className="nav__close" 
                        id="nav_close"
                        onClick={ () => setShow(false) } 
                    />

                    <div className="nav__profile">
                        <div className="nav__img">
                            <img 
                                src="./assets/profile_pic.png" 
                                alt="imagen del perfil de desarrollador" 
                                loading="lazy" 
                            />
                        </div>
                        <div className="developer_info">
                            <Link to="/projects" className="nav__name">Miguel Madrigal</Link>
                            <span className="nav__profession">Desarrollador</span>
                        </div>
                    </div>

                    <div className="nav__menu">
                        <ul className="nav__list">
                            <NavItem to="/portafolio" text="Inicio" setShow={ setShow }/>
                            <NavItem to="/projects" text="Proyectos" setShow={ setShow }/>
                            <NavItem to="/portafolio" text="Habilidades" setShow={ setShow }/>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}
