import React from 'react'
import "./_lienhe.scss"
import BtnLienHe from './btnLienHe/btnLienHe'
const lienhe = props => {
  
  return (
    <>
      <div className="contact-index">
        <div className="container">
          <h2 className="header-2">
            Liên hệ để hợp tác kinh doanh
            <br />
            Bơ Gơ Việt
          </h2>
        </div>
        <a href="tel:0386868381">
          <i className="fa fa-phone phone" aria-hidden="true"></i>
          <p className="headerPhone">Gọi 038 68 68 381</p>
        </a>
        <div><BtnLienHe/></div>
      </div>
    </>
  )
}

export default lienhe
