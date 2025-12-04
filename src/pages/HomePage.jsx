import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const HomePage = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif font-bold text-text-primary">Our Freshly Baked Cookies</h1>
        <p className="text-xl text-text-secondary mt-4 max-w-2xl mx-auto">
          Handcrafted with love and the finest ingredients. Perfect for any occasion.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
