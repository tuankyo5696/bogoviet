import React from "react"
import "./_ProductServices.scss"
import { dataProductServices } from "../../../data/dataProduct"

const ProductServices = () => {
  return (
    <>
      <div className="serviceProduct">
        <div className="main-width">
          <h3>DỊCH VỤ</h3>
          <p>{dataProductServices.title}</p>
          {dataProductServices.subtitle.map((block, index) => (
            <p key={index}>{block}</p>
          ))}
          <ul>
            {dataProductServices.content.map((block, index) => (
              <li key={index}>{block}</li>
            ))}
          </ul>
          {dataProductServices.tel.map((block, index) => (
            <p key={index}>{block}</p>
          ))}
          {/* <p style={{ textAlign: "center" }}>
            <img className="aligncenter size-large wp-image-346"  />
          </p> */}
        </div>
      </div>
    </>
  )
}

export default ProductServices
