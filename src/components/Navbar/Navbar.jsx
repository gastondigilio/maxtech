import React, { useState } from 'react';
import logo from '../assets/Navbar/logo.png'; // Asegúrate de tener tu imagen en la carpeta src
import './Navbar.css'; // Archivo de estilos CSS para personalizar la apariencia de la Navbar

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Logo" className="logo" />
                <h1>MaxTech</h1>
            </div>
            <div className={`navbar-right ${menuOpen ? 'show' : ''}`}>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/productos">Productos</a></li>
                    <li><a href="#about">Nosotros</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    {/* <li><a href="#">Componente 4</a></li> */}
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
