import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Product.css';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';


const Product = () => {
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    // Efecto para leer parámetros de la URL y activar filtros automáticamente
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const marca = searchParams.get('marca');
        
        if (marca === 'horse') {
            setSelectedBrand('Horse');
            setSelectedCategory(null);
        }
    }, [location.search]);

    const handleBrandClick = (brand) => {
        setSelectedBrand(brand);
        setSelectedCategory(null); // Resetear categoría al cambiar marca
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedBrand(null); // Resetear marca al cambiar categoría
    };

    const handleProductClick = (productId) => {
        navigate(`/productos/${productId}`);
    };

    // Productos reales de las marcas Maxtech y Horse
    const mockProducts = [
        {
            id: 1,
            name: "Maxtech JM500L",
            category: "Maxtech",
            productType: "Adhesivos",
            image: "/images/products/maxtech/JM500.png",
            description: "Pistola Aplicadora Manual JM500L"
        },
        {
            id: 2,
            name: "Maxtech JM 702",
            category: "Maxtech",
            productType: "Adhesivos",
            image: "/images/products/maxtech/JM702.png",
            description: "Pistola Aplicadora Neumática JM 702"
        },
        {
            id: 3,
            name: "Macrofibra",
            category: "Maxtech",
            productType: "Selladores",
            image: "/images/products/maxtech/macro1.png",
            description: "Macrofibra de Polipropileno Virgen"
        },
        {
            id: 4,
            name: "Microfibra",
            category: "Maxtech",
            productType: "Selladores",
            image: "/images/products/maxtech/microfibra1.png",
            description: "Microfibra de Polipropileno Virgen"
        },
        {
            id: 5,
            name: "HORSE HM-500",
            category: "Horse",
            productType: "Adhesivos",
            image: "/images/products/horse/HM500.png",
            description: "Anclajes Adhesivos Inyectables"
        }
    ];

    const filteredProducts = mockProducts.filter(product => {
        // Filtro por marca
        const brandMatch = !selectedBrand || product.category === selectedBrand;
        
        // Filtro por categoría de producto
        const categoryMatch = !selectedCategory || product.productType === selectedCategory;
        
        // Filtro por búsqueda de texto
        const searchMatch = !searchTerm || 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        return brandMatch && categoryMatch && searchMatch;
    });

    return (
        <>
                         <Navbar />
             <div className="product-container" id='productos'>
                 {/* Campo de búsqueda */}
                 <div className="search-section">
                     <div className="search-container">
                         <input
                             type="text"
                             placeholder="Buscar productos..."
                             value={searchTerm}
                             onChange={(e) => setSearchTerm(e.target.value)}
                             className="search-input"
                         />
                         {searchTerm && (
                             <button 
                                 className="clear-search-btn"
                                 onClick={() => setSearchTerm('')}
                             >
                                 ✕
                             </button>
                         )}
                         {/* Etiqueta de filtro activo */}
                         {(selectedBrand || selectedCategory) && (
                             <div className="active-filter-tag">
                                 <span className="filter-label">
                                     Filtro: {selectedBrand || selectedCategory}
                                 </span>
                                 <button 
                                     className="remove-filter-btn"
                                     onClick={() => {
                                         setSelectedBrand(null);
                                         setSelectedCategory(null);
                                     }}
                                 >
                                     ✕
                                 </button>
                             </div>
                         )}
                     </div>
                 </div>
                 <div className="product-layout">
                     {/* Filtro lateral izquierdo */}
                     <div className="brand-filters">
                         {/* Filtros por categoría de producto */}
                         <h4 className="filter-section-title">Categorías</h4>
                         <div 
                             className={`filter-item ${selectedCategory === 'Adhesivos' ? 'active' : ''}`}
                             onClick={() => handleCategoryClick('Adhesivos')}
                         >
                             <div className="filter-content">
                                 <input 
                                     type="checkbox" 
                                     checked={selectedCategory === 'Adhesivos'}
                                     readOnly
                                     className="filter-checkbox"
                                 />
                                 <span className="brand-name">Adhesivos</span>
                                 <span className="product-count">(3)</span>
                             </div>
                         </div>
                         <div 
                             className={`filter-item ${selectedCategory === 'Selladores' ? 'active' : ''}`}
                             onClick={() => handleCategoryClick('Selladores')}
                         >
                             <div className="filter-content">
                                 <input 
                                     type="checkbox" 
                                     checked={selectedCategory === 'Selladores'}
                                     readOnly
                                     className="filter-checkbox"
                                 />
                                 <span className="brand-name">Selladores</span>
                                 <span className="product-count">(2)</span>
                             </div>
                         </div>
                         <div 
                             className={`filter-item ${selectedCategory === 'Accesorios' ? 'active' : ''}`}
                             onClick={() => handleCategoryClick('Accesorios')}
                         >
                             <div className="filter-content">
                                 <input 
                                     type="checkbox" 
                                     checked={selectedCategory === 'Accesorios'}
                                     readOnly
                                     className="filter-checkbox"
                                 />
                                 <span className="brand-name">Accesorios</span>
                                 <span className="product-count">(0)</span>
                             </div>
                         </div>
                         
                         {/* Separador */}
                         <div className="filter-separator"></div>
                         
                         {/* Filtros por marca */}
                         <h4 className="filter-section-title">Marcas</h4>
                         <div 
                             className={`filter-item ${selectedBrand === 'Maxtech' ? 'active' : ''}`}
                             onClick={() => handleBrandClick('Maxtech')}
                         >
                             <div className="filter-content">
                                 <input 
                                     type="checkbox" 
                                     checked={selectedBrand === 'Maxtech'}
                                     readOnly
                                     className="filter-checkbox"
                                 />
                                 <span className="brand-name">Maxtech</span>
                                 <span className="product-count">(4)</span>
                             </div>
                         </div>
                         <div 
                             className={`filter-item ${selectedBrand === 'Horse' ? 'active' : ''}`}
                             onClick={() => handleBrandClick('Horse')}
                         >
                             <div className="filter-content">
                                 <input 
                                     type="checkbox" 
                                     checked={selectedBrand === 'Horse'}
                                     readOnly
                                     className="filter-checkbox"
                                 />
                                 <span className="brand-name">Horse</span>
                                 <span className="product-count">(1)</span>
                             </div>
                         </div>
                     </div>

                                                                    {/* Contenido principal de productos */}
                           <div className="products-main">
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
                                         <p className="product-description">{product.description}</p>
                                         {/* <span className="product-category">{product.category}</span> */}
                                         <div className="product-cta">
                                             <button className="info-button">
                                                 <span className="plus-icon">+</span>
                                                 <span className="info-text">info</span>
                                             </button>
                                         </div>
                                     </div>
                                </div>
                            ))}
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

export default Product;

