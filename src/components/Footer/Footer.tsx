import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  const institutionalLinks = [
    'Sobre Nós',
    'Movimento',
    'Trabalhe conosco'
  ];

  const helpLinks = [
    'Suporte',
    'Fale Conosco',
    'Perguntas Frequentes'
  ];

  const termsLinks = [
    'Termos e Condições',
    'Política de Privacidade',
    'Troca e Devolução'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'f' },
    { name: 'Instagram', icon: 'i' },
    { name: 'LinkedIn', icon: 'in' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <div className="footer__logo">
              <img 
                src="/logo-econverse.svg" 
                alt="econverse"
                className="footer__logo-img"
              />
            </div>
            <div className="footer__social">
              {socialLinks.map((social, index) => (
                <button 
                  key={index}
                  className="footer__social-link"
                  aria-label={social.name}
                >
                  <span className="footer__social-icon">{social.icon}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h3 className="footer__column-title">Institucional</h3>
              <ul className="footer__column-list">
                {institutionalLinks.map((link, index) => (
                  <li key={index}>
                    <button className="footer__link">{link}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__column-title">Ajuda</h3>
              <ul className="footer__column-list">
                {helpLinks.map((link, index) => (
                  <li key={index}>
                    <button className="footer__link">{link}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__column-title">Termos</h3>
              <ul className="footer__column-list">
                {termsLinks.map((link, index) => (
                  <li key={index}>
                    <button className="footer__link">{link}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
