import "./Footer.css";
import Instagram from '../assets/Footer/instagramLogo.png';
import LinkedIn from '../assets/Footer/linkedInLogo.png';
import WhatsApp from '../assets/Footer/whatsappLogo.png';
import AgaruCorp from '../assets/Footer/agaruCorpLogo.png';
import Logo from '../assets/Navbar/logo.png';
import Whatsapp2 from '../assets/Contact/whatsapp.png';

const Footer = () => {
    return (
        <footer className="footer py-4">
            <div className="container">
                <div className="line-footer-up"></div>
                <div className="d-flex justify-content-between align-items-center footer-container">
                    <p className="mb-0">info@maxtechlatam.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
