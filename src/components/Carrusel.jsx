import { useState, useEffect } from "react";

import { StyledCarrusel } from "../assets/styles/styles";

export const Carrusel = () => {
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
    <StyledCarrusel>
      <h2>Más vendidos</h2>
      <div>
        <ul>
          {products.map((product) => {
            return <li>holaa soy un producto</li>;
          })}
          <li></li>
        </ul>
      </div>
    </StyledCarrusel>
  );
};
