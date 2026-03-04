import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import './CategoryNavigation.scss';

const CategoryNavigation: React.FC = () => {
  const categories = [
    {
      name: 'Tecnologia',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <rect x="6" y="6" width="4" height="8" rx="1"></rect>
          <rect x="14" y="6" width="4" height="8" rx="1"></rect>
        </svg>
      ),
      active: true
    },
    {
      name: 'Supermercado',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
          <circle cx="9" cy="10" r="1"></circle>
          <circle cx="15" cy="10" r="1"></circle>
        </svg>
      ),
      active: false
    },
    {
      name: 'Bebidas',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 2v6"></path>
          <path d="M15 2v6"></path>
          <path d="M7 8h10l-1 12H8L7 8z"></path>
          <circle cx="12" cy="14" r="2"></circle>
        </svg>
      ),
      active: false
    },
    {
      name: 'Ferramentas',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          <line x1="2" y1="12" x2="22" y2="12"></line>
        </svg>
      ),
      active: false
    },
    {
      name: 'Saúde',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          <path d="M12 8v8"></path>
          <path d="M8 12h8"></path>
        </svg>
      ),
      active: false
    },
    {
      name: 'Esportes e Fitness',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 2v4"></path>
          <path d="M12 18v4"></path>
        </svg>
      ),
      active: false
    },
    {
      name: 'Moda',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"></path>
          <path d="M9 12l2 2 4-4"></path>
          <circle cx="12" cy="16" r="1"></circle>
        </svg>
      ),
      active: false
    }
  ];

  return (
    <section className="category-navigation">
      <div className="container">
        <div className="category-navigation__grid">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.name}
              isActive={category.active}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryNavigation;
