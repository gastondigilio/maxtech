import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import Footer from '../Footer/Footer.jsx';


const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('descripcion');
    const [mainImage, setMainImage] = useState('');

    // Base de datos de productos (la misma que en Product.jsx)
    const products = [
        {
            id: 2,
            name: "HORSE HM-500",
            category: "Horse",
            type: "Anclajes químicos inyectables",
            industry: "Construcción",
            image: "/images/products/horse/HM500.png",
            description: "HM-500 Epoxy Resin Achoring es un adhesivo de resina epoxi modificado de dos componentes, con tubo de plástico de alta calidad, paquete de doble cartucho. Se inyecta en los orificios con la pistola dispensadora, mezclando la parte A y la parte B de manera uniforme, para plantar barras de refuerzo.",
            longDescription: "Ficha técnica\n• Viscosidad de la mezcla: 18-22Pa • S\n• División de resistencia a la tracción ≥8.5MPa\n• Resistencia a la flexión ≥50MPa\n• Resistencia a la compresión ≥60MPa\n• Índice de tixotopía ≥4.0\n• Temperatura de distorsión ≥65\n• Resistencia al cizallamiento de acero-acero ≥16MPa\n• C30, φ25, L = 150 mm condición de resistencia a la tracción ≥11MPa\n• C30, φ25, L = 125 mm. Resistencia de unión de condición ≥17MPa\n• Longitud de pelado de impacto T acero-acero ≤25mm\n\nRango de aplicación\n• Conexiones estructurales con barras de refuerzo postinstaladas (por ejemplo, extensión / conexión a paredes, losas, escaleras, columnas, cimientos, etc.)\n\n• Es posible la renovación estructural de edificios, puentes y otras estructuras civiles, reconstruyendo y reforzando miembros concretos\n\n• Anclaje de conexiones de acero estructural (por ejemplo, columnas de acero, vigas, etc.)\n\nCómo utilizar\n• Taladro\n• agujero limpio\n• agujero del cepillo\n• Inyectar adhesivo\n• planta de barras de refuerzo\n• Curado",
            safetyInfo: "Procedimientos de emergencia y primeros auxilios:\nInhalación: Lleve a la víctima al aire libre. Si no respira, administre respiración artificial, preferiblemente boca a boca. Obtenga atención médica profesional de inmediato.\nContacto con los ojos: Mantenga los párpados abiertos y enjuague con agua durante al menos 15 a 20 minutos hasta que no queden rastros de sustancias químicas. Obtenga atención médica profesional de inmediato.\nContacto con la piel: quitarse la ropa y el calzado contaminados. Lavar con abundante agua y jabón durante 15-20 minutos hasta que no queden restos de sustancias químicas. Obtener atención médica profesional de inmediato.\n\nIngestión: Este material produce irritación gastrointestinal. Diluir inmediatamente tragando agua o leche. No intentar introducir nada en la boca de una persona inconsciente. Obtener atención médica profesional de inmediato.\n\nProtección ocular: Use gafas de seguridad química durante las operaciones de mezclado/vertido u otras actividades en las que sea probable que haya contacto ocular con material no diluido. Ropa protectora: Use ropa de trabajo general.",
            documents: {
                HDT: "/documents/products/horse/hm-500/HOJA TECNICA HORSE HM500 ANCLAJE QUIMICO EPOXI.pdf",
                HDS: "/documents/products/horse/hm-500/HOJA SEGURIDAD HORSE HM500 ANCLAJE QUIMICO EPOXI.pdf"
            }
        },
        {
            id: 3,
            name: "MACROFIBRA MAXFIBER 50",
            category: "Maxtech",
            type: "Aditivos para hormigón",
            industry: "Construcción",
            image: "/images/products/maxtech/macro1.png",
            secondaryImages: [
                "/images/products/maxtech/Group 4.png",
                "/images/products/maxtech/macro2.png"
            ],
            description: "100% virgen de polipropileno para refuerzo estructural de hormigón y morteros. Incrementa la impermeabilización.",
            longDescription: "",
            safetyInfo: "",
            documents: {
                HDS: "/documents/products/maxtech/macrofiber-50/HOJA DE DATOS DE SEGURIDAD MICRO FIBRA MAXTECH.pdf"
            }
        },
        {
            id: 4,
            name: "MICROFIBRA MAXFIBER 19",
            category: "Maxtech",
            type: "Aditivos para hormigón",
            industry: "Construcción",
            image: "/images/products/maxtech/microfibra1.png",
            description: "Microfibra de polipropileno 100% virgen refuerzo anti grietas y fisuras. Incrementa la impermeabilización.",
            longDescription: "Antifisuras: Mejora la resistencia al agrietamiento de las grietas no estructurales en la fase plástica del hormigón.\nImpermeabilidad: Mejora la impermeabilidad y es un material autoimpermeable rígido eficaz.\nEl rango de dosificación es de 0,6 a 1,8 kg/m3 y la resistencia al agrietamiento y a las filtraciones del hormigón suele ser de 0,9 kg/m3.",
            safetyInfo: "",
            documents: {
                HDT: "/documents/products/maxtech/microfiber-19/HDT MICRO FIBRA DE POLIPROPILENO.pdf",
                HDS: "/documents/products/maxtech/microfiber-19/HOJA DE DATOS DE SEGURIDAD MICRO FIBRA MAXTECH.pdf"
            }
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
            safetyInfo: "",
            documents: {
                HDT: "/documents/products/maxtech/jm702/HDT JM 702 MAXTECH.pdf"
            }
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
            safetyInfo: "",
            documents: {
                HDT: "/documents/products/maxtech/jm500l/HDT JM 500 MAXTECH.pdf"
            }
        },
    ];

    // Buscar el producto por ID
    const product = products.find(p => p.id === parseInt(id));

    // Inicializar la imagen principal cuando se carga el producto
    useEffect(() => {
        if (product && !mainImage) {
            setMainImage(product.image);
        }
    }, [product, mainImage]);

    // Si no se encuentra el producto, redirigir a la página de productos
    if (!product) {
        navigate('/productos');
        return null;
    }



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
            {/* Botón de volver atrás para móvil */}
            <button 
                className="back-button-mobile"
                onClick={() => navigate(-1)}
            >
                <svg className="back-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            
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
                            <div className="image-gallery-container">
                                {product.secondaryImages && product.secondaryImages.length > 0 && (
                                    <div className="secondary-images-gallery">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className={`secondary-image ${mainImage === product.image ? 'active' : ''}`}
                                            onClick={() => setMainImage(product.image)}
                                        />
                                        {product.secondaryImages.map((image, index) => (
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`${product.name} - Imagen ${index + 1}`}
                                                className={`secondary-image ${mainImage === image ? 'active' : ''}`}
                                                onClick={() => setMainImage(image)}
                                            />
                                        ))}
                                    </div>
                                )}
                                <img
                                    src={mainImage}
                                    alt={product.name}
                                    className="product-detail-image"
                                />
                            </div>
                        </div>

                        <div className="vertical-divider"></div>

                        <div className="product-info-section">
                            <div className="product-category-info">
                                <span className="product-category-badge">{product.category}</span>
                            </div>
                            
                            <h1 className="product-detail-title">{product.name}</h1>
                            <h2 className="product-description-title">{product.type.toUpperCase()}</h2>
                            <h3 className="product-description-label">DESCRIPCIÓN DEL PRODUCTO</h3>
                            <p className="product-intro-text">
                                {product.id === 2 
                                    ? "HM-500 Epoxy Resin Achoring es un adhesivo de resina epoxi modificado de dos componentes, con tubo de plástico de alta calidad, paquete de doble cartucho. Se inyecta en los orificios con la pistola dispensadora, mezclando la parte A y la parte B de manera uniforme, para plantar barras de refuerzo."
                                    : product.id === 3
                                    ? "100% virgen de polipropileno para refuerzo estructural de hormigón y morteros. Incrementa la impermeabilización."
                                    : product.id === 4
                                    ? "Microfibra de polipropileno 100% virgen refuerzo anti grietas y fisuras. Incrementa la impermeabilización."
                                    : product.id === 6
                                    ? "Aplicador neumático profesional para adhesivos, selladores, pastas y mastiques"
                                    : product.id === 9
                                    ? "Aplicador manual profesional para adhesivos, selladores, pastas y mastiques"
                                    : "Descripción del producto disponible en la sección de detalles."
                                }
                            </p>

                            <div className="download-docs-container">
                                {product.documents?.HDT && (
                                    <button 
                                        className="download-docs-button"
                                        onClick={() => {
                                            const link = document.createElement('a');
                                            link.href = product.documents.HDT;
                                            link.download = product.documents.HDT.split('/').pop();
                                            document.body.appendChild(link);
                                            link.click();
                                            document.body.removeChild(link);
                                        }}
                                    >
                                        <span>Ficha Técnica</span>
                                    </button>
                                )}
                                {product.documents?.HDS && (
                                    <button 
                                        className="download-docs-button download-docs-button-secondary"
                                        onClick={() => {
                                            const link = document.createElement('a');
                                            link.href = product.documents.HDS;
                                            link.download = product.documents.HDS.split('/').pop();
                                            document.body.appendChild(link);
                                            link.click();
                                            document.body.removeChild(link);
                                        }}
                                    >
                                        <span>Hoja de Seguridad</span>
                                    </button>
                                )}
                            </div>
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
            
            {/* Botón de WhatsApp flotante */}
            <button
                className="whatsapp-button"
                onClick={() => window.open("https://wa.me/+5491151489606", "_blank")}
            >
                <img src="/images/ui/WhatsApp.png" alt="WhatsApp" />
            </button>
        </>
    );
};

export default ProductDetail;
