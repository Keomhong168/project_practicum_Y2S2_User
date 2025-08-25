import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleQuantityChange = (id, amount) => {
    setCartItems(currentItems => {
      const itemInCart = currentItems.find(item => item.id === id);
      if (itemInCart.quantity === 1 && amount === -1) {
        return currentItems.filter(item => item.id !== id);
      }
      return currentItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item
      );
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // New function to update a specific item's remark
  const updateItemRemark = (id, remark) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, remark: remark } : item
      )
    );
  };

  const value = {
    cartItems,
    addItemToCart,
    handleQuantityChange,
    updateItemRemark,
    totalItems,
    totalPrice,
    clearCart
  };
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};