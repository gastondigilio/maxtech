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
            id: 2,
            name: "HORSE HM-500",
            category: "Horse",
            type: "Anclajes químicos",
            industry: "Construcción",
            image: "/images/products/horse/HM500.png",
            description: "ANCLAJES ADHESIVOS INYECTABLES",
            longDescription: "PROPIEDADES\n• Sistema de dos componentes\n• Alta resistencia mecánica\n• Excelente adherencia al hormigón\n• Resistencia a la intemperie\n\nAPLICACIONES\n• Anclajes estructurales en hormigón\n• Fijación de elementos pesados\n• Construcción civil e industrial\n• Reparaciones estructurales",
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
            longDescription: "PROPIEDADES\n• Fibra de polipropileno virgen\n• Longitud: 50mm\n• Diámetro: 0.75mm\n• Resistencia a álcalis\n• No corrosión\n\nAPLICACIONES\n• Hormigón estructural\n• Pavimentos industriales\n• Elementos prefabricados\n• Construcción civil",
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
            longDescription: "PROPIEDADES\n• Fibra de polipropileno virgen\n• Longitud: 19mm\n• Diámetro: 0.45mm\n• Control de fisuración\n• Mejora trabajabilidad\n\nAPLICACIONES\n• Hormigón de alto rendimiento\n• Control de fisuración\n• Mejora de trabajabilidad\n• Construcción civil",
            safetyInfo: "TRANSPORTE Y ALMACENAMIENTO\n\n● Transporte: Mantenga el producto en envases cerrados, alejado de la humedad.\n● Almacenamiento: Mantener en lugar seco y ventilado. Temperatura: ambiente.\n● Vida útil: 36 meses en condiciones adecuadas de almacenamiento.\n\nSEGURIDAD\n\n● Mantener alejado de los niños.\n● Evite la inhalación del polvo durante el manejo.\n● Usar mascarilla y guantes durante la manipulación.\n● En caso de contacto con los ojos, enjuague con agua abundante y consulte a un médico."
        },
        {
            id: 6,
            name: "MAXTECH JM702",
            category: "Maxtech",
            type: "",
            industry: "Aplicadores",
            image: "/images/products/maxtech/JM702.png",
            description: "PISTOLA APLICADORA NEUMÁTICA",
            longDescription: "Diseñado para usar con tubos de tamaño estándar de 600 ml.\nFuerza máxima: 0.8 MPa\nCuerpo de aluminio para mayor resistencia.\nFácil ajuste del flujo de sellador.\nConector giratorio para manguera de aire.\nTipo salchicha para una rápida carga y extracción del cartucho.\nGatillo ergonómico para mayor comodidad durante el uso.\nExcelente para cartuchos y bolsas de sellador.\nResistente.\nTamaño: 600 ml\nEmbalaje: 6 unidades por caja\nTamaño de la caja: 54.5 x 47 x 27 cm",
            safetyInfo: "TRANSPORTE Y ALMACENAMIENTO\n\n● Transporte: Mantenga la herramienta en su estuche original, protegida de golpes.\n● Almacenamiento: Guardar en lugar seco y limpio. Lubricar según especificaciones.\n● Vida útil: 5 años con mantenimiento adecuado.\n\nSEGURIDAD\n\n● Mantener alejado de los niños.\n● Usar equipo de protección personal (guantes, gafas).\n● Verificar presión de aire antes del uso.\n● Mantener la herramienta limpia y en buen estado.\n● Leer manual de instrucciones antes del uso."
        },
        {
            id: 9,
            name: "MAXTECH JM500L",
            category: "Maxtech",
            type: "",
            industry: "Aplicadores",
            image: "/images/products/maxtech/JM500.png",
            description: "PISTOLA APLICADORA MANUAL JM500L",
            longDescription: "Diseñado para usar con tubos de tamaño estándar de 600 ml.\nRelación de empuje de 13:1\nCuerpo de aluminio y mango de aleación de zinc para mayor\nresistencia.\nVarilla rugosa.\nTipo salchicha para una rápida carga y extracción del cartucho.\nDisco de accionamiento metalúrgico para mayor resistencia.\nCortador de boquilla.\nPerforador de sellos.\nGatillo ergonómico para mayor comodidad durante el uso.\nTamaño: 600 ml\nEmbalaje: 6 piezas / caja\nTamaño de la caja: 53 x 29 x 17 cm",
            safetyInfo: "TRANSPORTE Y ALMACENAMIENTO\n\n● Transporte: Mantenga la herramienta en su estuche original, protegida de golpes.\n● Almacenamiento: Guardar en lugar seco y limpio. Limpiar después de cada uso.\n● Vida útil: 4 años con mantenimiento adecuado.\n\nSEGURIDAD\n\n● Mantener alejado de los niños.\n● Usar equipo de protección personal (guantes, gafas).\n● Mantener la herramienta limpia y en buen estado.\n● Leer manual de instrucciones antes del uso.\n● No sobrecargar la pistola."
        },
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
                                    <span className="breadcrumb-separator">&gt;</span>
                                )}
                            </div>
                        ))}
                    </nav>
                    
                    <div className="breadcrumb-divider"></div>

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
                            <div className="product-category-info">
                                <span className="product-category-badge">{product.category}</span>
                            </div>
                            
                            <h1 className="product-detail-title">{product.name}</h1>
                            <h2 className="product-description-title">{product.description}</h2>
                            <h3 className="product-description-label">DESCRIPCIÓN DEL PRODUCTO</h3>
                            <p className="product-intro-text">
                                {product.id === 2 
                                    ? "El HORSE HM-500 es un sistema de anclajes adhesivos inyectables de alta calidad diseñado para aplicaciones de construcción y fijación estructural. Este producto ofrece excelente adherencia y resistencia, proporcionando una solución confiable para anclajes químicos en hormigón, mampostería y otros materiales de construcción. Ideal para aplicaciones que requieren máxima resistencia y durabilidad a largo plazo."
                                    : product.id === 3
                                    ? "La MACROFIBRA MAXFIBER 50 es una fibra de polipropileno virgen de alta calidad diseñada para mejorar las propiedades del hormigón. Esta macrofibra proporciona refuerzo estructural, reduce la fisuración por contracción y mejora la durabilidad del hormigón en aplicaciones industriales y comerciales."
                                    : product.id === 4
                                    ? "La MICROFIBRA MAXFIBER 19 es una microfibra de polipropileno virgen que mejora significativamente las propiedades del hormigón. Proporciona control de fisuración, mejora la trabajabilidad y aumenta la resistencia a la abrasión, ideal para aplicaciones de hormigón de alto rendimiento."
                                    : product.id === 6
                                    ? "Aplicador neumático profesional para adhesivos, selladores, pastas y mastiques"
                                    : product.id === 9
                                    ? "Aplicador manual profesional para adhesivos, selladores, pastas y mastiques"
                                    : "Descripción del producto disponible en la sección de detalles."
                                }
                            </p>

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
                                Detalles
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
                                            .replace(/PROPIEDADES/g, '<strong>PROPIEDADES</strong>')
                                            .replace(/APLICACIONES/g, '<strong>APLICACIONES</strong>')
                                            .replace(/CARACTERÍSTICAS/g, '<strong>CARACTERÍSTICAS</strong>')
                                            .replace(/ESPECIFICACIONES/g, '<strong>ESPECIFICACIONES</strong>')
                                            .replace(/\n\n/g, '</p><p>')
                                            .replace(/\n/g, '<br>')
                                            .replace(/^(.*)$/, '<p>$1</p>')
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
