import React from "react"
import { NavLink } from "react-router-dom"
import "./_ProductDetails.scss"
import { dataProduct } from "../../../data/dataProduct"

import VoBanh from "../../../assets/images/sanpham/vobanh.jpg"
import NhanBo from "../../../assets/images/sanpham/nhanbo.png"
import NhanGa from "../../../assets/images/sanpham/nhanga.jpg"
import NhanTom from "../../../assets/images/sanpham/nhantom.jpg"
import TuongCa from "./../../../assets/images/sanpham/tuongca.jpg"
import TuongOt from "./../../../assets/images/sanpham/tuongot.png"
import PhoMai from "./../../../assets/images/sanpham/phomai.jpg"
import Mayonnaise from "./../../../assets/images/sanpham/mayonnaise.jpg"


const A = [
  VoBanh,
  NhanBo,
  NhanGa,
  NhanTom,
  Mayonnaise,
  PhoMai,
  TuongOt,
  TuongCa
]

const ProductDetails = () => {
  return (
    <div className="box-products article">
      <div className="content-background">
        <h1 className="title">Sản phẩm</h1>
        <div className="row">
          {dataProduct.map((block, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-3 col-xs-6 borderProduct"
            >
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
