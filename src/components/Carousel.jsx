import { useState, useEffect } from "react";

import { StyledCarousel } from "../assets/styles/styles";
import { ProductListItem } from "./";

export const Carousel = ({ className }) => {
  const [products, setProducts] = useState([]);
  const BASE_URL = "https://corebiz-test.herokuapp.com/api/v1/products";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  };

  return (
    <StyledCarousel className={className}>
      <div className="carousel-container">
        <h2>Más vendidos</h2>
        <div className="border"> </div>
        <ul>
          {products.map((product) => {
            return (
              <ProductListItem key={product.productId} product={product} />
            );
          })}
        </ul>
      </div>
    </StyledCarousel>
  );
};
