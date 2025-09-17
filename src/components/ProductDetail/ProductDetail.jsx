import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import Footer from '../Footer/Footer.jsx';
import JM500 from '../assets/Product/JM500.JPG';
import macroFibra from '../assets/Product/macroFibra.jpg';


const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('descripcion');

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
            longDescription: "Es un sellador de poliuretano de un componente, de curado por humedad. Buen sellado y rendimiento flexible. No corroe ni contamina los materiales de base y es amigable con el medio ambiente. Resistencia a la punción, fácil de reparar. Buena adherencia con cementos y piedras.\n\nPROPIEDADES\n• Mono componente, excelente extrusión, no chorrea, fácil uso en construcción.\n• Alto módulo, alta resistencia al movimiento.\n\nAPLICACIONES\nEs adecuado para áreas donde se requiere poco movimiento, alta resistencia a la penetración y presión. Para la impermeabilización de caras de aire en puentes, túneles y tuberías de drenaje. Para la unión y el sellado de paneles prefabricados, paredes internas de hormigón y piedra.",
            safetyInfo: "TRANSPORTE Y ALMACENAMIENTO\n\n● Transporte: Mantenga el producto sellado alejado de la humedad, el sol, las altas temperaturas y evite colisiones.\n● Almacenamiento: Mantener sellado en un lugar fresco y seco. Temperatura: 5~25℃. Humedad: ≤50%HR.\n● Vida útil: Cartucho y Salchicha 12 meses, Tambor 16 meses.\n\nSEGURIDAD\n\n● Mantener alejado de los niños.\n● Evite el contacto con la piel y los ojos. En caso de contacto con la piel, retire el sellador con un paño, lave bien la piel con agua y jabón.\n● En caso de contacto con los ojos, mantenga los párpados separados y enjuague bien con agua, comuníquese con un médico.",
            documents: {
                HDT: "/documents/products/maxtech/maxflex-440/HDT.pdf",
                HDS: "/documents/products/maxtech/maxflex-440/HDS.pdf"
            }
        },
        {
            id: 2,
            name: "HORSE HM-500",
            category: "Horse",
            type: "Anclajes químicos",
            industry: "Construcción",
            image: "/images/products/horse/HM500.png",
            description: "ANCLAJES ADHESIVOS INYECTABLES",
            longDescription: "El HORSE HM-500 es un sistema de anclajes adhesivos inyectables de alta calidad diseñado para aplicaciones de construcción y fijación estructural. Este producto ofrece excelente adherencia y resistencia, proporcionando una solución confiable para anclajes químicos en hormigón, mampostería y otros materiales de construcción. Ideal para aplicaciones que requieren máxima resistencia y durabilidad a largo plazo.\n\nPROPIEDADES\n• Sistema de dos componentes\n• Alta resistencia mecánica\n• Excelente adherencia al hormigón\n• Resistencia a la intemperie\n\nAPLICACIONES\n• Anclajes estructurales en hormigón\n• Fijación de elementos pesados\n• Construcción civil e industrial\n• Reparaciones estructurales",
            safetyInfo: "TRANSPORTE Y ALMACENAMIENTO\n\n● Transporte: Mantenga el producto sellado alejado de la humedad, el sol y las altas temperaturas.\n● Almacenamiento: Mantener sellado en un lugar fresco y seco. Temperatura: 5~25℃. Humedad: ≤60%HR.\n● Vida útil: Cartucho 18 meses, Tambor 24 meses.\n\nSEGURIDAD\n\n● Mantener alejado de los niños.\n● Evite el contacto con la piel y los ojos. En caso de contacto con la piel, retire el producto con un paño, lave bien la piel con agua y jabón.\n● En caso de contacto con los ojos, enjuague inmediatamente con agua abundante y consulte a un médico.\n● Usar en áreas bien ventiladas durante la aplicación.",
            documents: {
                HDT: "/documents/products/horse/hm-500/HDT.pdf",
                HDS: "/documents/products/horse/hm-500/HDS.pdf"
            }
        },
        {
            id: 3,
            name: "MACROFIBRA MAXFIBER 50",
            category: "Maxtech",
            type: "Aditivos para hormigón",
            industry: "Construcción",
            image: "/images/products/maxtech/macro1.png",
            description: "MACROFIBRA DE POLIPROPILENO VIRGEN",
            longDescription: "La MACROFIBRA MAXFIBER 50 es una fibra de polipropileno virgen de alta calidad diseñada para mejorar las propiedades del hormigón. Esta macrofibra proporciona refuerzo estructural, reduce la fisuración por contracción y mejora la durabilidad del hormigón en aplicaciones industriales y comerciales.\n\nPROPIEDADES\n• Fibra de polipropileno virgen\n• Longitud: 50mm\n• Diámetro: 0.75mm\n• Resistencia a álcalis\n• No corrosión\n\nAPLICACIONES\n• Hormigón estructural\n• Pavimentos industriales\n• Elementos prefabricados\n• Construcción civil",
            safetyInfo: "TRANSPORTE Y ALMACENAMIENTO\n\n● Transporte: Mantenga el producto en envases cerrados, alejado de la humedad.\n● Almacenamiento: Mantener en lugar seco y ventilado. Temperatura: ambiente.\n● Vida útil: 36 meses en condiciones adecuadas de almacenamiento.\n\nSEGURIDAD\n\n● Mantener alejado de los niños.\n● Evite la inhalación del polvo durante el manejo.\n● Usar mascarilla y guantes durante la manipulación.\n● En caso de contacto con los ojos, enjuague con agua abundante y consulte a un médico."
        },
        {
            id: 4,
            name: "MICROFIBRA MAXFIBER 19",
            category: "Maxtech",
            type: "Aditivos para hormigón",
            industry: "Construcción",
            image: "/images/products/maxtech/microfibra1.png",
            description: "MICROFIBRA DE POLIPROPILENO VIRGEN",
            longDescription: "La MICROFIBRA MAXFIBER 19 es una microfibra de polipropileno virgen que mejora significativamente las propiedades del hormigón. Proporciona control de fisuración, mejora la trabajabilidad y aumenta la resistencia a la abrasión, ideal para aplicaciones de hormigón de alto rendimiento.\n\nPROPIEDADES\n• Fibra de polipropileno virgen\n• Longitud: 19mm\n• Diámetro: 0.45mm\n• Control de fisuración\n• Mejora trabajabilidad\n\nAPLICACIONES\n• Hormigón de alto rendimiento\n• Control de fisuración\n• Mejora de trabajabilidad\n• Construcción civil",
            safetyInfo: "TRANSPORTE Y ALMACENAMIENTO\n\n● Transporte: Mantenga el producto en envases cerrados, alejado de la humedad.\n● Almacenamiento: Mantener en lugar seco y ventilado. Temperatura: ambiente.\n● Vida útil: 36 meses en condiciones adecuadas de almacenamiento.\n\nSEGURIDAD\n\n● Mantener alejado de los niños.\n● Evite la inhalación del polvo durante el manejo.\n● Usar mascarilla y guantes durante la manipulación.\n● En caso de contacto con los ojos, enjuague con agua abundante y consulte a un médico."
        },
        {
            id: 5,
            name: "SILICONA NEUTRA",
            category: "Maxsil",
            type: "Adhesivos y selladores",
            industry: "Construcción",
            image: "/images/products/maxtech/JM500.png",
            description: "SELLADOR DE SILICONA NEUTRA",
            longDescription: "La SILICONA NEUTRA es un sellador de silicona neutra de alta calidad que no produce ácido acético durante la curación. Ideal para aplicaciones donde se requiere compatibilidad con una amplia gama de materiales, proporcionando excelente adherencia y resistencia a la intemperie.\n\nPROPIEDADES\n• Sellador de silicona neutra\n• No produce ácido acético\n• Compatible con múltiples materiales\n• Resistencia a la intemperie\n• Excelente adherencia\n\nAPLICACIONES\n• Sellado de juntas en construcción\n• Impermeabilización\n• Sellado de ventanas y puertas\n• Aplicaciones sanitarias",
            safetyInfo: "TRANSPORTE Y ALMACENAMIENTO\n\n● Transporte: Mantenga el producto sellado alejado de la humedad y el sol.\n● Almacenamiento: Mantener sellado en un lugar fresco y seco. Temperatura: 5~25℃.\n● Vida útil: Cartucho 12 meses, Tambor 18 meses.\n\nSEGURIDAD\n\n● Mantener alejado de los niños.\n● Evite el contacto con la piel y los ojos. En caso de contacto con la piel, retire el sellador con un paño, lave bien la piel con agua y jabón.\n● En caso de contacto con los ojos, enjuague inmediatamente con agua abundante y consulte a un médico.\n● Usar en áreas bien ventiladas."
        },
        {
            id: 6,
            name: "MAXTECH JM702",
            category: "Maxtech",
            type: "",
            industry: "Aplicadores",
            image: "/images/products/maxtech/JM702.png",
            description: "PISTOLA APLICADORA NEUMÁTICA",
            longDescription: "La MAXTECH JM702 es una pistola aplicadora neumática profesional diseñada para la aplicación eficiente de selladores y adhesivos. Ofrece control preciso, ergonomía mejorada y durabilidad excepcional para aplicaciones industriales y comerciales.\n\nPROPIEDADES\n• Pistola aplicadora neumática\n• Control de flujo preciso\n• Diseño ergonómico\n• Construcción robusta\n• Fácil mantenimiento\n\nAPLICACIONES\n• Aplicación de selladores\n• Aplicación de adhesivos\n• Trabajos de construcción\n• Aplicaciones industriales",
            safetyInfo: "TRANSPORTE Y ALMACENAMIENTO\n\n● Transporte: Mantenga la herramienta en su estuche original, protegida de golpes.\n● Almacenamiento: Guardar en lugar seco y limpio. Lubricar según especificaciones.\n● Vida útil: 5 años con mantenimiento adecuado.\n\nSEGURIDAD\n\n● Mantener alejado de los niños.\n● Usar equipo de protección personal (guantes, gafas).\n● Verificar presión de aire antes del uso.\n● Mantener la herramienta limpia y en buen estado.\n● Leer manual de instrucciones antes del uso."
        },
        {
            id: 7,
            name: "MAXFLEX 445",
            category: "Maxtech",
            type: "Adhesivos y selladores",
            industry: "Construcción",
            image: "/images/products/maxtech/JM500.png",
            description: "SELLADOR DE POLIURETANO",
            longDescription: "El MAXFLEX 445 es un sellador de poliuretano versátil que combina excelente adherencia con flexibilidad excepcional. Ideal para aplicaciones que requieren movilidad estructural y resistencia a la intemperie, perfecto para juntas de expansión y contracción en estructuras de hormigón y metal.\n\nPROPIEDADES\n• Sellador de poliuretano versátil\n• Excelente adherencia\n• Flexibilidad excepcional\n• Resistencia a la intemperie\n• Movilidad estructural\n\nAPLICACIONES\n• Juntas de expansión\n• Juntas de contracción\n• Estructuras de hormigón\n• Estructuras metálicas",
            safetyInfo: "TRANSPORTE Y ALMACENAMIENTO\n\n● Transporte: Mantenga el producto sellado alejado de la humedad, el sol y las altas temperaturas.\n● Almacenamiento: Mantener sellado en un lugar fresco y seco. Temperatura: 5~25℃. Humedad: ≤50%HR.\n● Vida útil: Cartucho y Salchicha 12 meses, Tambor 16 meses.\n\nSEGURIDAD\n\n● Mantener alejado de los niños.\n● Evite el contacto con la piel y los ojos. En caso de contacto con la piel, retire el sellador con un paño, lave bien la piel con agua y jabón.\n● En caso de contacto con los ojos, enjuague inmediatamente con agua abundante y consulte a un médico.\n● Usar en áreas bien ventiladas."
        },
        {
            id: 8,
            name: "MAXTECH JM138",
            category: "Maxtech",
            type: "",
            industry: "Aplicadores",
            image: "/images/products/maxtech/JM500.png",
            description: "PISTOLA APLICADORA MANUAL JM500L",
            longDescription: "La MAXTECH JM138 es una pistola aplicadora manual de alta precisión diseñada para trabajos que requieren control detallado. Su diseño ergonómico y mecanismo suave la hacen ideal para aplicaciones de sellado y adhesivo en proyectos de construcción y reparación.\n\nPROPIEDADES\n• Pistola aplicadora manual\n• Alta precisión\n• Diseño ergonómico\n• Mecanismo suave\n• Control detallado\n\nAPLICACIONES\n• Sellado de precisión\n• Aplicación de adhesivos\n• Trabajos de reparación\n• Construcción",
            safetyInfo: "TRANSPORTE Y ALMACENAMIENTO\n\n● Transporte: Mantenga la herramienta en su estuche original, protegida de golpes.\n● Almacenamiento: Guardar en lugar seco y limpio. Limpiar después de cada uso.\n● Vida útil: 3 años con mantenimiento adecuado.\n\nSEGURIDAD\n\n● Mantener alejado de los niños.\n● Usar equipo de protección personal (guantes, gafas).\n● Mantener la herramienta limpia y en buen estado.\n● Leer manual de instrucciones antes del uso.\n● No forzar el mecanismo de la pistola."
        },
        {
            id: 9,
            name: "MAXTECH JM500L",
            category: "Maxtech",
            type: "",
            industry: "Aplicadores",
            image: "/images/products/maxtech/JM500.png",
            description: "PISTOLA APLICADORA MANUAL JM500L",
            longDescription: "La MAXTECH JM500L es una pistola aplicadora manual profesional con capacidad de 500ml. Diseñada para aplicaciones intensivas, ofrece durabilidad excepcional y control preciso para trabajos de sellado y adhesivo en proyectos comerciales e industriales.\n\nPROPIEDADES\n• Pistola aplicadora manual\n• Capacidad: 500ml\n• Diseño profesional\n• Durabilidad excepcional\n• Control preciso\n\nAPLICACIONES\n• Aplicaciones intensivas\n• Sellado comercial\n• Sellado industrial\n• Proyectos grandes",
            safetyInfo: "TRANSPORTE Y ALMACENAMIENTO\n\n● Transporte: Mantenga la herramienta en su estuche original, protegida de golpes.\n● Almacenamiento: Guardar en lugar seco y limpio. Limpiar después de cada uso.\n● Vida útil: 4 años con mantenimiento adecuado.\n\nSEGURIDAD\n\n● Mantener alejado de los niños.\n● Usar equipo de protección personal (guantes, gafas).\n● Mantener la herramienta limpia y en buen estado.\n● Leer manual de instrucciones antes del uso.\n● No sobrecargar la pistola."
        },
        {
            id: 10,
            name: "SELLADOR PARABRISAS",
            category: "Maxtech",
            type: "Adhesivos y selladores",
            industry: "Automotriz",
            image: "/images/products/maxtech/parabrisas.png",
            description: "Sellador de poliuretano",
            longDescription: "El SELLADOR PARABRISAS es un sellador de poliuretano especializado para la industria automotriz. Proporciona sellado hermético y duradero para parabrisas, ventanas laterales y traseras. Ofrece excelente adherencia al vidrio y metal, resistencia a la intemperie y flexibilidad para soportar las tensiones estructurales del vehículo.\n\nPROPIEDADES\n• Sellador de poliuretano especializado\n• Sellado hermético\n• Excelente adherencia al vidrio\n• Excelente adherencia al metal\n• Resistencia a la intemperie\n\nAPLICACIONES\n• Sellado de parabrisas\n• Sellado de ventanas laterales\n• Sellado de ventanas traseras\n• Industria automotriz",
            safetyInfo: "TRANSPORTE Y ALMACENAMIENTO\n\n● Transporte: Mantenga el producto sellado alejado de la humedad, el sol y las altas temperaturas.\n● Almacenamiento: Mantener sellado en un lugar fresco y seco. Temperatura: 5~25℃. Humedad: ≤50%HR.\n● Vida útil: Cartucho 12 meses, Tambor 16 meses.\n\nSEGURIDAD\n\n● Mantener alejado de los niños.\n● Evite el contacto con la piel y los ojos. En caso de contacto con la piel, retire el sellador con un paño, lave bien la piel con agua y jabón.\n● En caso de contacto con los ojos, enjuague inmediatamente con agua abundante y consulte a un médico.\n● Usar en áreas bien ventiladas durante la aplicación.",
            documents: {
                HDT: "/documents/products/maxtech/sellador-parabrisas/HDT.pdf",
                HDS: "/documents/products/maxtech/sellador-parabrisas/HDS.pdf"
            }
        }
    ];

    // Buscar el producto por ID
    const product = products.find(p => p.id === parseInt(id));

    // Si no se encuentra el producto, redirigir a la página de productos
    if (!product) {
        navigate('/productos');
        return null;
    }

    const handleBackToProducts = () => {
        navigate('/productos');
    };

    const handleBreadcrumbClick = (path, params = {}) => {
        if (path === '/productos') {
            navigate('/productos');
        } else {
            navigate(`/productos?${new URLSearchParams(params).toString()}`);
        }
    };

    const generateBreadcrumb = () => {
        if (!product) return [];
        
        const breadcrumb = [
            { label: 'Productos', path: '/productos' }
        ];

        if (product.industry) {
            breadcrumb.push({
                label: product.industry,
                path: '/productos',
                params: { industry: product.industry }
            });
        }

        if (product.type) {
            breadcrumb.push({
                label: product.type,
                path: '/productos',
                params: { 
                    industry: product.industry,
                    subcategory: product.type 
                }
            });
        }

        breadcrumb.push({
            label: product.name,
            path: null,
            current: true
        });

        return breadcrumb;
    };

    return (
        <>
            <div className="product-detail-container">
                <div className="product-detail-content">
                    <nav className="breadcrumb">
                        {generateBreadcrumb().map((item, index) => (
                            <div key={index} className="breadcrumb-item">
                                {item.path ? (
                                    <button 
                                        className="breadcrumb-link"
                                        onClick={() => handleBreadcrumbClick(item.path, item.params)}
                                    >
                                        {item.label}
                    </button>
                                ) : (
                                    <span className="breadcrumb-current">{item.label}</span>
                                )}
                                {index < generateBreadcrumb().length - 1 && (
                                    <span className="breadcrumb-separator">></span>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="product-hero-section">
                        <div className="product-image-section">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-detail-image"
                            />
                        </div>

                        <div className="vertical-divider"></div>

                        <div className="product-info-section">
                            <h1 className="product-detail-title">{product.name}</h1>
                            
                            <div className="product-category-info">
                                <span className="product-category-badge">{product.category}</span>
                                {product.type && (
                                    <span className="product-subcategory-badge">{product.type}</span>
                                )}
                            </div>

                            <button 
                                className="download-docs-button"
                                onClick={() => {
                                    if (product.documents?.HDT) {
                                        window.open(product.documents.HDT, '_blank');
                                    }
                                    if (product.documents?.HDS) {
                                        window.open(product.documents.HDS, '_blank');
                                    }
                                }}
                            >
                                <div className="pdf-download-icon">
                                    <span className="pdf-icon">
                                        <span className="pdf-text">PDF</span>
                                    </span>
                                    <span>Descargar Documentos</span>
                                    <svg className="download-arrow" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7,10 12,15 17,10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="horizontal-divider"></div>

                    <div className="product-tabs-section">
                        <div className="tabs-header">
                            <button 
                                className={`tab-button ${activeTab === 'descripcion' ? 'active' : ''}`}
                                onClick={() => setActiveTab('descripcion')}
                            >
                                Descripción
                            </button>
                            <button 
                                className={`tab-button ${activeTab === 'seguridad' ? 'active' : ''}`}
                                onClick={() => setActiveTab('seguridad')}
                            >
                                Seguridad
                            </button>
                        </div>

                        <div className="tab-content">
                            {activeTab === 'descripcion' && (
                                <div className="tab-panel">
                                    <div className="product-detail-description" dangerouslySetInnerHTML={{
                                        __html: product.longDescription
                                            .replace(/\n\n/g, '</p><p>')
                                            .replace(/\n/g, '<br>')
                                            .replace(/^(.*)$/, '<p>$1</p>')
                                            .replace(/<p>(PROPIEDADES)<\/p>/g, '<p><strong>$1</strong></p>')
                                            .replace(/<p>(APLICACIONES)<\/p>/g, '<p><strong>$1</strong></p>')
                                            .replace(/•/g, '&bull;')
                                    }} />
                                </div>
                            )}
                            
                            {activeTab === 'seguridad' && (
                                <div className="tab-panel">
                                    <div className="product-detail-description" dangerouslySetInnerHTML={{
                                        __html: product.safetyInfo
                                            ? product.safetyInfo
                                                .replace(/\n\n/g, '</p><p>')
                                                .replace(/\n/g, '<br>')
                                                .replace(/^(.*)$/, '<p>$1</p>')
                                                .replace(/<p>(TRANSPORTE Y ALMACENAMIENTO)<\/p>/g, '<p><strong>$1</strong></p>')
                                                .replace(/<p>(SEGURIDAD)<\/p>/g, '<p><strong>$1</strong></p>')
                                                .replace(/●/g, '&bull;')
                                            : '<p>Información de seguridad no disponible para este producto.</p>'
                                    }} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
};

export default ProductDetail;
