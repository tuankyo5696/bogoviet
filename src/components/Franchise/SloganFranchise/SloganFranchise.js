import React from "react"
import { NavLink } from "react-router-dom"
import "./SloganFranchise.scss"

const SloganFranchise = () => (
  <div className="description" style={{paddingTop:'50px'}}>
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
