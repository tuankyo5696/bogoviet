import React from "react"
import "./_ProductNav.scss"
import { dataProductNav } from "../../../data/dataProduct"

const ProductNav = () => {
  return (
    <div className="box-siderbar box-category">
      <h2 className="heading">Danh mục sản phẩm</h2>
      <ul id="accordion">
        {dataProductNav.map((block, index) => (
          <li key={index}>
            <a href="/" className="level-1">
              <span className="name">{block.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductNav
