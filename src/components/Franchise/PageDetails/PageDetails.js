import React from "react"
import { NavLink } from "react-router-dom"
import img1 from "../../../assets/images/product/chevron-right-solid.svg"
import img2 from "../../../assets/images/product/home-solid.svg"

const PageDetails = () => {
  return (
    <div className="container">
      <section id="breadcrumb">
        <ul className="breadcrumb pull-left">
          <li>
            <NavLink to="/">
              <img className="iconSVGProduct" alt="" src={img2} /> Trang chủ
            </NavLink>
          </li>
          <li className="last">
            <span>
              <img className="iconSVGProduct2" alt="" src={img1} /> Nhượng quyền
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default PageDetails
