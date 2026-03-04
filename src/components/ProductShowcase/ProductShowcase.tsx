import React, { useState, useEffect } from 'react';
import { Product } from '../../types/Product';
import ProductCard from '../ProductCard/ProductCard';
import ProductModal from '../ProductModal/ProductModal';
import './ProductShowcase.scss';

const ProductShowcase: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/products.json');
        
        if (!response.ok) {
          throw new Error('Erro ao carregar os produtos');
        }
        
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  if (loading) {
    return (
      <main className="product-showcase">
        <div className="product-showcase__loading">
          <p>Carregando produtos...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="product-showcase">
        <div className="product-showcase__error">
          <p>Erro: {error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="product-showcase">
      <header className="product-showcase__header">
        <h1>Nossos Produtos</h1>
        <p>Conheça nossa seleção exclusiva de produtos</p>
      </header>
      
      <section className="product-showcase__grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={handleProductClick}
          />
        ))}
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
};

export default ProductShowcase;
