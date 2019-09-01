import React from "react"
import "./_Franchise.scss"
import Carousel from "../UI/Slider/Carousel"
import FranchiseBody from "./FranchiseBody/FranchiseBody";

const Franchise = () => {
  return (
    <>
      <div style={{ paddingTop: "100px" }}>
        <Carousel />
        <FranchiseBody/>
      </div>
    </>
  )
}

export default Franchise
