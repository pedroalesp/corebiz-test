import { createContext, useState } from "react";

export const CartContext = createContext();

export const Cartprovider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (value) => {
    setCart([...cart, value]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        // addToStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
