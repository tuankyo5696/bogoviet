import React from "react"
import "./_Product.scss"
import Carousel from "../UI/Slider/Carousel"
import ProductServices from "./ProductServices/ProductServices"
import ProductMenu from "./ProductMenu/ProductMenu"

const Product = () => {
  return (
    <>
      <Carousel />
      <ProductMenu />
      <ProductServices />
    </>
  )
}

export default Product
