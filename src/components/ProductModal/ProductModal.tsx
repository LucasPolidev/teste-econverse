import React from 'react';
import { Product } from '../../types/Product';
import './ProductModal.scss';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <button className="modal__close" onClick={onClose} aria-label="Fechar">
          ×
        </button>
        
        <div className="modal__content">
          <div className="modal__image-container">
            <img 
              src={product.image} 
              alt={product.name}
              className="modal__image"
            />
          </div>
          
          <div className="modal__info">
            <h2 className="modal__name">{product.name}</h2>
            <p className="modal__category">{product.category}</p>
            <p className="modal__price">{formatPrice(product.price)}</p>
            <p className="modal__description">{product.description}</p>
            
            {product.colors && (
              <div className="modal__colors">
                <h3>Cores disponíveis:</h3>
                <div className="modal__color-list">
                  {product.colors.map((color, index) => (
                    <span key={index} className="modal__color">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {product.sizes && (
              <div className="modal__sizes">
                <h3>Tamanhos disponíveis:</h3>
                <div className="modal__size-list">
                  {product.sizes.map((size, index) => (
                    <span key={index} className="modal__size">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <button className="modal__buy-button">
              Comprar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
