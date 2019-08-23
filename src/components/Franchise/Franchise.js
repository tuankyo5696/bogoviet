import React from "react"
import "./_Franchise.scss"
import Carousel from "../UI/Slider/Carousel"
import PageDetails from "../Franchise/PageDetails/PageDetails";
import FranchiseBody from "./FranchiseBody/FranchiseBody";

const Franchise = () => {
  return (
    <>
      <div style={{ paddingTop: "100px" }}>
        <Carousel />
        <PageDetails/>
        <FranchiseBody/>
      </div>
    </>
  )
}

export default Franchise
