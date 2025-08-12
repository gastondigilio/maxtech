import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import JM500 from '../assets/Product/JM500.JPG';
import macroFibra from '../assets/Product/macroFibra.jpg';


const Product = () => {
    const [selectedCategory, setSelectedCategory] = useState('Maxtech');
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleProductClick = (productId) => {
        navigate(`/productos/${productId}`);
    };

    // Productos reales de la marca Maxtech
    const mockProducts = [
        {
            id: 1,
            name: "JM500 - Sellador Polisulfuro",
            category: "Maxtech",
            image: JM500,
            description: "Sellador de alto rendimiento para juntas de construcción"
        },
        {
            id: 2,
            name: "Macro Fibra - Refuerzo Estructural",
            category: "Maxtech",
            image: macroFibra,
            description: "Fibra de refuerzo para hormigón de alta resistencia"
        }
    ];

    const filteredProducts = mockProducts.filter(product => 
        selectedCategory === 'Todos' || product.category === selectedCategory
    );

    return (
        <>
            <Navbar variant="product" />
            <div className="product-container" id='productos'>
                <div className="product-header">
                    <h1>Productos Maxtech</h1>
                    <p>Descubre nuestra gama de productos de alta calidad para la construcción</p>
                </div>

                <div className="category-filters">
                    <button 
                        onClick={() => handleCategoryClick('Todos')}
                        className={selectedCategory === 'Todos' ? 'active' : ''}
                    >
                        Todos
                    </button>
                    <button 
                        onClick={() => handleCategoryClick('Maxtech')}
                        className={selectedCategory === 'Maxtech' ? 'active' : ''}
                    >
                        Maxtech
                    </button>
                </div>

                <div className="products-grid">
                    {filteredProducts.map((product) => (
                        <div 
                            key={product.id} 
                            className="product-card"
                            onClick={() => handleProductClick(product.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="product-image-container">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="product-image"
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">{product.name}</h3>
                                {/* <p className="product-description">{product.description}</p>
                                <span className="product-category">{product.category}</span> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Product;

