import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  const categories = [
    { name: 'TODAS CATEGORIAS', active: false },
    { name: 'SUPERMERCADO', active: false },
    { name: 'LIVROS', active: false },
    { name: 'MODA', active: false },
    { name: 'LANÇAMENTOS', active: false },
    { name: 'OFERTAS DO DIA', active: false },
    { name: 'ASSINATURA', active: false }
  ];

  return (
    <header className="header">
      <div className="header__top-bar">
        <div className="container">
          <div className="header__info">
            <span>Compra 100% segura</span>
            <span>Frete grátis acima de R$ 200</span>
            <span>Parcele suas compras</span>
          </div>
        </div>
      </div>
      
      <div className="header__main">
        <div className="container">
          <div className="header__content">
            <div className="header__logo">
              <img 
                src="/logo-econverse.svg" 
                alt="econverse"
                className="header__logo-img"
              />
            </div>
            
            <div className="header__search">
              <input 
                type="text" 
                placeholder="O que você está buscando?" 
                className="header__search-input"
              />
              <button className="header__search-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </div>
            
            <div className="header__actions">
              <button className="header__action" aria-label="Calendário">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </button>
              <button className="header__action" aria-label="Favoritos">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <button className="header__action" aria-label="Minha conta">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
              <button className="header__action" aria-label="Carrinho">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="header__nav">
        <div className="container">
          <ul className="header__nav-list">
            {categories.map((category, index) => (
              <li key={index} className="header__nav-item">
                <button 
                  className={`header__nav-link ${category.active ? 'header__nav-link--active' : ''}`}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
