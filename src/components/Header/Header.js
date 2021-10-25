import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <div className="container header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">educators.com</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <a className="nav-link active" aria-current="page" href="/home">Home</a>
                    <a className="nav-link" href="/services">Services</a>
                    <a className="nav-link" href="/about">About</a>
                    <a className="nav-link" href="/cart" >Cart</a>
                </div>
                </div>
            </div>
        </nav>
            
        </div>
    );
};

export default Header;