import styled from "styled-components";

import banner from "../statics/banner.jpg";

const breakpoints = {
  phone: `(max-width: 320px)`,
  big_phone: `(max-width: 480px)`,
  tablet: `(max-width: 769px)`,
  desk: `(max-width: 1024px)`,
};

export const StyledLayout = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: 70px;

  .header-wrapper {
    display: grid;
    grid-template-columns: [first] 20% [second] 50% [thirt] 25%;
    background-color: #fff;
    height: inherit;
    width: 80%;
  }
  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80%;
    }
  }
  .user-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #7a7a7a;
    }
    img {
      width: 22px;
    }
  }
  .user-account {
    margin-right: 2em;
    cursor: pointer;
  }

  @media ${breakpoints.tablet} {
    .header-wrapper {
      width: 100%;
    }
    .logo-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
    }
    .user-account {
      display: none !important;
    }
  }

  @media ${breakpoints.big_phone} {
    .header-wrapper {
      display: flex;
    }
  }
`;

export const StyledSearchbar = styled.input`
  background-color: transparent;
  border-left: 0;
  border-top: 0;
  border-right: 0;
  border-bottom: 1.5px solid #7a7a7a;
  color: #7a7a7a;
  outline: none;
  font-size: 1em;
  height: 50px;

  @media ${breakpoints.big_phone} {
    margin-right: 30px;
  }
`;

export const StyledHero = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${banner});
  background-color: #000;
  background-position-x: right;
  background-size: contain;
  background-repeat: no-repeat;

  color: #fff;
  height: 400px;
  width: 100%;
  position: relative;

  div {
    display: flex;
    flex-direction: column;
    font-size: 1.6em;
    position: absolute;
    top: 33%;
    left: 15%;

    @media ${breakpoints.tablet} {
      top: 23%;
    }

    @media ${breakpoints.big_phone} {
      font-size: 1.2em;
      left: 10%;
    }

    h1 {
      font-weight: 900;
      margin: 0;
    }
    h3 {
      font-weight: bold;
      margin: 0 0 0.4em 0;
    }
  }

  @media ${breakpoints.tablet} {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${banner});
    background-size: cover;
  }
  @media ${breakpoints.big_phone} {
    height: 260px;
  }
`;

export const StyledCarousel = styled.section`
  padding: 2em 0;
  height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .carousel-container {
    width: 75%;
    overflow: hidden;

    @media ${breakpoints.big_phone} {
      width: 100%;
    }
  }
  h2 {
    font-weight: 900;
    margin-bottom: 0;

    @media ${breakpoints.big_phone} {
      margin-left: 1em;
    }
  }
  .border {
    background-color: #c0c0c0;
    height: 3px;
    width: 71px;

    @media ${breakpoints.big_phone} {
      margin-left: 1.7em;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media ${breakpoints.tablet} {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media ${breakpoints.tablet} {
    height: 100%;
  }

  @media ${breakpoints.big_phone} {
    padding: 0;
  }
`;

export const BuyButton = styled.button`
  background-color: #000;
  color: #fff;
  width: 125px;
  height: 32px;
  font-family: "Nunito", sans-serif;
  border-radius: 5px;
  border: none;
  margin: 10px 0 20px 0;
  visibility: hidden;
  cursor: pointer;
`;

export const StyledProductListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8em;
  cursor: pointer;
  margin-right: 2em;

  &:hover {
    background-color: #e6e8ea;
    ${BuyButton} {
      visibility: visible;
    }
  }

  div {
    &:nth-child(1) {
      display: flex;
      justify-content: center;
    }
  }

  div {
    &:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > div {
        flex-direction: row;
      }
    }
  }

  img {
    width: 100%;
    margin-bottom: 10px;
  }

  p {
    margin: 0 0 5px 0;
    text-align: center;
    color: #7a7a7a;
    &:nth-child(3) {
      text-decoration: line-through;
    }
    &:nth-child(4) {
      font-size: 1.4em;
      font-weight: 800;
      color: #000;
    }
  }
`;

export const StyledStars = styled.div`
  display: flex;

  justify-content: center;
  margin-bottom: 5px;
  img {
    width: 1em;
  }
`;

export const StyledNewsletter = styled.section`
  height: 150px;
  background-color: #f2f2f2;

  @media ${breakpoints.tablet} {
    height: auto;

    div {
      display: flex;
      flex-direction: column;
    }
  }

  @media ${breakpoints.tablet} {
    width: 100%;
    align-items: center;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: bold;
    font-family: "Lato", sans-serif;
  }

  input {
    height: 48px;
    width: 280px;
    padding-left: 15px;
    font-size: 0.9em;
    font-family: "Lato", sans-serif;
    font-weight: bold;
    margin-right: 0.5em;
    border-radius: 5px;
    border: none;

    @media ${breakpoints.tablet} {
      margin-bottom: 1em;
    }
  }

  button {
    font-family: "Lato", sans-serif;
    font-weight: bold;
    font-size: 0.9em;
    width: 140px;
    height: 50px;
    cursor: pointer;
    background-color: #000;
    color: #fff;
    border: none;

    @media ${breakpoints.tablet} {
      width: 100%;
      margin-bottom: 1em;
    }
  }

  @media ${breakpoints.big_phone} {
    padding: 0 2em;
  }
`;

export const CartContainer = styled.div`
  .cart-counter {
    background-color: #f8475f;
    color: #fff;
    padding: 1px 5px;
    border-radius: 94%;
    margin-left: 5px;
    font-size: 10px;
    display: ${(props) => (props === 0 ? "none" : "block")};
  }
`;

export const StyledFooter = styled.footer`
  width: 100%;
  height: auto;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 1em;

  p {
    font-size: 0.7em;
  }

  button {
    color: #000;
    cursor: pointer;
    background-color: #fff;
    width: 230px;
    height: 38px;
    border: none;
    border-radius: 5px;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    margin-bottom: 30px;

    @media ${breakpoints.big_phone} {
      font-size: 0.7em;
      height: 50px;
    }

    img {
      margin-right: 5px;
    }
  }
  .buttons-container {
    display: flex;
    padding-top: 30px;
    flex-direction: column;
  }
  .sponsors {
    display: flex;
    flex-direction: row;
    padding-top: 30px;
    div {
      margin-right: 20px;
    }
  }

  @media ${breakpoints.big_phone} {
    flex-direction: column;
    align-items: center;
    font-size: 1.4em;

    .sponsors {
      flex-direction: row;
      width: 100%;
      justify-content: space-around;
      div {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
    }
  }
`;
