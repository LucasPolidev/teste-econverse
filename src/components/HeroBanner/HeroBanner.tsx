import React from 'react';
import './HeroBanner.scss';

const HeroBanner: React.FC = () => {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="hero-banner__content">
          <div className="hero-banner__text">
            <h2>Venha conhecer nossas promoções</h2>
            <h3>50% Off nos produtos</h3>
            <button className="hero-banner__button">Ver produto</button>
          </div>
          <div className="hero-banner__neon">
            <div className="hero-banner__neon-sign">BLACK FRIDAY</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
