import React from 'react';
import './PartnerBanner.scss';

const PartnerBanner: React.FC = () => {
  return (
    <section className="partner-banner">
      <div className="container">
        <div className="partner-banner__content">
          <div className="partner-banner__text">
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button className="partner-banner__button">CONFIRA</button>
          </div>
          <div className="partner-banner__image" />
        </div>
      </div>
    </section>
  );
};

export default PartnerBanner;
