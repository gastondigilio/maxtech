import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ variant = 'home' }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Configuración de enlaces según la variante
    const getNavLinks = () => {
        if (variant === 'product') {
            return [
                { href: "/", text: "Inicio" }
            ];
        }
        // Variante por defecto (home)
        return [
            { href: "/productos", text: "Productos" },
            { href: "#about", text: "Nosotros" },
            { href: "#contact", text: "Contacto" }
        ];
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo-link">
                    <img src="/images/ui/logoMaxtech.png" alt="Logo Maxtech" className="logo" />
                </a>
            </div>
            <div className={`navbar-right ${menuOpen ? 'show' : ''}`}>
                <ul>
                    {getNavLinks().map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>{link.text}</a>
                        </li>
                    ))}
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
