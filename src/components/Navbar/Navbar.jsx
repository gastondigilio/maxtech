import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar({ variant = 'home' }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Función para detectar la sección activa - solo al hacer click
    useEffect(() => {
        // No hay detección automática al hacer scroll
        // Los markers solo se activan al hacer click en los enlaces
    }, []);

    // Función para manejar el click en los enlaces
    const handleNavClick = (href, event) => {
        if (href.startsWith('#')) {
            event.preventDefault();
            
            // Hacer scroll a la sección
            const element = document.querySelector(href);
            if (element) {
                // Scroll más preciso para cada sección
                const navbarHeight = 80; // Altura aproximada de la navbar
                const elementTop = element.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: elementTop,
                    behavior: 'smooth'
                });
                
                // Activar el marker correspondiente al hacer click
                const sectionId = href.substring(1); // Remover el #
                setActiveSection(sectionId);
            }
        } else if (href.startsWith('/#')) {
            event.preventDefault();
            
            // Si estamos en productos, navegar a home y luego hacer scroll
            if (window.location.pathname === '/productos') {
                // Navegar a home y luego hacer scroll a la sección
                const sectionId = href.substring(1); // Remover el /
                
                // Usar sessionStorage para recordar la sección a la que ir
                sessionStorage.setItem('scrollToSection', sectionId);
                
                // Navegar a home
                window.location.href = '/';
            }
        }
    };

    // Configuración de enlaces según la variante
    const getNavLinks = () => {
        if (variant === 'product') {
            return [
                { href: "/#about-intro", text: "Sobre nosotros", id: "about" },
                { href: "/#marcas", text: "Marcas representadas", id: "marcas" },
                { href: "/productos", text: "Productos", id: "productos" },
                { href: "#contact", text: "Contacto", id: "contact" }
            ];
        }
        // Variante por defecto (home)
        return [
            { href: "#about-intro", text: "Sobre nosotros", id: "about" },
            { href: "#marcas", text: "Marcas representadas", id: "marcas" },
            { href: "/productos", text: "Productos", id: "productos" },
            { href: "#contact", text: "Contacto", id: "contact" }
        ];
    };

    return (
        <div className="navbar-container">
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
                            <a 
                                href={link.href}
                                className={activeSection === link.id ? 'active' : ''}
                                onClick={(e) => handleNavClick(link.href, e)}
                            >
                                {link.text}
                            </a>
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
        </div>
    );
}

export default Navbar;
