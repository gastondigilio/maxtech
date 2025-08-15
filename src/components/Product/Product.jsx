import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import Footer from '../Footer/Footer';


const Product = () => {
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleBrandClick = (brand) => {
        setSelectedBrand(brand);
    };

    const handleTypeClick = (type) => {
        setSelectedType(type);
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
            type: "Adhesivos",
            image: "/images/products/maxtech/JM500.png",
            description: "Pistola Aplicadora Manual JM500L"
        },
        {
            id: 2,
            name: "Maxtech JM 702",
            category: "Maxtech",
            type: "Adhesivos",
            image: "/images/products/maxtech/JM702.png",
            description: "Pistola Aplicadora Neumática JM 702"
        },
        {
            id: 3,
            name: "Macrofibra",
            category: "Maxtech",
            type: "Selladores",
            image: "/images/products/maxtech/macro1.png",
            description: "Macrofibra de Polipropileno Virgen"
        },
        {
            id: 4,
            name: "Microfibra",
            category: "Maxtech",
            type: "Selladores",
            image: "/images/products/maxtech/microfibra1.png",
            description: "Microfibra de Polipropileno Virgen"
        },
        {
            id: 5,
            name: "HORSE HM-500",
            category: "Horse",
            type: "Adhesivos",
            image: "/images/products/horse/HM500.png",
            description: "Anclajes Adhesivos Inyectables"
        }
    ];

    const filteredProducts = mockProducts.filter(product => {
        // Filtro por marca
        const brandMatch = !selectedBrand || product.category === selectedBrand;
        
        // Filtro por tipo
        const typeMatch = !selectedType || product.type === selectedType;
        
        // Filtro por búsqueda de texto
        const searchMatch = !searchTerm || 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        return brandMatch && typeMatch && searchMatch;
    });

    return (
        <>
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
                         {/* Etiquetas de filtros activos */}
                         {selectedType && (
                             <div className="active-filter-tag">
                                 <span className="filter-label">Tipo: {selectedType}</span>
                                 <button 
                                     className="remove-filter-btn"
                                     onClick={() => setSelectedType(null)}
                                 >
                                     ✕
                                 </button>
                             </div>
                         )}
                         {selectedBrand && (
                             <div className="active-filter-tag">
                                 <span className="filter-label">Marca: {selectedBrand}</span>
                                 <button 
                                     className="remove-filter-btn"
                                     onClick={() => setSelectedBrand(null)}
                                 >
                                     ✕
                                 </button>
                             </div>
                         )}
                         

                     </div>
                 </div>
                 <div className="product-layout">
                     {/* Filtros laterales izquierdos */}
                     <div className="filters-sidebar">
                         {/* Filtros por tipo */}
                         <div className="filter-section">
                             <h4 className="filter-section-title">Tipo de Producto</h4>
                             <div className="type-filters">
                                 <div 
                                     className={`filter-item ${selectedType === 'Adhesivos' ? 'active' : ''}`}
                                     onClick={() => handleTypeClick('Adhesivos')}
                                 >
                                     <div className="filter-content">
                                         <input 
                                             type="checkbox" 
                                             checked={selectedType === 'Adhesivos'}
                                             onChange={() => handleTypeClick('Adhesivos')}
                                             className="filter-checkbox"
                                         />
                                         <span className="filter-name">Adhesivos</span>
                                         <span className="product-count">(3)</span>
                                     </div>
                                 </div>
                                 <div 
                                     className={`filter-item ${selectedType === 'Selladores' ? 'active' : ''}`}
                                     onClick={() => handleTypeClick('Selladores')}
                                 >
                                     <div className="filter-content">
                                         <input 
                                             type="checkbox" 
                                             checked={selectedType === 'Selladores'}
                                             onChange={() => handleTypeClick('Selladores')}
                                             className="filter-checkbox"
                                         />
                                         <span className="filter-name">Selladores</span>
                                         <span className="product-count">(2)</span>
                                     </div>
                                 </div>
                                 <div 
                                     className={`filter-item ${selectedType === 'Accesorios' ? 'active' : ''}`}
                                     onClick={() => handleTypeClick('Accesorios')}
                                 >
                                     <div className="filter-content">
                                         <input 
                                             type="checkbox" 
                                             checked={selectedType === 'Accesorios'}
                                             onChange={() => handleTypeClick('Accesorios')}
                                             className="filter-checkbox"
                                         />
                                         <span className="filter-name">Accesorios</span>
                                         <span className="product-count">(0)</span>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         
                         {/* Filtros por marca */}
                         <div className="filter-section">
                             <h4 className="filter-section-title">Marca</h4>
                             <div className="brand-filters">
                                 <div 
                                     className={`filter-item ${selectedBrand === 'Maxtech' ? 'active' : ''}`}
                                     onClick={() => handleBrandClick('Maxtech')}
                                 >
                                     <div className="filter-content">
                                         <input 
                                             type="checkbox" 
                                             checked={selectedBrand === 'Maxtech'}
                                             onChange={() => handleBrandClick('Maxtech')}
                                             className="filter-checkbox"
                                         />
                                         <span className="filter-name">Maxtech</span>
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
                                             onChange={() => handleBrandClick('Horse')}
                                             className="filter-checkbox"
                                         />
                                         <span className="filter-name">Horse</span>
                                         <span className="product-count">(1)</span>
                                     </div>
                                 </div>
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
            
            {/* Footer */}
            <div id="contact">
                <Footer />
            </div>
            
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

