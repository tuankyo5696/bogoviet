import React from "react"
import { NavLink } from "react-router-dom"
import { dataFooter } from "../../../data/dataFooter"
import "./FooterInfo.scss"
import img1 from "../../../assets/images/footer/map-marker-alt-solid.svg"
import img2 from "../../../assets/images/footer/phone-alt-solid.svg"
import img3 from "../../../assets/images/footer/envelope-regular.svg"

const FooterInfo = () => (
  <div className="col-xl-5 col-lg-12 f-address">
    <div className="box-footer footer-address">
      <h2 className="heading heading2">Thông tin liên hệ</h2>
      <div className="content">
        <div className="items">
          <div className="item address boder-b">
            <div className="coverimgSpan">
              <img src={img1} alt="icon" className="iconFooter" fill="white" />
              <span className="lbl">{dataFooter[0].title} </span>
            </div>
            <span className="ctn">{dataFooter[0].content}</span>
          </div>
          <div className="item phone boder-b">
            <div className="coverimgSpan">
              <img src={img1} alt="icon" className="iconFooter" />
              <span className="lbl">{dataFooter[1].title}</span>
            </div>
            <span className="ctn">
              <NavLink to="/">{dataFooter[1].content}</NavLink>
            </span>
          </div>
          <div className="item email boder-b">
            <img src={img2} alt="icon" className="iconFooter" />
            <span className="lbl">{dataFooter[2].title} </span>

            <span className="ctn">
              <NavLink to="/">{dataFooter[2].content}</NavLink>
            </span>
          </div>
          <div className="item boder-b">
            <div className="coverimgSpan">
              <img src={img3} alt="icon" className="iconFooter" />
              <span className="lbl">{dataFooter[3].title}</span>
            </div>
            <span className="ctn">
              <NavLink to="/">{dataFooter[3].content}</NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default FooterInfo
