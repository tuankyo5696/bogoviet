import React from "react"
import { NavLink } from "react-router-dom"
import './FooterCategory.scss'

const FooterCat = () => (
  <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
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
