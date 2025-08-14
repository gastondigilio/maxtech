import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import JM500 from '../assets/Product/JM500.JPG';
import macroFibra from '../assets/Product/macroFibra.jpg';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Base de datos de productos (la misma que en Product.jsx)
    const products = [
        {
            id: 1,
            name: "JM500 - Sellador Polisulfuro",
            category: "Maxtech",
            image: JM500,
            description: "Sellador de alto rendimiento para juntas de construcción",
            longDescription: "El JM500 es un sellador polisulfuro de alta calidad diseñado específicamente para juntas de construcción. Este producto ofrece excelente resistencia a la intemperie, flexibilidad excepcional y durabilidad a largo plazo. Ideal para sellar juntas de dilatación, conexiones de techos, muros y pisos en proyectos de construcción comercial e industrial."
        },
        {
            id: 2,
            name: "Macro Fibra - Refuerzo Estructural",
            category: "Maxtech",
            image: macroFibra,
            description: "Fibra de refuerzo para hormigón de alta resistencia",
            longDescription: "La Macro Fibra es una solución innovadora para el refuerzo estructural del hormigón. Estas fibras de alta resistencia proporcionan refuerzo secundario, reduciendo la formación de grietas y mejorando la durabilidad del hormigón. Perfecta para pavimentos, losas, muros y elementos estructurales que requieren mayor resistencia a la tracción."
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

    return (
        <>
            <Navbar variant="product" />
            <div className="product-detail-container">
                <div className="product-detail-content">
                    <button className="back-button" onClick={handleBackToProducts}>
                        ← Volver a Productos
                    </button>

                    <div className="product-detail-grid">
                        <div className="product-image-section">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-detail-image"
                            />
                        </div>

                        <div className="product-info-section">
                            <h1 className="product-detail-title">{product.name}</h1>
                            <p className="product-detail-description">{product.longDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
};

export default ProductDetail;
