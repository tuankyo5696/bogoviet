import React from "react"
import "./_Product.scss"
import PageDetails from "./PageDetails/PageDetails"
import ProductNav from "./ProductNav/ProductNav"
import ProductDetails from "./ProductDetails/ProductDetails"
import Carousel from "../UI/Slider/Carousel"

const Product = () => {
  return (
    <>
      <div style={{paddingTop:'100px'}}>
        <Carousel />
      </div>
      <div className="page-detail">
        <PageDetails />

        <section id="columns" className="columns">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 visible-lg visible-md">
                <ProductNav />
              </div>

              <div className="col-lg-9 col-md-9">
                <ProductDetails />
              </div>
            </div>
          </div>
        </section>
        <div className="clearfix" />
      </div>
    </>
  )
}

export default Product
