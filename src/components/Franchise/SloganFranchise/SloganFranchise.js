import React from "react"
import { NavLink } from "react-router-dom"
import "./SloganFranchise.scss"

const SloganFranchise = () => (
  <div className="description">
    <h2>KHÔNG MỚI ... NHƯNG RẤT MỚI ... </h2>
    
    {/* <p style={{ textAlign: "center" }}>
      <img alt="" src="" />
    </p>
    <p style={{ textAlign: "center" }}>
      <img alt="" src="" />
    </p>

    <p style={{ textAlign: "center" }}>
      <img alt="" height="591" src="" width="1745" />
    </p> */}

    <p>
      <span style={{ fontSize: "28px" }}>
        <u>
          <strong>
            <span style={{ color: "#FF0000" }}>ĐĂNG KÝ NHƯỢNG QUYỀN :</span>
          </strong>
        </u>
      </span>
    </p>

    <p>
      <span style={{ fontSize: "15px" }}>
        <em>
          <NavLink to="https://forms.gle/d355qVRYykco9Jn66">
            <span style={{ color: "#0000FF" }}>
              https://forms.gle/d355qVRYykco9Jn66
            </span>
          </NavLink>
        </em>
      </span>
    </p>
  </div>
)

export default SloganFranchise
