import React from "react"
import { NavLink } from "react-router-dom"
import bogo1 from '../../../../assets/images/home/nhuongquyen/nhuongquyen1.jpg'
import bogo2 from '../../../../assets/images/home/nhuongquyen/nhuongquyen2.jpg'
import bogo3 from '../../../../assets/images/home/nhuongquyen/nhuongquyen3.jpg'
import './FranchiseHome.scss'

const A =[bogo1, bogo2, bogo3]
const FranchiseHome = () => {
  return (
    <>
     <div className="container contentHome">
        <h1 style={{color: '#e80524'}}>Nhượng quyền hợp tác kinh doanh Bơ Gơ Việt</h1>
        <div className="row">
          {Array(3)
            .fill(1)
            .map((block, index) => (
              <div key={index} className="coverItem col-12 col-md-12">
                <div className="item">
                  <NavLink to="/">
                    <img src={A[index]} alt="Bogo" className="imgFranchise"/>
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
