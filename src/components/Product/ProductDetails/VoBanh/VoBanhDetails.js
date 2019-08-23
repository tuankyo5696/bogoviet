import React from "react"
import { NavLink } from "react-router-dom"
import "./_VoBanhDetails.scss"
import { dataVobanh } from "./../../../../data/dataVobanh"

import VoBanh from "./../../../../assets/images/vobanh.jpg"

const A = [VoBanh]

const VoBanhDetails = () => {
  return (
    <div className="box-products article">
      <div className="content-background">
        <h1 className="title">Sản phẩm</h1>
        <div className="row">
          {dataVobanh.map((block, index) => (
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

export default VoBanhDetails
