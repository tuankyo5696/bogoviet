import React from "react"
import { NavLink } from "react-router-dom"
import "./_ProductDetails.scss"
import { dataProduct } from "../../../data/dataProduct"

import img1 from '../../../assets/images/product/img1.jpg'
import img2 from '../../../assets/images/product/img2.jpg'
import img3 from '../../../assets/images/product/img3.jpg'
import img4 from '../../../assets/images/product/img4.jpg'

import img5 from '../../../assets/images/product/img1.jpg'
import img6 from '../../../assets/images/product/img2.jpg'
import img7 from '../../../assets/images/product/img3.jpg'
import img8 from '../../../assets/images/product/img4.jpg'

const A = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
] 


const ProductDetails = () => {
  return (
    <div className="box-products article">
      <div className="content-background">
        <h1 className="title">Sản phẩm</h1>
        <div className="row">
          {dataProduct.map((block, index) => (
            <div key={index} className="col-lg-3 col-md-3 col-xs-6">
              <div className="box-block box-product">
                <figure className="list-product">
                  <NavLink className="banner-cubic-7" to="/">
                    <img alt="img" src={A[index]} className="imgProduct" />
                    
                  </NavLink>
                </figure>
                <div className="meta">
                  <h3>
                    <NavLink to="/">{block.title}</NavLink>
                  </h3>
                  <div className="price-all pull-left">
                    <span className="price">Giá {block.price} Vnđ</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div />
    </div>
  )
}

export default ProductDetails
