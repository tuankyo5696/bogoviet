import React from "react"
import "./_HomeBody.scss"
import Lienhe from "./lienhehoptac/lienhe"
import ProductHome from "./homeProduct/homeProduct"
import FranchiseHome from "./FranchiseHome/FranchiseHome";
const homeBody = () => {
  return (
    <div>
      <FranchiseHome/>
      <ProductHome />
      <Lienhe />
    </div>
  )
}

export default homeBody
