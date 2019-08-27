import React from "react"
import Bogo from "./../../../assets/images/bogo.jpg"
import "./_HomeBody.scss"
import { NavLink } from "react-router-dom"
import Lienhe from "./lienhehoptac/lienhe"
const homeBody = () => {
  return (
    <div>
      <div className="container contentHome">
        <h1>Nhượng quyền Bơ Gơ Việt</h1>
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="item">
              <NavLink to="/">
                <img src={Bogo} alt="Bogo" />
                <h5>Đất Sài Gòn Chào đón Bơ Gơ Việt</h5>
                <p>Dạo này đất sài gòn ....</p>
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="item">
              <NavLink to="/">
                <img src={Bogo} alt="Bogo" />
                <h5>Đất Sài Gòn Chào đón Bơ Gơ Việt</h5>
                <p>Dạo này đất sài gòn ....</p>
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="item">
              <NavLink to="/">
                <img src={Bogo} alt="Bogo" />
                <h5>Đất Sài Gòn Chào đón Bơ Gơ Việt</h5>
                <p>Dạo này đất sài gòn ....</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="bgProduct">
        <div className="contentProduct">
          <h2 className="productHome">Sản phẩm</h2>
          <h4>
            Sự hoàn hảo đến từ việc chọn lọc và chăm chút cho từng nguyên liệu.
            Hãy cảm nhận một hương vị hiện đại trong dòng sản phẩm truyền thống
          </h4>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <NavLink to="/">
                  <div className="itemProduct">
                    <div className="image">
                      <img src={Bogo} alt="Bogo" />
                    </div>
                    <div className="NamePrice">
                      <h5>Hamburger Bò Phomai</h5>
                      <p>23.000 đ</p>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-lg-6 col-12">
                <div className="item2">
                  <NavLink to="/">
                    <div className="itemProduct">
                      <div className="image">
                        <img src={Bogo} alt="Bogo" />
                      </div>
                      <div className="NamePrice">
                        <h5>Hamburger Bò Trứng Phomai</h5>
                        <p>28.000 đ</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="item2">
                  <NavLink to="/">
                    <div className="itemProduct">
                      <div className="image">
                        <img src={Bogo} alt="Bogo" />
                      </div>
                      <div className="NamePrice">
                        <h5>Hamburger Gà</h5>
                        <p>18.000 đ</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="item2">
                  <NavLink to="/">
                    <div className="itemProduct">
                      <div className="image">
                        <img src={Bogo} alt="Bogo" />
                      </div>
                      <div className="NamePrice">
                        <h5>Hamburger Tôm</h5>
                        <p>28.000 đ</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Lienhe />
    </div>
  )
}

export default homeBody
