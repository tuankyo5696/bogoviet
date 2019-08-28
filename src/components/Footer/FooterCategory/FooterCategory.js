import React from "react"
import { NavLink } from "react-router-dom"
import "./FooterCategory.scss"

const FooterCat = () => (
  <div className="col-lg-3 col-md-3 col-xs-3 col-sm-3">
    <div className="box-footer">
      <h2 className="heading">Danh mục</h2>
      <div className="content">
        <ul className="f-menu">
          <li>
            <NavLink to="/">Nhượng quyền thương thiệu</NavLink>
          </li>
          <li>
            <NavLink to="/">Hồ sơ tuyển dụng</NavLink>
          </li>
          <li>
            <NavLink to="/">Menu thức uống</NavLink>
          </li>
          <li>
            <NavLink to="/product">Danh mục sản phẩm</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default FooterCat
