import React, { useState } from 'react';
import './Newsletter.scss';

const Newsletter: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', formData);
    // Lógica de inscrição aqui
    setFormData({ name: '', email: '' });
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__content">
          <h2 className="newsletter__title">Inscreva-se na nossa newsletter</h2>
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <div className="newsletter__fields">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Digite seu nome"
                className="newsletter__input"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu e-mail"
                className="newsletter__input"
                required
              />
            </div>
            <button type="submit" className="newsletter__button">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
