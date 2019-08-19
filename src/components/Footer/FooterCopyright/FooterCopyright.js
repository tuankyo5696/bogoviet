import React from "react"
import { NavLink } from "react-router-dom"
import "./FooterCopyright.scss"

const FooterCopy = () => (
  <div className="copy-right">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-xs-12 ctn">
          <span> © Copyright {new Date().getFullYear()}</span>
          <span>Designed by</span> <NavLink to="/">Anh Tuấn</NavLink>
        </div>
      </div>
    </div>
  </div>
)

export default FooterCopy
