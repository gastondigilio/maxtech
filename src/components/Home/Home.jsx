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
            <div id="about-intro" style={{padding: '2rem', textAlign: 'center', backgroundColor: '#ffffff', marginTop: '10px'}}>
                <h1 className="about-title" style={{fontSize: '41px', fontWeight: '600', color: '#000000', marginBottom: '2rem'}}>
                    Sobre Nosotros
                </h1>
                <p style={{fontSize: '15px', color: '#666666', maxWidth: '1000px', margin: '0 auto', lineHeight: '1.6'}}>
                    Somos una empresa líder dedicada a la investigación, desarrollo y certificación de tecnología de vanguardia. 
                    Nuestro objetivo es transformar el sector a través de la eficiencia, seguridad y sostenibilidad, 
                    impulsando el crecimiento de nuestros clientes y el desarrollo responsable de la industria.
                </p>
            </div>
            
            {/* Sección consolidada About */}
            <div id="about" style={{
                padding: '2rem 2rem',
                backgroundColor: '#ffffff',
                display: 'flex',
                gap: '3rem',
                maxWidth: '1200px',
                margin: '0.5rem auto 0 auto',
                alignItems: 'flex-start'
            }}>
                {/* Columna izquierda */}
                <div style={{
                    flex: '1',
                    textAlign: 'left'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '2rem'
                    }}>
                        <div style={{
                            width: '16px',
                            height: '150px',
                            backgroundColor: '#0082c9',
                            marginRight: '1rem'
                        }}></div>
                        <h2 style={{
                            fontSize: '32px',
                            fontWeight: '700',
                            color: '#000000',
                            margin: '0'
                        }}>
                            Nuestro compromiso, misión y objetivos
                        </h2>
                    </div>
                    
                    <div style={{
                        position: 'relative',
                        marginBottom: '2rem'
                    }}>
                        <img 
                            src="/TECNOLOGIA1.png" 
                            alt="Tecnología Maxtech" 
                            style={{
                                width: '100%',
                                height: '300px',
                                objectFit: 'cover',
                                borderRadius: '4px'
                            }}
                        />

                    </div>
                </div>
                
                {/* Columna derecha */}
                <div style={{
                    flex: '1',
                    textAlign: 'left'
                }}>
                    {/* Imágenes superiores */}
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        marginBottom: '2rem'
                    }}>
                        <img 
                            src="/rec35.png" 
                            alt="Recurso 35" 
                            style={{
                                width: '48%',
                                height: '150px',
                                objectFit: 'cover',
                                borderRadius: '4px'
                            }}
                        />
                        <img 
                            src="/rec36.png" 
                            alt="Recurso 36" 
                            style={{
                                width: '48%',
                                height: '150px',
                                objectFit: 'cover',
                                borderRadius: '4px'
                            }}
                        />
                    </div>
                    
                    {/* Textos */}
                    <p style={{
                        fontSize: '18px',
                        color: '#666666',
                        lineHeight: '1.6',
                        marginBottom: '1.5rem'
                    }}>
                        Ser reconocidos como líderes en la investigación, desarrollo y certificación de tecnología de punta de todo el mundo. 
                        A través de alianzas estratégicas y un enfoque centrado en el cliente, buscamos contribuir al crecimiento de nuestros clientes 
                        y al desarrollo responsable de la industria.
                    </p>
                    
                    <p style={{
                        fontSize: '18px',
                        color: '#666666',
                        lineHeight: '1.6',
                        marginBottom: '2rem'
                    }}>
                        Nos comprometemos a ofrecer soluciones impulsando la innovación y la sostenibilidad que transformen el sector, 
                        mejorando la eficiencia y seguridad en los procesos constructivos y productivos.
                    </p>
                    

                </div>
            </div>
            
            <About />
            
            {/* Sección de Marcas */}
            <div id="marcas" className="brands-section">
                <h3 className="brands-title">Fábricas Representadas</h3>
                <div className="brands-container">
                    <div className="brand-item">
                        <a href="https://es.horseen.com/" target="_blank" rel="noopener noreferrer" className="brand-link">
                            <img 
                                src="/horse.png" 
                                alt="Horse" 
                                className="brand-logo"
                            />
                        </a>
                    </div>
                    <div className="brand-item">
                        <a href="https://silandeargentina.com/" target="_blank" rel="noopener noreferrer" className="brand-link">
                            <img 
                                src="/logosilande.png" 
                                alt="Logo Silande" 
                                className="brand-logo"
                            />
                        </a>
                    </div>
                </div>
            </div>
            
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
