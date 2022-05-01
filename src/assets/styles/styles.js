import styled from "styled-components";

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
`;

export const StyledHero = styled.section`
  background-color: #000;
  color: #fff;
  height: 430px;
  width: 100%;
  position: relative;

  div {
    display: flex;
    flex-direction: column;
    font-size: 1.6em;
    position: absolute;
    top: 33%;
    left: 15%;

    h1 {
      font-weight: 900;
      margin: 0;
    }
    h3 {
      font-weight: bold;
      margin: 0 0 0.4em 0;
    }
  }
`;

export const StyledCarousel = styled.section`
  padding: 2em 0;
  height: 430px;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const BuyButton = styled.button`
  background-color: #000;
  color: #fff;
  width: 125px;
  height: 32px;
  border-radius: 5px;
  border: none;
  margin: 10px 0 20px 0;
  display: none;
  cursor: pointer;
`;

export const StyledProductListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8em;
  cursor: pointer;

  &:hover {
    background-color: #e6e8ea;
    ${BuyButton} {
      display: block;
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
