import { useState } from "react";

import { StarsRated } from "./";
import { StyledProductListItem, BuyButton } from "../assets/styles/styles";

export const ProductListItem = ({ product }) => {
  const [cartProducts, setCartProducts] = useState({ items: [] });

  const addTocart = () => {
    setCartProducts({ items: [{ ...cartProducts }, product.productName] });

    // { ...cartProducts }, { item: product.productName });

    console.log(cartProducts.items);
  };

  return (
    <StyledProductListItem>
      <div>
        <img src={product.imageUrl} />
      </div>
      <div>
        <p>{product.productName}</p>
        <StarsRated starsRate={product.stars} />
        <p>{product.listPrice ? `de ${product.listPrice}` : "  "}</p>
        <p>{`por $ ${product.price}`}</p>
        {product.installments.length > 0 ? (
          <p>
            {`ou em ${product.installments[0].quantity}x de R$ ${product.installments[0].value}`}
          </p>
        ) : null}
        <BuyButton onClick={addTocart}>COMPRAR</BuyButton>
      </div>
    </StyledProductListItem>
  );
};
