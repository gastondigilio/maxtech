import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ variant = 'home' }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
    const navigate = useNavigate();

    // Base de datos de productos para búsqueda
    const products = [
        { id: 2, name: "HORSE HM-500", description: "Anclajes adhesivos inyectables" },
        { id: 3, name: "MACROFIBRA MAXFIBER 50", description: "Macrofibra de polipropileno virgen" },
        { id: 4, name: "MICROFIBRA MAXFIBER 19", description: "Microfibra de polipropileno virgen" },
        { id: 6, name: "MAXTECH JM702", description: "Pistola aplicadora neumática" },
        { id: 9, name: "MAXTECH JM500L", description: "Pistola aplicadora manual" },
        { id: 11, name: "SILANDE MF910H", description: "Sellador de butilo 2da barrera", externalUrl: "https://silandeargentina.com/productos/2" },
        { id: 12, name: "SILANDE MF910G", description: "Sellador de butilo 1ra barrera", externalUrl: "https://silandeargentina.com/productos/3" },
        { id: 13, name: "SILANDE MF910", description: "Sellador de butilo 1ra barrera", externalUrl: "https://silandeargentina.com/productos/4" },
        { id: 14, name: "SILANDE MF899", description: "Sellador de silicona estructural", externalUrl: "https://silandeargentina.com/productos/8" },
        { id: 15, name: "SILANDE MF889", description: "Sellador de silicona climático", externalUrl: "https://silandeargentina.com/productos/15" }
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleMobileSearch = () => {
        setMobileSearchOpen(!mobileSearchOpen);
        if (!mobileSearchOpen) {
            // Si se está abriendo, cerrar el menú si está abierto
            setMenuOpen(false);
        }
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
        
        const product = products.find(p => p.id === productId);
        if (product && product.externalUrl) {
            window.open(product.externalUrl, '_blank');
        } else {
            navigate(`/productos/${productId}`);
        }
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
            if (mobileSearchOpen && !event.target.closest('.mobile-search-container')) {
                setMobileSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showResults, mobileSearchOpen]);

        // Cerrar menú móvil al hacer clic fuera del menú
        useEffect(() => {
            const handleMenuClick = (event) => {
                if (menuOpen) {
                    // Solo cerrar si se hace clic fuera del menú
                    if (!event.target.closest('.navbar-right') && !event.target.closest('.menu-icon')) {
                        setMenuOpen(false);
                    }
                }
                if (mobileSearchOpen) {
                    // Solo cerrar si se hace clic fuera del buscador móvil
                    if (!event.target.closest('.mobile-search-container') && !event.target.closest('.mobile-search-icon')) {
                        setMobileSearchOpen(false);
                    }
                }
            };

            document.addEventListener('mousedown', handleMenuClick);
            return () => {
                document.removeEventListener('mousedown', handleMenuClick);
            };
        }, [menuOpen, mobileSearchOpen]);

    // Función para manejar el click en los enlaces
    const handleNavClick = (href, event) => {
        console.log('handleNavClick called with href:', href);
        if (href.startsWith('#')) {
            event.preventDefault();
            
            // Hacer scroll a la sección
            const element = document.querySelector(href);
            console.log('Element found:', element);
            if (element) {
                // Scroll más preciso para cada sección
                const navbarHeight = 38; // Altura de navbar en móvil
                const elementTop = element.offsetTop - navbarHeight - 20;
                console.log('Scrolling to:', elementTop);
                
                window.scrollTo({
                    top: elementTop,
                    behavior: 'smooth'
                });
                
                // Activar el marker correspondiente al hacer click
                const sectionId = href.substring(1); // Remover el #
                setActiveSection(sectionId);
            } else {
                console.log('Element not found for href:', href);
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
                        {!menuOpen ? (
                            // Enlaces de desktop cuando el menú está cerrado
                            getNavLinks().map((link, index) => (
                                <li key={`desktop-${index}`}>
                                    <a 
                                        href={link.href}
                                        className={activeSection === link.id ? 'active' : ''}
                                        onClick={(e) => handleNavClick(link.href, e)}
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))
                        ) : (
                            // Enlaces específicos del menú móvil cuando está abierto
                            <>
                                <li>
                                    <a 
                                        href='#about-intro' 
                                        className="menu-link"
                                        onClick={() => setTimeout(() => setMenuOpen(false), 300)}
                                    >
                                        Compañía
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href='#marcas' 
                                        className="menu-link"
                                        onClick={() => setTimeout(() => setMenuOpen(false), 300)}
                                    >
                                        Fábricas representadas
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href='/productos' 
                                        className="menu-link"
                                        onClick={() => setTimeout(() => setMenuOpen(false), 300)}
                                    >
                                        Productos
                                    </a>
                                </li>
                                <li className="menu-divider"></li>
                                <li>
                                    <a href='mailto:info@maxtechlatam.com' className="menu-link email-link">
                                        <span className="menu-icon">✉</span>
                                        <span className="contact-text">info@maxtechlatam.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='tel:+5491151489606' className="menu-link phone-link">
                                        <span className="menu-icon">📞</span>
                                        <span className="contact-text">+54 (9 11) 5148 9606</span>
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                <div className="navbar-mobile-controls">
                    <div className="mobile-search-icon" onClick={toggleMobileSearch}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                    </div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </nav>
            
            {/* Barra de búsqueda móvil */}
            {mobileSearchOpen && (
                <div className="mobile-search-container">
                    <div className="mobile-search-form">
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="mobile-search-input"
                            autoComplete="off"
                            autoFocus
                        />
                        <div className="mobile-search-button">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                        </div>
                    </div>
                    
                    {showResults && searchResults.length > 0 && (
                        <div className="mobile-search-results">
                            {searchResults.map((product) => (
                                <div 
                                    key={product.id}
                                    className="mobile-search-result-item"
                                    onClick={() => handleProductSelect(product.id)}
                                >
                                    <div className="result-name">{product.name}</div>
                                    <div className="result-description">{product.description}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Navbar;
