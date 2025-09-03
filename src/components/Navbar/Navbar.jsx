import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ variant = 'home' }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();

    // Base de datos de productos para búsqueda
    const products = [
        { id: 1, name: "MAXFLEX 440", description: "SELLADOR DE POLIURETANO" },
        { id: 2, name: "HORSE HM-500", description: "ANCLAJES ADHESIVOS INYECTABLES" },
        { id: 3, name: "MACROFIBRA MAXFIBER 50", description: "MACROFIBRA DE POLIPROPILENO VIRGEN" },
        { id: 4, name: "MICROFIBRA MAXFIBER 19", description: "MICROFIBRA DE POLIPROPILENO VIRGEN" },
        { id: 5, name: "SILICONA NEUTRA", description: "SELLADOR DE SILICONA NEUTRA" },
        { id: 6, name: "MAXTECH JM702", description: "PISTOLA APLICADORA NEUMÁTICA" },
        { id: 7, name: "MAXFLEX 445", description: "SELLADOR DE POLIURETANO" },
        { id: 8, name: "MAXTECH JM138", description: "PISTOLA APLICADORA MANUAL JM500L" },
        { id: 9, name: "MAXTECH JM500L", description: "PISTOLA APLICADORA MANUAL JM500L" }
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Función para filtrar productos en tiempo real
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        
        if (value.trim().length > 0) {
            const filtered = products.filter(product => 
                product.name.toLowerCase().includes(value.toLowerCase()) ||
                product.description.toLowerCase().includes(value.toLowerCase())
            );
            setSearchResults(filtered);
            setShowResults(true);
        } else {
            setSearchResults([]);
            setShowResults(false);
        }
    };

    // Función para seleccionar un producto
    const handleProductSelect = (productId) => {
        setSearchTerm('');
        setSearchResults([]);
        setShowResults(false);
        navigate(`/productos/${productId}`);
    };



    // Función para detectar la sección activa - solo al hacer click
    useEffect(() => {
        // No hay detección automática al hacer scroll
        // Los markers solo se activan al hacer click en los enlaces
    }, []);

    // Cerrar dropdown al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showResults && !event.target.closest('.search-container')) {
                setShowResults(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showResults]);

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
                { href: "/productos", text: "Productos", id: "productos" },
                { href: "#contact", text: "Contacto", id: "contact" }
            ];
        }
        // Variante por defecto (home)
        return [
            { href: "#about-intro", text: "Sobre nosotros", id: "about" },
            { href: "/productos", text: "Productos", id: "productos" },
            { href: "#contact", text: "Contacto", id: "contact" }
        ];
    };

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="/" className="logo-link">
                        <img src="/maxtechsinbg.png" alt="Logo Maxtech" className="logo" />
                    </a>
                </div>
                
                <div className="navbar-center">
                    <div className="search-container" onClick={(e) => e.stopPropagation()}>
                        <div className="search-form">
                            <input
                                type="text"
                                placeholder="Buscar..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="search-input"
                                autoComplete="off"
                            />
                            <div className="search-button">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.35-4.35"></path>
                                </svg>
                            </div>
                        </div>
                        
                        {showResults && searchResults.length > 0 && (
                            <div className="search-results">
                                {searchResults.map((product) => (
                                    <div 
                                        key={product.id}
                                        className="search-result-item"
                                        onClick={() => handleProductSelect(product.id)}
                                    >
                                        <div className="result-name">{product.name}</div>
                                        <div className="result-description">{product.description}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
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
