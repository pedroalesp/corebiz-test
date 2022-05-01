import { useState, useContext } from "react";
import { CartContext } from "../context";

export const useLocalStorage = (key, initialValue) => {
  const { addToCart } = useContext(CartContext);
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
      addToCart(cartProducts);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};
