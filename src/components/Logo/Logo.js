import React from "react";
import BurgerLogo from "./../../assets/images/logo.png";
import "./_Logo.scss";

const Logo = props => (
  <div className="LogoImg">
    <img src={BurgerLogo} alt="MyPizza" />
  </div>
);

export default Logo;
