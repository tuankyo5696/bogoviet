import React from "react"
import { NavLink } from "react-router-dom"
import "./NewsFranchise.scss"

const NewsFranchise = () => (
  <>
    <NavLink to="#">
      <h2 className="title titleNews">Bài viết liên quan</h2>
    </NavLink>
    <div className="other-info">
      <ul>
        <li>
          <NavLink to="/" title="MÔ HÌNH COFFEE CART CAO CẤP - HIỆN ĐẠI">
            <i className="fa fa-check" /> MÔ HÌNH BƠ GƠ VIỆT CAO CẤP - HIỆN ĐẠI
          </NavLink>
        </li>
      </ul>
    </div>
  </>
)

export default NewsFranchise
