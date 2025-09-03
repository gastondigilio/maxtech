import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import Footer from '../Footer/Footer.jsx';
import JM500 from '../assets/Product/JM500.JPG';
import macroFibra from '../assets/Product/macroFibra.jpg';


const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('description');

    // Base de datos de productos (la misma que en Product.jsx)
    const products = [
        {
            id: 1,
            name: "MAXFLEX 440",
            category: "Maxtech",
            type: "Adhesivos y selladores",
            industry: "Construcción",
            image: "/images/products/maxtech/JM500.png",
            description: "SELLADOR DE POLIURETANO",
            longDescription: "El MAXFLEX 440 es un sellador de poliuretano de alta calidad diseñado específicamente para juntas de construcción. Este producto ofrece excelente resistencia a la intemperie, flexibilidad excepcional y durabilidad a largo plazo. Ideal para sellar juntas de dilatación, conexiones de techos, muros y pisos en proyectos de construcción comercial e industrial."
        },
        {
            id: 2,
            name: "HORSE HM-500",
            category: "Horse",
            type: "Anclajes químicos",
            industry: "Construcción",
            image: "/images/products/horse/HM500.png",
            description: "ANCLAJES ADHESIVOS INYECTABLES",
            longDescription: "El HORSE HM-500 es un sistema de anclajes adhesivos inyectables de alta calidad diseñado para aplicaciones de construcción y fijación estructural. Este producto ofrece excelente adherencia y resistencia, proporcionando una solución confiable para anclajes químicos en hormigón, mampostería y otros materiales de construcción. Ideal para aplicaciones que requieren máxima resistencia y durabilidad a largo plazo."
        },
        {
            id: 3,
            name: "MACROFIBRA MAXFIBER 50",
            category: "Maxtech",
            type: "Aditivos para hormigón",
            industry: "Construcción",
            image: "/images/products/maxtech/macro1.png",
            description: "MACROFIBRA DE POLIPROPILENO VIRGEN",
            longDescription: "La MACROFIBRA MAXFIBER 50 es una solución innovadora para el refuerzo estructural del hormigón. Estas fibras de alta resistencia proporcionan refuerzo secundario, reduciendo la formación de grietas y mejorando la durabilidad del hormigón. Perfecta para pavimentos, losas, muros y elementos estructurales que requieren mayor resistencia a la tracción."
        },
        {
            id: 4,
            name: "MICROFIBRA MAXFIBER 19",
            category: "Maxtech",
            type: "Aditivos para hormigón",
            industry: "Construcción",
            image: "/images/products/maxtech/microfibra1.png",
            description: "MICROFIBRA DE POLIPROPILENO VIRGEN",
            longDescription: "La MICROFIBRA MAXFIBER 19 es una fibra de polipropileno virgen de alta calidad diseñada para mejorar las propiedades del hormigón. Proporciona refuerzo secundario, reduce la formación de grietas y mejora la durabilidad del material. Ideal para aplicaciones que requieren mayor resistencia y control de fisuración."
        },
        {
            id: 5,
            name: "SILICONA NEUTRA",
            category: "Maxsil",
            type: "Adhesivos y selladores",
            industry: "Construcción",
            image: "/images/products/maxtech/JM500.png",
            description: "SELLADOR DE SILICONA NEUTRA",
            longDescription: "La SILICONA NEUTRA es un sellador de silicona neutra de alta calidad diseñado para aplicaciones de construcción. Ofrece excelente adherencia, resistencia a la intemperie y flexibilidad. Ideal para sellar juntas en ventanas, puertas, techos y otras aplicaciones donde se requiere un sellado confiable y duradero."
        },
        {
            id: 6,
            name: "MAXTECH JM702",
            category: "Maxtech",
            type: "",
            industry: "Aplicadores",
            image: "/images/products/maxtech/JM702.png",
            description: "PISTOLA APLICADORA NEUMÁTICA",
            longDescription: "La MAXTECH JM702 es una pistola aplicadora neumática de alta precisión diseñada para aplicaciones profesionales. Ofrece control preciso del flujo de material, ergonomía superior y durabilidad excepcional. Ideal para aplicaciones de sellado y adhesivos en proyectos de construcción e industrial."
        },
        {
            id: 7,
            name: "MAXFLEX 445",
            category: "Maxtech",
            type: "Adhesivos y selladores",
            industry: "Construcción",
            image: "/images/products/maxtech/JM500.png",
            description: "SELLADOR DE POLIURETANO",
            longDescription: "El MAXFLEX 445 es un sellador de poliuretano de alta calidad diseñado para aplicaciones de construcción. Ofrece excelente adherencia, resistencia a la intemperie y flexibilidad. Ideal para sellar juntas de dilatación, conexiones estructurales y aplicaciones que requieren máxima durabilidad."
        },
        {
            id: 8,
            name: "MAXTECH JM138",
            category: "Maxtech",
            type: "",
            industry: "Aplicadores",
            image: "/images/products/maxtech/JM500.png",
            description: "PISTOLA APLICADORA MANUAL JM500L",
            longDescription: "La MAXTECH JM138 es una pistola aplicadora manual de alta calidad diseñada para aplicaciones profesionales. Ofrece control preciso, ergonomía superior y durabilidad excepcional. Ideal para aplicaciones de sellado y adhesivos en proyectos de construcción e industrial."
        },
        {
            id: 9,
            name: "MAXTECH JM500L",
            category: "Maxtech",
            type: "",
            industry: "Aplicadores",
            image: "/images/products/maxtech/JM500.png",
            description: "PISTOLA APLICADORA MANUAL JM500L",
            longDescription: "La MAXTECH JM500L es una pistola aplicadora manual de alta calidad diseñada para aplicaciones profesionales. Ofrece control preciso, ergonomía superior y durabilidad excepcional. Ideal para aplicaciones de sellado y adhesivos en proyectos de construcción e industrial."
        }
    ];

    // Buscar el producto por ID
    const product = products.find(p => p.id === parseInt(id));

    // Si no se encuentra el producto, redirigir a la página de productos
    if (!product) {
        navigate('/productos');
        return null;
    }



    return (
        <>
            <div className="product-detail-container">
                <div className="product-detail-content">
                    {/* Hero Section */}
                    <div className="product-hero-section">
                        <div className="product-image-section">
                            <div className="image-container-rectangle">
                                <img
                                    src="/rectangle47.png"
                                    alt="Rectangle background"
                                    className="rectangle-background"
                                />
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-detail-image-centered"
                                />
                            </div>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-detail-image-mobile"
                            />
                        </div>

                        <div className="vertical-divider"></div>

                        <div className="product-info-section">
                            <h1 className="product-detail-title">{product.name}</h1>
                            {product.name === "HORSE HM-500" && (
                                <>
                                    <p className="product-subtitle">Adhesivo Mortero para Anclajes Epoxi</p>
                                    <p className="product-description">TREMIX HORSE TX-HM500 Epoxy Resin Achoring es un adhesivo de resina epoxi modificado de dos componentes, con tubo de plástico de alta calidad, paquete de doble cartucho. Se inyecta en los orificios con la pistola dispensadora, mezclando la parte A y la parte B de manera uniforme, para plantar barras de refuerzo.</p>
                                    <button className="download-docs-button">
                                        <div className="pdf-download-icon">
                                            <div className="pdf-icon">
                                                <span className="pdf-text">PDF</span>
                                            </div>
                                            <div className="download-arrow">
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        Descargar Documentación Técnica
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Horizontal Divider */}
                    <div className="horizontal-divider"></div>

                    {/* Product Details Section */}
                    <div className="product-details-section">
                        <div className="tabs-container">
                            <div className="tabs-header">
                                <button 
                                    className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('description')}
                                >
                                    Descripción General
                                </button>
                                <button 
                                    className={`tab-button ${activeTab === 'technical' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('technical')}
                                >
                                    Datos Técnicos
                                </button>
                            </div>
                            
                            <div className="tab-content">
                                {activeTab === 'description' && (
                                    <div className="tab-panel">
                                        <h3>Descripción General</h3>
                                        <p>Aquí irá la descripción general del producto...</p>
                                    </div>
                                )}
                                
                                {activeTab === 'technical' && (
                                    <div className="tab-panel">
                                        <h3>Datos Técnicos</h3>
                                        <p>Aquí irán los datos técnicos del producto...</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
};

export default ProductDetail;
