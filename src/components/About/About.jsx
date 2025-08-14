import "./About.css";

const About = () => {
    return (
        <div id="about" className="about container">
            <div className="row">
                <div className="col-md-4">
                    <div className="objective-card">
                        <h5 className="card-title" >Innovación y Mejora Continua</h5>
                        <p className="text-justify">
                            Fomentar la investigación y el desarrollo de productos tecnológicos avanzados que mejoren la eficiencia y la sostenibilidad en el sector de la construcción e industrias.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="objective-card">
                        <h5 className="card-title" >Certificación de Calidad</h5>
                        <p className="text-justify">
                            Establecer un riguroso proceso de certificación para garantizar que todos los productos cumplan con los estándares de seguridad y calidad exigidos por el mercado.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="objective-card">
                        <h5 className="card-title" >Importación Eficiente</h5>
                        <p className="text-justify">
                            Crear una red de proveedores confiables y estratégicos a nivel global para asegurar la importación de tecnologías de punta, optimizando tiempos y costos.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="objective-card">
                        <h5 className="card-title" >Atención al Cliente</h5>
                        <p className="text-justify">
                            Proporcionar un servicio excepcional, ofreciendo asesoría y soporte técnico para garantizar que nuestros clientes encuentren las soluciones adecuadas a sus necesidades.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="objective-card">
                        <h5 className="card-title" >Sostenibilidad</h5>
                        <p className="text-justify">
                            Promover prácticas responsables que minimicen el impacto ambiental de nuestras operaciones y productos, contribuyendo a un desarrollo más sostenible en la industria.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="objective-card">
                        <h5 className="card-title" >Alianzas Estratégicas</h5>
                        <p className="text-justify">
                            Establecer colaboraciones con instituciones académicas y empresas del sector para fortalecer la investigación y el desarrollo de nuevas tecnologías.
                        </p>
                    </div>
                </div>
            </div>

            {/* Sección de Marcas Representadas */}
            <div className="brands-section">
                <h3 className="brands-title">Marcas Representadas</h3>
                <div className="brands-container">
                    <div className="brand-item">
                        <a href="/productos?marca=horse" className="brand-link">
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

        </div>
    );
};

export default About;
