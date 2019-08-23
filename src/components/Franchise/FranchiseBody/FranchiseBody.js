import React from "react"
import { NavLink } from "react-router-dom"
import "./_FranchiseBody.scss"

const FranchiseBody = () => {
  return (
    <>
      <article className="article" itemscope="">
        <h1 className="title-detail">
          <NavLink to="/">HỢP TÁC ĐẦU TƯ BƠ GƠ VIỆT</NavLink>
        </h1>
        <div className="description">
          <h2>CƠ HỘI MỞ LỐI KINH DOANH </h2>
          <p style={{ textAlign: "center" }}>
            <img alt="" src="" />
          </p>
          <p style={{ textAlign: "center" }}>
            <img alt="" src="" />
          </p>

          <p style={{ textAlign: "center" }}>
            <img alt="" height="591" src="" width="1745" />
          </p>

          <p>&nbsp;</p>

          <p>
            <span style={{ fontSize: "28px" }}>
              <span style={{ fontFamily: "verdana,geneva,sans-serif" }}>
                <u>
                  <strong>
                    <span style={{ color: "#FF0000" }}>
                      ĐĂNG KÝ NHƯỢNG QUYỀN :
                    </span>
                  </strong>
                </u>
              </span>
            </span>
          </p>

          <p>
            <span style={{ fontSize: "28px" }}>
              <em>
                <a href="https://forms.gle/d355qVRYykco9Jn66">
                  <span style={{ color: "#0000FF" }}>
                    https://forms.gle/d355qVRYykco9Jn66
                  </span>
                </a>
              </em>
            </span>
          </p>
        </div>

        <div className="share-article btn-group">
          <div className="item">
            <NavLink to="#" id="facebook" title="Chía sẻ lên Facebook">
              <i className="fab fa-facebook-f" /> <span>Facebook</span>
            </NavLink>
          </div>
          <div className="item">
            <NavLink to="#" id="twitter" title="Chía sẻ lên Twitter">
              <i className="fa fa-twitter" /> <span>Twitter</span>
            </NavLink>
          </div>
          <div className="item">
            <NavLink to="#" id="google" title="Chía sẻ lên Google">
              <i className="fa fa-google" /> <span>Google</span>
            </NavLink>
          </div>
          <div className="item">
            <NavLink to="#" id="linkedin" title="Chía sẻ lên Linked In">
              <i className="fa fa-linkedin" /> <span>Linkedin</span>
            </NavLink>
          </div>
        </div>
        <div className="clearfix" />
        <h2 className="title">
          <NavLink to="#">Bài viết liên quan</NavLink>
        </h2>
        <div className="other-info">
          <ul>
            <li>
              <h4>
                <NavLink to="/" title="MÔ HÌNH COFFEE CART CAO CẤP - HIỆN ĐẠI">
                  <i className="fa fa-check" /> MÔ HÌNH BƠ GƠ VIỆT CAO CẤP -
                  HIỆN ĐẠI
                </NavLink>
              </h4>
            </li>
          </ul>
        </div>
      </article>
    </>
  )
}

export default FranchiseBody
