import React from "react"
import { NavLink } from "react-router-dom"
import { dataFooter } from '../../../data/dataFooter'

const FooterInfo = () => (
  <div className="col-lg-8 col-md-8 col-xs-12 col-sm-12 f-address">
    <div className="box-footer footer-address">
      <h2 className="heading">Thông tin liên hệ</h2>
      <div className="content">
        <div className="items">
          <div className="item address boder-b">
            <i className="fa fa-map-marker" />
            <span className="lbl">{dataFooter[0].title} </span>
            <span className="ctn">{dataFooter[0].content}</span>
          </div>
          <div className="item phone boder-b">
            <i className="fa fa-phone" />
            <span className="lbl">{dataFooter[1].title}</span>
            <span className="ctn">
              <NavLink to="/">{dataFooter[1].content}</NavLink>
            </span>
          </div>
          <div className="item email boder-b">
            <i className="fa fa-envelope-o" />
            <span className="lbl">{dataFooter[2].title} </span>
            <span className="ctn">
              <NavLink to="/">{dataFooter[2].content}</NavLink>
            </span>
          </div>
          <div className="item">
            <NavLink to="/" className="fb" target="_blank">
              <i className="fa fa-facebook" />
              <span>{dataFooter[3].title}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default FooterInfo
