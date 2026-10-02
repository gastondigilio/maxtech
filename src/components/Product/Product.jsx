import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Product.css';
import Footer from '../Footer/Footer';
import { products, industries, brands, matchesSearch } from '../../data/products';


// Cantidades fijas por opción de filtro
const countBy = (field, value) => products.filter(product => product[field] === value).length;

// Industria a la que pertenece cada subcategoría
const subcategoryIndustry = Object.entries(industries).reduce((acc, [industry, subcategories]) => {
    subcategories.forEach(subcategory => { acc[subcategory] = industry; });
    return acc;
}, {});

const DocIcon = () => (
    <svg className="product-docs-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h5" />
    </svg>
);

// Opción de filtro: el <label> hace que todo el renglón active el checkbox una sola vez
const FilterOption = ({ label, count, checked, onChange, className = '', children }) => (
    <div className={`filter-item ${className} ${checked ? 'active' : ''}`}>
        <label className="filter-content">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="filter-checkbox"
            />
            <span className="filter-name">{label}</span>
            <span className="product-count">{count}</span>
        </label>
        {children}
    </div>
);

const Product = () => {
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const [selectedSubcategories, setSelectedSubcategories] = useState([]);
    const [expandedIndustry, setExpandedIndustry] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Leer filtros de la URL (buscador del menú y breadcrumb del detalle)
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchParam = urlParams.get('search');
        const industryParam = urlParams.get('industry');
        const subcategoryParam = urlParams.get('subcategory');
        const brandParam = urlParams.get('brand');

        if (searchParam) {
            setSearchTerm(searchParam);
        }
        if (industryParam && industries[industryParam]) {
            setSelectedIndustry(industryParam);
            setSelectedSubcategories(subcategoryParam ? [subcategoryParam] : []);
            if (subcategoryParam) {
                setExpandedIndustry(industryParam);
            }
        }
        if (brandParam && brands.includes(brandParam)) {
            setSelectedBrand(brandParam);
        }
    }, [location.search]);

    const handleBrandClick = (brand) => {
        setSelectedBrand(prev => (prev === brand ? null : brand));
    };

    const handleIndustryClick = (industry) => {
        setSelectedIndustry(prev => (prev === industry ? null : industry));
        setSelectedSubcategories([]);
    };

    const handleSubcategoryClick = (subcategory) => {
        const industry = subcategoryIndustry[subcategory];
        if (selectedIndustry !== industry) {
            // Elegir una subcategoría de otra industria cambia la industria activa
            setSelectedIndustry(industry);
            setSelectedSubcategories([subcategory]);
            return;
        }
        setSelectedSubcategories(prev =>
            prev.includes(subcategory)
                ? prev.filter(item => item !== subcategory)
                : [...prev, subcategory]
        );
    };

    const toggleIndustryExpansion = (industry) => {
        setExpandedIndustry(prev => (prev === industry ? null : industry));
    };

    const clearAllFilters = () => {
        setSelectedIndustry(null);
        setSelectedSubcategories([]);
        setSelectedBrand(null);
        setSearchTerm('');
    };

    const handleProductClick = (product) => {
        if (product.externalUrl) {
            window.open(product.externalUrl, '_blank', 'noopener');
        } else {
            navigate(`/productos/${product.id}`);
        }
    };

    const filteredProducts = products.filter(product => {
        const brandMatch = !selectedBrand || product.category === selectedBrand;

        let industryMatch = true;
        if (selectedSubcategories.length > 0) {
            industryMatch = selectedSubcategories.includes(product.type);
        } else if (selectedIndustry) {
            industryMatch = product.industry === selectedIndustry;
        }

        return brandMatch && industryMatch && matchesSearch(product, searchTerm);
    });

    const renderFilters = () => (
        <>
            <div className="filter-section">
                <h4 className="filter-section-title">Industria</h4>
                <div className="industry-filters">
                    {Object.entries(industries).map(([industry, subcategories]) => {
                        // Solo se muestran subcategorías que tienen productos
                        const availableSubcategories = subcategories.filter(sub => countBy('type', sub) > 0);
                        const isExpanded = expandedIndustry === industry;
                        return (
                            <div key={industry} className="industry-item">
                                <FilterOption
                                    label={industry}
                                    count={countBy('industry', industry)}
                                    checked={selectedIndustry === industry}
                                    onChange={() => handleIndustryClick(industry)}
                                    className="industry-main"
                                >
                                    {availableSubcategories.length > 0 && (
                                        <button
                                            type="button"
                                            className={`expand-btn ${isExpanded ? 'expanded' : ''}`}
                                            onClick={() => toggleIndustryExpansion(industry)}
                                            aria-label={`${isExpanded ? 'Ocultar' : 'Ver'} subcategorías de ${industry}`}
                                            aria-expanded={isExpanded}
                                        >
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </button>
                                    )}
                                </FilterOption>

                                {isExpanded && (
                                    <div className="subcategories-dropdown">
                                        {availableSubcategories.map((subcategory) => (
                                            <FilterOption
                                                key={subcategory}
                                                label={subcategory}
                                                count={countBy('type', subcategory)}
                                                checked={selectedSubcategories.includes(subcategory)}
                                                onChange={() => handleSubcategoryClick(subcategory)}
                                                className="subcategory-item"
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="filter-section">
                <h4 className="filter-section-title">Marca</h4>
                <div className="brand-filters">
                    {brands.map(brand => (
                        <FilterOption
                            key={brand}
                            label={brand}
                            count={countBy('category', brand)}
                            checked={selectedBrand === brand}
                            onChange={() => handleBrandClick(brand)}
                        />
                    ))}
                </div>
            </div>
        </>
    );

    const hasActiveFilters = selectedIndustry || selectedBrand || searchTerm;

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
                                    aria-label="Quitar filtro de industria"
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
                                    aria-label="Quitar filtro de marca"
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
                                    aria-label="Quitar búsqueda"
                                    onClick={() => setSearchTerm('')}
                                >
                                    ✕
                                </button>
                            </div>
                        )}
                        {hasActiveFilters && (
                            <button className="clear-all-link" onClick={clearAllFilters}>
                                Limpiar todo
                            </button>
                        )}
                    </div>
                </div>
                <div className="product-layout">
                    {/* Ícono de filtros para móvil */}
                    <div className="mobile-filters-icon">
                        <button
                            className="filters-icon-btn"
                            onClick={() => setShowFilters(true)}
                        >
                            <svg className="filters-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 4H21L15 12V19L9 21V12L3 4Z" stroke="#0082c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="filters-text">Filtros</span>
                        </button>
                    </div>

                    {/* Filtros laterales izquierdos */}
                    <div className="filters-sidebar">
                        {renderFilters()}
                    </div>

                    {/* Contenido principal de productos */}
                    <div className="products-main">
                        <p className="results-count">
                            {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
                        </p>
                        <div className="products-grid">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <article
                                        key={product.id}
                                        className="product-card"
                                        onClick={() => handleProductClick(product)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') handleProductClick(product);
                                        }}
                                        role="link"
                                        tabIndex={0}
                                    >
                                        <div className="product-image-container">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="product-image"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="product-info">
                                            <div className="product-meta">
                                                <span className="product-brand">{product.category}</span>
                                                <span className="product-type">{product.type || product.industry}</span>
                                            </div>
                                            <h3 className="product-title">{product.name}</h3>
                                            <p className="product-description">{product.description}</p>

                                            {product.specs?.length > 0 && (
                                                <ul className="product-specs">
                                                    {product.specs.map(spec => (
                                                        <li key={spec} className="product-spec">{spec}</li>
                                                    ))}
                                                </ul>
                                            )}

                                            <div className="product-card-footer">
                                                {product.externalUrl ? (
                                                    <span className="product-docs">Ficha en sitio de {product.category}</span>
                                                ) : (
                                                    <span className="product-docs">
                                                        {(product.documents?.HDT || product.documents?.HDS) && <DocIcon />}
                                                        {[
                                                            product.documents?.HDT && 'Ficha técnica',
                                                            product.documents?.HDS && 'Hoja de seguridad'
                                                        ].filter(Boolean).join(' · ')}
                                                    </span>
                                                )}
                                                <span className="product-card-arrow" aria-hidden="true">
                                                    {product.externalUrl ? '↗' : '→'}
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                ))
                            ) : (
                                <div className="no-products-message">
                                    <p>No se encontraron productos con los filtros seleccionados.</p>
                                    <button
                                        className="clear-filters-btn"
                                        onClick={clearAllFilters}
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

            {/* Modal de filtros móviles */}
            {showFilters && (
                <div className="filters-modal-overlay" onClick={() => setShowFilters(false)}>
                    <div className="filters-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="filters-modal-header">
                            <h3>Filtros</h3>
                            <button
                                className="filters-modal-close"
                                aria-label="Cerrar filtros"
                                onClick={() => setShowFilters(false)}
                            >
                                ✕
                            </button>
                        </div>

                        <div className="filters-modal-content">
                            {renderFilters()}
                        </div>

                        <div className="filters-modal-footer">
                            <button
                                className="clear-filters-btn"
                                onClick={clearAllFilters}
                            >
                                Limpiar filtros
                            </button>
                            <button
                                className="apply-filters-btn"
                                onClick={() => setShowFilters(false)}
                            >
                                Ver {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

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
