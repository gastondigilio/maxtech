import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-logo">
                        <img src="/maxtechsinbg.png" alt="Maxtech Latam" className="footer-logo-img" />
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
                        <li><a href="/productos">Selladores Polisulfuro</a></li>
                        <li><a href="/productos">Fibras de Refuerzo</a></li>
                        <li><a href="/productos">Pistolas Aplicadoras</a></li>
                        <li><a href="/productos">Anclajes Adhesivos</a></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h4>Contacto</h4>
                    <div className="contact-info">
                        <p><i className="fas fa-envelope"></i><span>info@maxtechlatam.com</span></p>
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
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </div>
                

            </div>
            
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; Powered by AgaruCorp</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
