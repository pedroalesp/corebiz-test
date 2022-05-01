import { useContext } from "react";
import { CartContext } from "../context";

import cartIcon from "../assets/statics/cart.png";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <img src={cartIcon} alt="Cart Icon" />
      {console.log(cart)}
    </div>
  );
};
