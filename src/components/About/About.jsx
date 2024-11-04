import "./About.css";
import Mision from "../assets/About/mision.png";
import Vision from "../assets/About/vision.png";

const About = () => {
    return (
        <div id="about" className="about container py-5">
            <div className="row mb-4 about-container">
                <div className="col-md-6">
                    <div className="card-about">
                        <img src={Vision} className="card-img-top image" alt="Imagen 1" />
                        <div className="card-body">
                            <h5 className="card-title">Visión</h5>
                            <p className="card-text-about text-justify">
                                Ser reconocidos como líderes en la investigación, desarrollo y certificación de tecnología de punta para la construcción e industrias, impulsando la innovación y la sostenibilidad.
                                Nos comprometemos a ofrecer soluciones de alta calidad que transformen el sector, mejorando la eficiencia y seguridad en los procesos constructivos y productivos.
                                A través de alianzas estratégicas y un enfoque centrado en el cliente, buscamos posicionarnos como el socio preferido en el suministro de productos tecnológicos avanzados, contribuyendo al crecimiento de nuestros clientes y al desarrollo responsable de la industria.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card-about1">
                        <img src={Mision} className="card-img-top image" alt="Imagen 2" />
                        <div className="card-body">
                            <h5 className="card-title">Misión</h5>
                            <p className="card-text-about1 text-justify">
                                Desarrollar e importar productos de tecnología de punta que impulsen la innovación y la eficiencia en la construcción y las industrias.
                                A través de una rigurosa investigación y certificación, garantizamos la calidad y la seguridad de nuestras soluciones, adaptándonos a las necesidades específicas de nuestros clientes. Nos comprometemos a fomentar el crecimiento sostenible y a ser un referente en el sector, ofreciendo un servicio excepcional y estableciendo relaciones de confianza con nuestros socios comerciales.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="text-center mb-4 title-objetivos">Objetivos</h3>
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

        </div>
    );
};

export default About;
