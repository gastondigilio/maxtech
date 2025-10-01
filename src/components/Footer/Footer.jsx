import "./Footer.css";
import { useState } from "react";

const Footer = () => {
    const [showEmailModal, setShowEmailModal] = useState(false);

    const handleEmailClick = (e) => {
        e.preventDefault();
        setShowEmailModal(true);
    };

    const openGmail = () => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@maxtechlatam.com', '_blank');
        setShowEmailModal(false);
    };

    const openOutlook = () => {
        window.open('https://outlook.live.com/mail/0/deeplink/compose?to=info@maxtechlatam.com', '_blank');
        setShowEmailModal(false);
    };

    const openYahoo = () => {
        window.open('https://compose.mail.yahoo.com/?to=info@maxtechlatam.com', '_blank');
        setShowEmailModal(false);
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText('info@maxtechlatam.com');
            alert('Email copiado al portapapeles');
            setShowEmailModal(false);
        } catch (err) {
            console.error('Error al copiar:', err);
        }
    };

    return (
        <footer className="footer" id="contact">
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-logo">
                        <img 
                            src="/maxtechsinbg.png" 
                            alt="Maxtech Latam" 
                            className="footer-logo-img" 
                            style={{ 
                                width: '150px', 
                                height: 'auto'
                            }}
                        />
                    </div>
                    <div className="footer-flags">
                        <div className="footer-flag">
                            <img src="/images/flags/argentina.png" alt="Argentina" />
                            <span>Argentina</span>
                        </div>
                        <div className="footer-flag">
                            <img src="/images/flags/uruguay.png" alt="Uruguay" />
                            <span>Uruguay</span>
                        </div>
                    </div>
                </div>
                
                <div className="footer-section">
                    <h4>Productos</h4>
                    <ul>
                        <li><a href="/productos">Construcción</a></li>
                        <li><a href="/productos">Aberturas</a></li>
                        <li><a href="/productos">Aplicadores</a></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h4>Contacto</h4>
                    <div className="contact-info">
                        <p><i className="fas fa-envelope"></i><span><a href="#" onClick={handleEmailClick} className="contact-link">info@maxtechlatam.com</a></span></p>
                        <p><i className="fas fa-phone"></i><span>+54 9 11 5148-9606</span></p>
                        <p><i className="fas fa-map-marker-alt"></i><span>Buenos Aires, Argentina</span></p>
                    </div>
                </div>
                
                <div className="footer-section">
                    <h4>Enlaces Útiles</h4>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/productos">Productos</a></li>
                        <li><a href="#about">Nosotros</a></li>
                    </ul>
                </div>
                

            </div>
            
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p><a href="https://www.agarucorp.com" target="_blank" rel="noopener noreferrer" className="footer-copyright-link">&copy; Powered by AgaruCorp</a></p>
                </div>
            </div>
            
            {/* Modal de selección de correo */}
            {showEmailModal && (
                <div className="email-modal-overlay" onClick={() => setShowEmailModal(false)}>
                    <div className="email-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="email-modal-header">
                            <h3>Elegir opción de correo</h3>
                            <button 
                                className="email-modal-close" 
                                onClick={() => setShowEmailModal(false)}
                            >
                                ✕
                            </button>
                        </div>
                        <div className="email-modal-content">
                            <p className="email-modal-email">info@maxtechlatam.com</p>
                            <div className="email-options">
                                <button onClick={openGmail} className="email-option gmail">
                                    <span className="email-option-icon">📧</span>
                                    <span>Gmail</span>
                                </button>
                                <button onClick={openOutlook} className="email-option outlook">
                                    <span className="email-option-icon">📧</span>
                                    <span>Outlook</span>
                                </button>
                                <button onClick={openYahoo} className="email-option yahoo">
                                    <span className="email-option-icon">📧</span>
                                    <span>Yahoo Mail</span>
                                </button>
                                <button onClick={copyEmail} className="email-option copy">
                                    <span className="email-option-icon">📋</span>
                                    <span>Copiar Email</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
