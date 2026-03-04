import React, { useState } from 'react';
import { Product } from '../../types/Product';
import ProductCard from '../ProductCard/ProductCard';
import './ProductCarousel.scss';

interface ProductCarouselProps {
  title: string;
  products: Product[];
  onProductClick: (product: Product) => void;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, products, onProductClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('CELULAR');

  const tabs = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];

  const visibleProducts = 4;

  // Filtrar produtos por categoria
  const filteredProducts = activeTab === 'VER TODOS' 
    ? products 
    : products.filter(product => product.category.toUpperCase() === activeTab);

  const maxIndex = Math.max(0, filteredProducts.length - visibleProducts);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  return (
    <section className="product-carousel">
      <div className="container">
        <div className="product-carousel__header">
          <div className="product-carousel__title-section">
            <h2 className="product-carousel__title">{title}</h2>
          </div>
        </div>

        <div className="product-carousel__tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`product-carousel__tab ${activeTab === tab ? 'product-carousel__tab--active' : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="product-carousel__container">
          <button
            className="product-carousel__control product-carousel__control--prev"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div 
            className="product-carousel__track"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)` }}
          >
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-carousel__slide">
                <ProductCard 
                  product={product} 
                  onProductClick={onProductClick}
                />
              </div>
            ))}
          </div>

          <button
            className="product-carousel__control product-carousel__control--next"
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
