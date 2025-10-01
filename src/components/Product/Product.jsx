import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Product.css';
import Footer from '../Footer/Footer';


const Product = () => {
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const [selectedSubcategories, setSelectedSubcategories] = useState([]);
    const [expandedIndustry, setExpandedIndustry] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    // Leer parámetro de búsqueda de la URL
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchParam = urlParams.get('search');
        if (searchParam) {
            setSearchTerm(searchParam);
        }
    }, [location.search]);

    // Estructura de industrias con sus subcategorías
    const industries = {
        'Construcción': ['Anclajes químicos', 'Aditivos para hormigón', 'Adhesivos y selladores'],
        'Aberturas': ['Fabricación DVH', 'Instalación silicona neutra', 'Instalación', 'Insumos'],
        'Aplicadores': []
    };

    const handleBrandClick = (brand) => {
        setSelectedBrand(brand);
    };

    const handleIndustryClick = (industry) => {
        if (selectedIndustry === industry) {
            setSelectedIndustry(null);
            setSelectedSubcategories([]);
        } else {
            setSelectedIndustry(industry);
            setSelectedSubcategories([]);
        }
    };

    const handleSubcategoryClick = (subcategory) => {
        setSelectedSubcategories(prev => {
            if (prev.includes(subcategory)) {
                // Si ya está seleccionada, la removemos
                return prev.filter(item => item !== subcategory);
            } else {
                // Si no está seleccionada, la agregamos
                return [...prev, subcategory];
            }
        });
    };

    const toggleIndustryExpansion = (industry) => {
        if (expandedIndustry === industry) {
            setExpandedIndustry(null);
        } else {
            setExpandedIndustry(industry);
        }
    };

    const handleProductClick = (productId) => {
        const product = mockProducts.find(p => p.id === productId);
        if (product && product.externalUrl) {
            window.open(product.externalUrl, '_blank');
        } else {
            navigate(`/productos/${productId}`);
        }
    };

    // Función para contar productos por industria
    const getIndustryProductCount = (industry) => {
        return mockProducts.filter(product => product.industry === industry).length;
    };

    // Función para contar productos por subcategoría
    const getSubcategoryProductCount = (subcategory) => {
        return mockProducts.filter(product => product.type === subcategory).length;
    };

    // Productos reales de las marcas Maxtech y Horse
    const mockProducts = [
        {
            id: 2,
            name: "HORSE HM-500",
            category: "Horse",
            type: "Anclajes químicos",
            industry: "Construcción",
            image: "/images/products/horse/HM500.png",
            description: "Anclajes adhesivos inyectables"
        },
        {
            id: 3,
            name: "MACROFIBRA MAXFIBER 50",
            category: "Maxtech",
            type: "Aditivos para hormigón",
            industry: "Construcción",
            image: "/images/products/maxtech/macro1.png",
            description: "Macrofibra de polipropileno virgen"
        },
        {
            id: 4,
            name: "MICROFIBRA MAXFIBER 19",
            category: "Maxtech",
            type: "Aditivos para hormigón",
            industry: "Construcción",
            image: "/images/products/maxtech/microfibra1.png",
            description: "Microfibra de polipropileno virgen"
        },
        {
            id: 6,
            name: "MAXTECH JM702",
            category: "Maxtech",
            type: "",
            industry: "Aplicadores",
            image: "/images/products/maxtech/JM702.png",
            description: "Pistola aplicadora neumática"
        },
        {
            id: 9,
            name: "MAXTECH JM500L",
            category: "Maxtech",
            type: "",
            industry: "Aplicadores",
            image: "/images/products/maxtech/JM500.png",
            description: "Pistola aplicadora manual"
        },
        {
            id: 11,
            name: "SILANDE MF910H",
            category: "Silande",
            type: "Fabricación DVH",
            industry: "Aberturas",
            image: "/images/products/silande/MF910H.png",
            description: "Sellador de butilo 2da barrera",
            externalUrl: "https://silandeargentina.com/productos/2"
        },
        {
            id: 12,
            name: "SILANDE MF910G",
            category: "Silande",
            type: "Fabricación DVH",
            industry: "Aberturas",
            image: "/images/products/silande/MF910G.png",
            description: "Sellador de butilo 1ra barrera",
            externalUrl: "https://silandeargentina.com/productos/3"
        },
        {
            id: 13,
            name: "SILANDE MF910",
            category: "Silande",
            type: "Fabricación DVH",
            industry: "Aberturas",
            image: "/images/products/silande/MF910.png",
            description: "Sellador de butilo 1ra barrera",
            externalUrl: "https://silandeargentina.com/productos/4"
        },
        {
            id: 14,
            name: "SILANDE MF899",
            category: "Silande",
            type: "Instalación",
            industry: "Aberturas",
            image: "/images/products/silande/MF899.png",
            description: "Sellador de silicona estructural",
            externalUrl: "https://silandeargentina.com/productos/8"
        },
        {
            id: 15,
            name: "SILANDE MF889",
            category: "Silande",
            type: "Instalación",
            industry: "Aberturas",
            image: "/images/products/silande/MF889.png",
            description: "Sellador de silicona climático",
            externalUrl: "https://silandeargentina.com/productos/15"
        },
    ];

    const filteredProducts = mockProducts.filter(product => {
        // Filtro por marca
        const brandMatch = !selectedBrand || product.category === selectedBrand;
        
        // Filtro por industria (general o subcategoría específica)
        let industryMatch = true;
        if (selectedIndustry) {
            if (selectedSubcategories.length > 0) {
                // Si hay subcategorías seleccionadas, filtrar por cualquiera de ellas
                industryMatch = selectedSubcategories.includes(product.type);
            } else {
                // Si solo hay industria seleccionada, filtrar por cualquier subcategoría de esa industria
                industryMatch = product.industry === selectedIndustry;
            }
        }
        
        // Filtro por búsqueda de texto
        const searchMatch = !searchTerm || 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        return brandMatch && industryMatch && searchMatch;
    });

    return (
        <>
             <div className="product-container" id='productos'>
                 {/* Etiquetas de filtros activos */}
                 <div className="search-section">
                     <div className="search-container">
                         {selectedIndustry && (
                             <div className="active-filter-tag">
                                 <span className="filter-label">
                                     Industria: {selectedIndustry}
                                     {selectedSubcategories.length > 0 && ` > ${selectedSubcategories.join(', ')}`}
                                 </span>
                                 <button 
                                     className="remove-filter-btn"
                                     onClick={() => {
                                         setSelectedIndustry(null);
                                         setSelectedSubcategories([]);
                                     }}
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
                         {searchTerm && (
                             <div className="active-filter-tag">
                                 <span className="filter-label">Búsqueda: {searchTerm}</span>
                                 <button 
                                     className="remove-filter-btn"
                                     onClick={() => setSearchTerm('')}
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
                         {/* Filtros por industria */}
                         <div className="filter-section">
                             <h4 className="filter-section-title">Industria</h4>
                             <div className="industry-filters">
                                 {Object.entries(industries).map(([industry, subcategories]) => (
                                     <div key={industry} className="industry-item">
                                         {/* Botón principal de la industria */}
                                         <div 
                                             className={`filter-item industry-main ${selectedIndustry === industry ? 'active' : ''}`}
                                             onClick={() => handleIndustryClick(industry)}
                                         >
                                             <div className="filter-content">
                                                 <input 
                                                     type="checkbox" 
                                                     checked={selectedIndustry === industry}
                                                     onChange={() => handleIndustryClick(industry)}
                                                     className="filter-checkbox"
                                                 />
                                                 <span className="filter-name">{industry}</span>
                                                 <span className="product-count">({getIndustryProductCount(industry)})</span>
                                                 {subcategories.length > 0 && (
                                                     <button 
                                                         className={`expand-btn ${expandedIndustry === industry ? 'expanded' : ''}`}
                                                         onClick={(e) => {
                                                             e.stopPropagation();
                                                             toggleIndustryExpansion(industry);
                                                         }}
                                                     >
                                                         ▼
                                                     </button>
                                                 )}
                                             </div>
                                         </div>
                                         
                                         {/* Dropdown de subcategorías */}
                                         {expandedIndustry === industry && (
                                             <div className="subcategories-dropdown">
                                                 {subcategories.map((subcategory) => (
                                                     <div 
                                                         key={subcategory}
                                                         className={`filter-item subcategory-item ${selectedSubcategories.includes(subcategory) ? 'active' : ''}`}
                                                         onClick={() => handleSubcategoryClick(subcategory)}
                                                     >
                                                         <div className="filter-content">
                                                             <input 
                                                                 type="checkbox" 
                                                                 checked={selectedSubcategories.includes(subcategory)}
                                                                 onChange={() => handleSubcategoryClick(subcategory)}
                                                                 className="filter-checkbox"
                                                             />
                                                             <span className="filter-name">{subcategory}</span>
                                                             <span className="product-count">({getSubcategoryProductCount(subcategory)})</span>
                                                         </div>
                                                     </div>
                                                 ))}
                                             </div>
                                         )}
                                     </div>
                                 ))}
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
                                         <span className="product-count">(7)</span>
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
                                 <div 
                                     className={`filter-item ${selectedBrand === 'Maxsil' ? 'active' : ''}`}
                                     onClick={() => handleBrandClick('Maxsil')}
                                 >
                                     <div className="filter-content">
                                         <input 
                                             type="checkbox" 
                                             checked={selectedBrand === 'Maxsil'}
                                             onChange={() => handleBrandClick('Maxsil')}
                                             className="filter-checkbox"
                                         />
                                         <span className="filter-name">Maxsil</span>
                                         <span className="product-count">(1)</span>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>

                                                                    {/* Contenido principal de productos */}
                           <div className="products-main">
                               <div className="products-grid">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
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

                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-products-message">
                                    <p>No se encontraron productos con los filtros seleccionados.</p>
                                    <button 
                                        className="clear-filters-btn"
                                        onClick={() => {
                                            setSelectedIndustry(null);
                                            setSelectedSubcategories([]);
                                            setSelectedBrand(null);
                                        }}
                                    >
                                        Limpiar filtros
                                    </button>
                                </div>
                            )}
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

