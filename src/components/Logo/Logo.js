import React from "react";
import BurgerLogo from "./../../assets/images/logo.png";
import "./_Logo.scss";

const Logo = props => (
  <div className="LogoImg">
    <img src={BurgerLogo} alt="MyBurger" />
  </div>
);

export default Logo;
