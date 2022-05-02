import { StyledFooter } from "../assets/styles/styles";

import contact from "../assets/statics/contact.svg";
import support from "../assets/statics/support.svg";
import vtex from "../assets/statics/vtex.svg";
import corebizWhite from "../assets/statics/core-white.svg";

export const Footer = ({ className }) => (
  <StyledFooter className={className}>
    <div>
      <h3>Ubicación</h3>
      <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
      <p>Alphavile SP </p>
      <p>brasil@corebiz.ag </p>
      <p>+55 11 3090 1039</p>
    </div>
    <div className="buttons-container">
      <button>
        <img src={contact} alt="Contact" />
        Contáctanos
      </button>
      <button>
        <img src={support} alt="Support" />
        Habla con un consultor
      </button>
    </div>
    <div className="sponsors">
      <div>
        <p>Desarrollado por</p>
        <img src={corebizWhite} alt="Corebiz logo" />
      </div>
      <div>
        <p>Powered by</p>
        <img src={vtex} alt="Vtex logo" />
      </div>
    </div>
  </StyledFooter>
);
