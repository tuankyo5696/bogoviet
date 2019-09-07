import React from "react"
import "./_HomeBody.scss"
import Lienhe from "./lienhehoptac/lienhe"
import ProductMenu from "./../../Product/ProductMenu/ProductMenu"
import FranchiseHome from "./FranchiseHome/FranchiseHome";
const homeBody = () => {
  return (
    <div>
      <FranchiseHome/>
      <ProductMenu />
      <Lienhe />
    </div>
  )
}

export default homeBody
