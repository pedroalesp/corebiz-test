import { useContext } from "react";
import { CartContext } from "../context";
import { StarsRated } from "./";
import { StyledProductListItem, BuyButton } from "../assets/styles/styles";

export const ProductListItem = ({ product }) => {
  const { addToCart, cart } = useContext(CartContext);
  const { imageUrl, productName, stars, listPrice, price, installments } =
    product;

  const handleSubmit = () => {
    addToCart(productName);
    setLocalStorage(cart);
  };

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(
        "products",
        JSON.stringify([...value, value])
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledProductListItem>
      <div>
        <img src={imageUrl} />
      </div>
      <div>
        <p>{productName}</p>
        <StarsRated starsRate={stars} />
        <p>{listPrice ? `de ${listPrice}` : "  "}</p>
        <p>{`por $ ${price}`}</p>
        {installments.length > 0 ? (
          <p>
            {`ou em ${installments[0].quantity}x de R$ ${installments[0].value}`}
          </p>
        ) : null}
        <BuyButton onClick={handleSubmit}>COMPRAR</BuyButton>
      </div>
    </StyledProductListItem>
  );
};
