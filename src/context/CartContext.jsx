import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


const addToCart = (pizza) => {
    const existingPizzaIndex = cart.findIndex((item) => item.id === pizza.id);
    
    if (existingPizzaIndex >= 0) {

      const newCart = [...cart];
      newCart[existingPizzaIndex].count += 1;
      setCart(newCart);
    } else {

      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const increaseCount = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };


  const decreaseCount = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };


  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseCount, decreaseCount, total }}>
      {children}
    </CartContext.Provider>
  );
};