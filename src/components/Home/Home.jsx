import './Home.css';
import React from "react";
import Approach from '../Approach/Approach';

import About from '../About/About';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';



function Home() {
    // Verificar si hay una sección específica a la que hacer scroll
    React.useEffect(() => {
        const scrollToSection = sessionStorage.getItem('scrollToSection');
        if (scrollToSection) {
            // Limpiar el sessionStorage
            sessionStorage.removeItem('scrollToSection');
            
            // Hacer scroll a la sección después de un pequeño delay para que la página se cargue
            setTimeout(() => {
                const element = document.querySelector(scrollToSection);
                if (element) {
                    const navbarHeight = 72;
                    const elementTop = element.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: elementTop,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }, []);

    return (
        <div className="App">
            <Approach />
            <section id="about-intro" className="about-intro">
                <h1 className="about-title">Nosotros</h1>
                <p className="about-intro-text">
                    Somos una empresa líder dedicada a la investigación, desarrollo y certificación de tecnología de vanguardia. 
                    Nuestro objetivo es transformar el sector a través de la eficiencia, seguridad y sostenibilidad, 
                    impulsando el crecimiento de nuestros clientes y el desarrollo responsable de la industria.
                </p>
            </section>
            
            <section id="about" className="commitment-section">
                <div className="commitment-left">
                    <div className="commitment-heading">
                        <span className="commitment-accent" aria-hidden="true"></span>
                        <h2>Nuestro compromiso, misión y objetivos</h2>
                    </div>
                    
                    <div className="commitment-main-image">
                        <img 
                            src="/TECNOLOGIA1.png" 
                            alt="Tecnología Maxtech" 
                        />
                    </div>
                </div>
                
                <div className="commitment-right">
                    <div className="commitment-side-images">
                        <img 
                            src="/rec35.png" 
                            alt="Recurso 35" 
                        />
                        <img 
                            src="/rec36.png" 
                            alt="Recurso 36" 
                        />
                    </div>
                    
                    <p>
                        Ser reconocidos como líderes en la investigación, desarrollo y certificación de tecnología de punta de todo el mundo. 
                        A través de alianzas estratégicas y un enfoque centrado en el cliente, buscamos contribuir al crecimiento de nuestros clientes 
                        y al desarrollo responsable de la industria.
                    </p>
                    
                    <p>
                        Nos comprometemos a ofrecer soluciones impulsando la innovación y la sostenibilidad que transformen el sector, 
                        mejorando la eficiencia y seguridad en los procesos constructivos y productivos.
                    </p>
                </div>
            </section>
            
            <About />
            
            {/* Sección de Marcas */}
            <section id="marcas" className="brands-section">
                <h3 className="brands-title">Fábricas Representadas</h3>
                <div className="brands-grid">
                    <div className="brand-tile">
                        <a href="https://es.horseen.com/" target="_blank" rel="noopener noreferrer" className="brand-tile-link" aria-label="Horse">
                            <img
                                src="/horse.png"
                                alt="Horse"
                                className="brand-tile-logo"
                            />
                        </a>
                    </div>
                    <div className="brand-tile">
                        <a href="https://silandeargentina.com/" target="_blank" rel="noopener noreferrer" className="brand-tile-link" aria-label="Silande">
                            <img
                                src="/logosilande.png"
                                alt="Silande"
                                className="brand-tile-logo"
                            />
                        </a>
                    </div>
                </div>
            </section>
            
            {/* <Product/> */}
            <Contact />
            <Footer />
            <button
                className="whatsapp-button"
                onClick={() => window.open("https://wa.me/+5491151489606", "_blank")}
            >
                <img src="/images/ui/WhatsApp.png" alt="WhatsApp" />
            </button>
        </div>
    );
}

export default Home;
