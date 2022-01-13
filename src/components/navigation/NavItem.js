import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


export const NavItem = ({ to, text, setShow }) => {
    return (
        <>
            <NavLink 
                to={ to } 
                className={ ({isActive}) => 'nav__link ' + (isActive && 'active')} 
                onClick={ () => setShow(false) } >{ text }
            </NavLink>
        </>
    )
}

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    setShow: PropTypes.func.isRequired
}
