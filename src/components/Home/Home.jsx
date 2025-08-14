import './Home.css';
import React from "react";
import Navbar from '../Navbar/Navbar'
import Approach from '../Approach/Approach';

import About from '../About/About';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';



function Home() {

    return (
        <div className="App">
            <Navbar />
            <Approach />
            <div style={{padding: '2rem', textAlign: 'center', backgroundColor: '#ffffff', marginTop: '100vh'}}>
                <h1 style={{fontSize: '48px', fontWeight: '600', color: '#000000', marginBottom: '2rem'}}>
                    Sobre Nosotros
                </h1>
                <p style={{fontSize: '18px', color: '#666666', maxWidth: '1000px', margin: '0 auto', lineHeight: '1.6'}}>
                    Somos una empresa líder dedicada a la investigación, desarrollo y certificación de tecnología de vanguardia. 
                    Nuestro objetivo es transformar el sector a través de la eficiencia, seguridad y sostenibilidad, 
                    impulsando el crecimiento de nuestros clientes y el desarrollo responsable de la industria.
                </p>
            </div>
            
            {/* Nueva sección entre Sobre Nosotros y About */}
            <div style={{
                padding: '4rem 2rem',
                backgroundColor: '#ffffff',
                display: 'flex',
                gap: '3rem',
                maxWidth: '1200px',
                margin: '0 auto',
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
                        {/* Overlay con iconos hexagonales */}
                        <div style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            background: 'rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{
                                fontSize: '24px',
                                color: '#ffffff',
                                textAlign: 'center'
                            }}>
                                [Iconos hexagonales overlay]
                            </div>
                        </div>
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
