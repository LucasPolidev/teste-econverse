import React from 'react';
import './BrandNavigation.scss';

const BrandNavigation: React.FC = () => {
  const brands = ['econverse', 'econverse', 'econverse', 'econverse', 'econverse'];

  return (
    <section className="brand-navigation">
      <div className="container">
        <h2 className="brand-navigation__title">Navegue por marcas</h2>
        <div className="brand-navigation__grid">
          {brands.map((brand, index) => (
            <button key={index} className="brand-navigation__item">
              <div className="brand-navigation__logo">
                <span>{brand}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandNavigation;
