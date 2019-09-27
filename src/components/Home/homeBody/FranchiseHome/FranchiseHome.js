import React from "react"
import { NavLink } from "react-router-dom"
import "./FranchiseHome.scss"

const A = [
  "https://i.ibb.co/0DwKdsb/nhuongquyen1.jpg",
  "https://i.ibb.co/QkWFg6M/nhuongquyen2.jpg",
  "https://i.ibb.co/DrgdvQC/nhuongquyen3.jpg"
]
const FranchiseHome = () => {
  return (
    <>
      <div className="container contentHome">
        <h1 style={{ color: "#e80524" }}>
          Nhượng quyền hợp tác kinh doanh Bơ Gơ Việt
        </h1>
        <div className="row">
          {Array(3)
            .fill(1)
            .map((block, index) => (
              <div key={index} className="coverItem col-12 col-md-12">
                <div className="item">
                  <NavLink to="/">
                    <img src={A[index]} alt="Bogo" className="imgFranchise" />
                  </NavLink>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default FranchiseHome
