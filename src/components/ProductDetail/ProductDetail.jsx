import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import Footer from '../Footer/Footer.jsx';
import { products } from '../../data/products';


const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('descripcion');
    const [mainImage, setMainImage] = useState('');

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
                                {product.intro || product.description}
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
                                            .replace(/LIMITACIONES/g, '<strong>LIMITACIONES</strong>')
                                            .replace(/RECOMENDACIONES DE USO/g, '<strong>RECOMENDACIONES DE USO</strong>')
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
