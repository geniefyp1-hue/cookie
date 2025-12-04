import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Cookie } from 'lucide-react';
import { useCart } from '../hooks/useCart';

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-surface shadow-md sticky top-0 z-10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Cookie className="h-8 w-8 text-brand" />
            <span className="text-2xl font-serif font-bold text-text-primary">Cookie Crumbs</span>
          </Link>
          <div className="flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-semibold transition-colors duration-200 ${isActive ? 'text-brand-dark' : 'text-text-secondary hover:text-brand-dark'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative flex items-center transition-colors duration-200 ${isActive ? 'text-brand-dark' : 'text-text-secondary hover:text-brand-dark'}`
              }
            >
              <ShoppingCart className="h-7 w-7" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-brand text-text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
