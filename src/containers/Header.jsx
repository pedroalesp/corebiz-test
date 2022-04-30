import { StyledHeader } from "../assets/styles/styles";
import { Searchbar } from "../components";

import logo from "../assets/statics/cor-logo.svg";
import user from "../assets/statics/user-icon.png";
import cart from "../assets/statics/cart.png";

export const Header = ({ className }) => (
  <StyledHeader className={className}>
    <div className="header-wrapper">
      <div className="logo-wrapper">
        <img src={logo} alt="Corebiz Logo" />
        <small></small>
      </div>
      <Searchbar />
      <div className="user-wrapper">
        <div className="user-account">
          <img src={user} alt="User Icon" />
          <span>Mi Cuenta</span>
        </div>
        <div>
          <img src={cart} alt="Cart Icon" />
        </div>
      </div>
    </div>
  </StyledHeader>
);
