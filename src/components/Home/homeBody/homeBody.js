import React from "react"
import Bogo from "./../../../assets/images/bogo.jpg"
import "./_HomeBody.scss"
import { NavLink } from "react-router-dom"
import Lienhe from "./lienhehoptac/lienhe"
import ProductHome from "./homeProduct/homeProduct"
const homeBody = () => {
  return (
    <div>
      <div className="container contentHome">
        <h1>Nhượng quyền Bơ Gơ Việt</h1>
        <div className="row">
          {Array(3)
            .fill(1)
            .map((block, index) => (
              <div key={index} className="col-12 col-lg-4">
                <div className="item">
                  <NavLink to="/">
                    <img src={Bogo} alt="Bogo" />
                  </NavLink>
                </div>
              </div>
            ))}
        </div>
      </div>
      <ProductHome />
      <Lienhe />
    </div>
  )
}

export default homeBody
