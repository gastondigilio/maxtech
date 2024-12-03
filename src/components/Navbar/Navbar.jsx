import React, { useState } from 'react';
import logo from '../assets/Navbar/logo.png';
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Logo" className="logo" />
                <h1>MAXTECH</h1>
            </div>
            <div className={`navbar-right ${menuOpen ? 'show' : ''}`}>
                <ul>
                    <li><a href="#about">Nosotros</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? (
                    <div className="close-btn">X</div>
                ) : (
                    <>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
