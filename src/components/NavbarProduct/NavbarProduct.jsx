import React, { useState } from 'react';
import logo from '../assets/Navbar/logo.png'; // Asegúrate de tener tu imagen en la carpeta src
import './NavbarProduct.css'; // Archivo de estilos CSS para personalizar la apariencia de la Navbar

function NavbarProduct() {
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
                    <li><a href="/">Inicio</a></li>
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

export default NavbarProduct;
