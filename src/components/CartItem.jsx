import React from 'react';
import { useCart } from '../hooks/useCart';
import { Plus, Minus, Trash2 } from 'lucide-react';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
        <div>
          <h3 className="text-lg font-bold text-text-primary">{item.name}</h3>
          <p className="text-text-secondary">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-full">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 text-text-secondary hover:text-text-primary disabled:opacity-50" disabled={item.quantity <= 1}>
            <Minus size={16} />
          </button>
          <span className="px-3 font-bold">{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 text-text-secondary hover:text-text-primary">
            <Plus size={16} />
          </button>
        </div>
        <p className="w-20 text-right font-bold text-text-primary">${(item.price * item.quantity).toFixed(2)}</p>
        <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
