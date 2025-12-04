import React, { createContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_CART':
      return action.payload;
    case 'ADD_TO_CART': {
      const { product, quantity } = action.payload;
      const existingItem = state.find(item => item.id === product.id);
      if (existingItem) {
        return state.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...state, { ...product, quantity }];
    }
    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload;
      if (quantity <= 0) {
        return state.filter(item => item.id !== productId);
      }
      return state.map(item =>
        item.id === productId ? { ...item, quantity } : item
      );
    }
    case 'REMOVE_FROM_CART': {
      return state.filter(item => item.id !== action.payload.productId);
    }
    case 'CLEAR_CART': {
      return [];
    }
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    try {
      const localCart = localStorage.getItem('cart');
      if (localCart) {
        dispatch({ type: 'INITIALIZE_CART', payload: JSON.parse(localCart) });
      }
    } catch (error) {
      console.error("Could not parse cart from localStorage", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
