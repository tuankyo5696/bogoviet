import React from "react"
import "./ModalContactUs.scss"
const ModalContactUs = props => {
  return (
    <div className="coverModalContact">
      <div className="coverItem1">
        <div className="iconCloseOne">
          <h2>Liên hệ với chúng tôi</h2>
          <i
            className="fas fa-times fa-1x"
            style={{ filter: "brightness(0.5)" }}
            onClick={props.clicked}
          ></i>
        </div>

        <p>
          Bơ Gơ Việt sẵn sàng tư vấn hoặc báo giá miễn phí, vui lòng gọi:
          <a href="tel:0386868381" className="tel">
            038 68 68 381
          </a>
        </p>
        <p>
          Hoặc điền vào form nhỏ bên dưới để gởi yêu cầu cho chúng tôi. Cảm ơn!
        </p>
      </div>

      <form className="coverFormInput">
        <input
          type="text"
          name="firstname"
          defaultValue="Họ và tên của bạn..."
          className="inputText temp"
        />
        <input
          type="text"
          name="lastname"
          defaultValue="Số điện thoại..."
          className="inputText temp"
        />
        <input
          type="text"
          name="lastname"
          defaultValue="Email của bạn..."
          className="inputText temp"
        />
        <select name="cars" className="temp">
          <option defaultValue="kinhdoanh">Kinh doanh Bơ Gơ Việt</option>
          <option defaultValue="giasi">Mua Bơ Gơ giá sỉ</option>
          <option defaultValue="vieclam">Xin việc làm</option>
          <option defaultValue="gopy">Góp ý</option>
        </select>
        <textarea
          name="message"
          className="textarea temp"
          defaultValue="Vui lòng mô tả thêm thông điệp của bạn để Bơ Gơ Việt phục vụ tốt hơn!"
        ></textarea>
        <input
          type="submit"
          defaultValue="YÊU CẦU BÁO GIÁ/ TƯ VẤN"
          className="btnSubmit"
        />
      </form>
    </div>
  )
}

export default ModalContactUs
