import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import CategoryNavigation from './components/CategoryNavigation/CategoryNavigation';
import ProductCarousel from './components/ProductCarousel/ProductCarousel';
import PartnerBanner from './components/PartnerBanner/PartnerBanner';
import BrandNavigation from './components/BrandNavigation/BrandNavigation';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import ProductModal from './components/ProductModal/ProductModal';
import { Product } from './types/Product';
import './App.scss';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/products.json');
        
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
      <div className="app-loading">
        <div className="app-loading__content">
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-error">
        <div className="app-error__content">
          <p>Erro: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <main className="main">
        <HeroBanner />
        <CategoryNavigation />

        <ProductCarousel
          title="Produtos relacionados"
          products={products}
          onProductClick={handleProductClick}
        />

        {/* replicate partner row below carousel */}
        <div className="partner-row">
          <PartnerBanner />
          <PartnerBanner />
        </div>

        {/* second products carousel */}
        <ProductCarousel
          title="Produtos relacionados"
          products={products}
          onProductClick={handleProductClick}
        />

        {/* partners again after products */}
        <div className="partner-row">
          <PartnerBanner />
          <PartnerBanner />
        </div>

        <BrandNavigation />

        <ProductCarousel
          title="Produtos relacionados"
          products={products}
          onProductClick={handleProductClick}
        />

        <Newsletter />
      </main>
      
      <Footer />
      
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;
