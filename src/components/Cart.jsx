import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context";
import { CartContainer } from "../assets/styles/styles";
import cartIcon from "../assets/statics/cart.png";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  const [storedProducts, setStoredProducts] = useState(cart);

  useEffect(() => {
    const items = JSON.parse(window.localStorage.getItem("products"));
    items ? setStoredProducts(items) : setStoredProducts(cart);
  }, [cart]);

  return (
    <CartContainer className="className" length={storedProducts.length}>
      <img src={cartIcon} alt="Cart Icon" />
      <p className="cart-counter">{`${storedProducts.length}`}</p>
    </CartContainer>
  );
};
