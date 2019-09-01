import React from "react"
import { NavLink } from "react-router-dom"
import Bogo from "../../../../assets/images/bogo.jpg"
import { dataProductForSale } from "../../../../data/dataProduct"
import './homeProduct.scss'

const ProductHome = () => {
  return (
    <>
      <div className="bgProduct ">
        <div className="contentProduct">
          <h2 className="productHome" style={{ paddingTop: "50px" }}>
            Sản phẩm
          </h2>
          <h4 style={{ padding: "0 20px" }}>
            Sự hoàn hảo đến từ việc chọn lọc và chăm chút cho từng nguyên liệu.
            Hãy cảm nhận một hương vị hiện đại trong dòng sản phẩm truyền thống
          </h4>
          <div className="container homeProductRow">
            <div className="row">
              {dataProductForSale.map((block, index) => (
                <div key={index} className="col-lg-6 col-12">
                  <NavLink to="/">
                    <div className="itemProduct">
                      <div className="image">
                        <img src={Bogo} alt="Bogo" />
                      </div>
                      <div className="NamePrice">
                        <h5>{block.title}</h5>
                        <p>{block.price}</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductHome
