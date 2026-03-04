import React from 'react';
import './CategoryCard.scss';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, isActive = false, onClick }) => {
  return (
    <button 
      className={`category-card ${isActive ? 'category-card--active' : ''}`}
      onClick={onClick}
    >
      <div className="category-card__icon">
        {icon}
      </div>
      <div className="category-card__title">
        {title}
      </div>
    </button>
  );
};

export default CategoryCard;
