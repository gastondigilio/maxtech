import React from 'react';
import './Approach.css';
import BackgroundImage from '../assets/Approach/fachada-moderna-del-edificio-de-oficinas.jpg';
import MobileBackgroundImage from '../assets/Approach/ventanamobile.jpg';

const Approach = () => {
    const handleScrollToAbout = () => {
        const element = document.querySelector('#about-intro');
        if (element) {
            const navbarHeight = 38;
            const elementTop = element.offsetTop - navbarHeight - 20;
            window.scrollTo({
                top: elementTop,
                behavior: 'smooth'
            });
        }
    };
    return (
        <>
            <div className="approach-container">
                <div className="approach-background approach-background-desktop" style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${BackgroundImage})` 
                }}></div>
                <div className="approach-background approach-background-mobile" style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${MobileBackgroundImage})` 
                }}></div>
                <div className="approach-content">
                    <h2 className='approach-title'>SOLUCIONES TECNOLÓGICAS PARA LA CONSTRUCCIÓN E INDUSTRIAS</h2>
                    <p className='approach-text'>Ofrecemos innovación tecnológica para lograr procesos productivos más eficientes y optimizar sistemas de construcción, aportando a un crecimiento sostenible</p>
                    <div className="cta-buttons">
                        <a href='/productos' className="about-button">Ver Catálogo</a>
                        <a href='#about-intro' className="about-button-secondary mobile-only" onClick={handleScrollToAbout}>Ver Más</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Approach;
