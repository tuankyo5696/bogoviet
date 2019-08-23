import React from "react"
import { NavLink } from "react-router-dom"
import { dataFooter } from "../../../data/dataFooter"
import "./FooterInfo.scss"
import img1 from "../../../assets/images/footer/map-marker-alt-solid.svg"
import img2 from "../../../assets/images/footer/phone-alt-solid.svg"
import img3 from "../../../assets/images/footer/envelope-regular.svg"
import img4 from "../../../assets/images/footer/facebook-f-brands.svg"

const FooterInfo = () => (
  <div className="col-lg-8 col-md-8 col-xs-12 col-sm-12 f-address">
    <div className="box-footer footer-address">
      <h2 className="heading">Thông tin liên hệ</h2>
      <div className="content">
        <div className="items">
          <div className="item address boder-b">
            <img src={img1} alt="icon" className="iconFooter" fill="white" />
            <span className="lbl">{dataFooter[0].title} </span>
            <span className="ctn">{dataFooter[0].content}</span>
          </div>
          <div className="item phone boder-b">
            <img src={img2} alt="icon" className="iconFooter" />
            <span className="lbl">{dataFooter[1].title}</span>
            <span className="ctn">
              <NavLink to="/">{dataFooter[1].content}</NavLink>
            </span>
          </div>
          <div className="item email boder-b">
            <img src={img3} alt="icon" className="iconFooter" />
            <span className="lbl">{dataFooter[2].title} </span>
            <span className="ctn">
              <NavLink to="/">{dataFooter[2].content}</NavLink>
            </span>
          </div>
          <div className="item">
            <img src={img4} alt="icon" className="iconFooter" />
            <a
              href="https://www.facebook.com/101677661191439/"
              className="fb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="lbl">{dataFooter[3].title}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default FooterInfo
