import React from "react"
import "./_Product.scss"
import Carousel from "../UI/Slider/Carousel"
import ProductHome from "../Home/homeBody/homeProduct/homeProduct";
import ProductServices from "./ProductServices/ProductServices";

const Product = () => {
  return (
    <>
      <div style={{paddingTop:'100px'}}>
        <Carousel />
      </div>
      <ProductHome />
      <ProductServices/>
    </>
  )
}

export default Product
