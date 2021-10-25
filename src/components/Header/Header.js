import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSchool } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <div className="container header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><FontAwesomeIcon icon={faSchool}/> educators.com</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <nav className="navigation ms-auto">
                    <NavLink className="link" exact to="/">Home</NavLink>
                    <NavLink className="link" to="/services">Services</NavLink>
                    <NavLink className="link" to="/about">About</NavLink>
                    <NavLink className="link" to="/cart">Cart</NavLink>
                  
                </nav>
                </div>
            </div>
        </nav>
            
        </div>
    );
};

export default Header;