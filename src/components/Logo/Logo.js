import React from "react"
import BurgerLogo from "./../../assets/images/logo.png"
import BurgerTitle from "../../assets/images/bogoTitle.png"
import { NavLink } from "react-router-dom"
import "./_Logo.scss"

const Logo = props => (
  <NavLink to="/">
    <div className="LogoImg">
      <img src={BurgerLogo} alt="MyBurger" className="bogoLogo" />
      <img src={BurgerTitle} alt="bogoTitle" className="bogoTitle" />
    </div>
  </NavLink>
)

export default Logo
