import React from "react"
import "./_lienhe.scss"
const lienhe = props => {
  return (
    <div>
      <div className="contact-index">
        <div className="container">
          <h2 className="header-2">
            Liên hệ để hợp tác kinh doanh
            <br />
            Bơ Gơ Việt
          </h2>
        </div>
        <a href="tel:0917327317">
          <i className="fa fa-phone phone" aria-hidden="true"></i>
          <p className="headerPhone">Gọi 0917327317</p>
        </a>
        <a href="/">
          <p className="button">Liên hệ hợp tác ngay</p>
        </a>
      </div>
    </div>
  )
}

export default lienhe
