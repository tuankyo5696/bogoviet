import React from "react"
import "./ModalContactUs.scss"
const ModalContactUs = (props) => {
  
  return (
    <div className="coverModalContact">
      <div className="coverItem1">
        <div className="iconCloseOne">
          <h2>Liên hệ với chúng tôi</h2>
          {/* <X  /> */}
          <i className="fas fa-times fa-1x" style={{ filter: "brightness(0.5)" }} onClick={props.clicked}></i>
        </div>

        <p>
          Bơ Gơ Việt sẵn sàng tư vấn hoặc báo giá miễn phí, vui lòng gọi:
          <a href="tel:0917327317" className="tel">0917.327.317</a>
        </p>
        <p>
          Hoặc điền vào form nhỏ bên dưới để gởi yêu cầu cho chúng tôi. Cảm ơn!
        </p>
      </div>

      <form className="coverFormInput">
        <input type="text" name="firstname" value="Họ và tên của bạn..." className="inputText temp"/>
        <input type="text" name="lastname" value="Số điện thoại..." className="inputText temp" />
        <input type="text" name="lastname" value="Email của bạn..." className="inputText temp" />
        <select name="cars" className="temp">
          <option value="kinhdoanh">Kinh doanh Bơ Gơ Việt</option>
          <option value="giasi">Mua Bơ Gơ giá sỉ</option>
          <option value="vieclam">Xin việc làm</option>
          <option value="gopy">Góp ý</option>
          
        </select>
        <textarea name="message" className="textarea temp" value="Vui lòng mô tả thêm thông điệp của bạn để Bơ Gơ Việt phục vụ tốt hơn!">
           
          </textarea>
        <input type="submit" value="YÊU CẦU BÁO GIÁ/ TƯ VẤN" className="btnSubmit" />
      </form>
    </div>
  )
}

export default ModalContactUs
