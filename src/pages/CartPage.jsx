import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import CartItem from '../components/CartItem';
import { ShoppingCart } from 'lucide-react';

const CartPage = () => {
  const { cart, clearCart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <ShoppingCart className="mx-auto h-16 w-16 text-text-secondary" />
        <h1 className="mt-4 text-3xl font-bold font-serif text-text-primary">Your Cart is Empty</h1>
        <p className="mt-2 text-lg text-text-secondary">Looks like you haven't added any cookies yet.</p>
        <Link
          to="/"
          className="mt-6 inline-block bg-brand hover:bg-brand-dark text-text-primary font-bold py-3 px-6 rounded-full transition-colors duration-300"
        >
          Browse Cookies
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-surface p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-serif font-bold text-text-primary mb-8 border-b pb-4">Your Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-8 flex flex-col items-end">
        <div className="text-2xl font-bold mb-4">
          <span className="text-text-secondary mr-2">Subtotal:</span>
          <span className="text-text-primary">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={clearCart}
            className="bg-gray-200 hover:bg-gray-300 text-text-secondary font-bold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Clear Cart
          </button>
          <Link
            to="/checkout"
            className="bg-brand hover:bg-brand-dark text-text-primary font-bold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
