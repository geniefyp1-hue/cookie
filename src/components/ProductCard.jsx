import React from 'react';
import { useCart } from '../hooks/useCart';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-surface rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
      <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-text-primary">{product.name}</h3>
        <p className="text-text-secondary mt-2 flex-grow">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-brand-dark">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="bg-brand hover:bg-brand-dark text-text-primary font-bold py-2 px-4 rounded-full transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
