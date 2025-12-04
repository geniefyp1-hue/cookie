import React from 'react';
import { useCart } from '../hooks/useCart';
import { useNavigate, Navigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would process payment here
    console.log("Placing order...");
    clearCart();
    navigate('/success');
  };

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Order Summary */}
      <div className="bg-brand-light p-8 rounded-lg">
        <h2 className="text-3xl font-serif font-bold text-text-primary mb-6">Order Summary</h2>
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center text-text-primary">
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-text-secondary">Quantity: {item.quantity}</p>
              </div>
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-brand-dark/20 mt-6 pt-4">
          <div className="flex justify-between font-bold text-xl text-text-primary">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Checkout Form */}
      <div className="bg-surface p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-serif font-bold text-text-primary mb-6">Shipping & Payment</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">Full Name</label>
              <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email Address</label>
              <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand" />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-text-secondary mb-1">Shipping Address</label>
              <textarea id="address" name="address" rows="3" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand"></textarea>
            </div>
             <div>
              <label htmlFor="card" className="block text-sm font-medium text-text-secondary mb-1">Card Details</label>
              <div className="p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-500">
                Mock credit card field
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 w-full bg-brand hover:bg-brand-dark text-text-primary font-bold py-3 px-4 rounded-full transition-colors duration-300"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
