import React from 'react';
import { Product } from '../../types/Product';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const calculateInstallment = (price: number) => {
    const installmentPrice = price / 2;
    return formatPrice(installmentPrice);
  };

  const handleBuyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Comprar produto:', product.name);
  };

  return (
    <article className="product-card" onClick={() => onProductClick(product)}>
      <div className="product-card__image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-card__image"
        />
      </div>
      <div className="product-card__content">
        <p className="product-card__description">{product.description}</p>
        <div className="product-card__price-container">
          {product.oldPrice && (
            <span className="product-card__old-price">
              {formatPrice(product.oldPrice)}
            </span>
          )}
          <p className="product-card__price">{formatPrice(product.price)}</p>
          <p className="product-card__installment">
            ou 2x de {calculateInstallment(product.price)} sem juros
          </p>
          <p className="product-card__shipping">frete grátis</p>
        </div>
        <button 
          className="product-card__buy-button"
          onClick={handleBuyClick}
        >
          COMPRAR
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
