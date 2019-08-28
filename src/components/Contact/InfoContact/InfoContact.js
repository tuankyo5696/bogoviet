import React from "react"
import "./InfoContact.scss"
import { dataContact } from "../../../data/dataContact"
import { Formik, Form } from "formik"
import * as Yup from "yup"
const InfoContact = props => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const CustomerSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Email is required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "Too short")
      .max(12, "Too long")
      .required("Phone number is required"),
    fullname: Yup.string()
      .max(50, "Too long")
      .required("First Name is required"),
    title: Yup.string()
      .max(50, "Too long")
      .required("Last Name is required"),
    content: Yup.string()
      .max(50, "Too long")
      .required("Company is required")
  })

  return (
    <section id="columns" className="columns-home">
      <div className="container">
        <article className="article">
          <div className="contacts content-background">
            <div className="row">
              <div className="col-md-12">
                <div className="maps" />
              </div>
              <div className="col-md-6">
                <h2 className="heading">Thông tin liên hệ</h2>
                <div className="contact-item">
                  <div className="box-companny">
                    <div className="content">
                      <p className="label">
                        <strong>{dataContact[0].title}</strong>{" "}
                        {dataContact[0].content}
                      </p>
                      <p className="label">
                        <strong>{dataContact[1].title}</strong>{" "}
                        {dataContact[1].content}{" "}
                      </p>
                      <p className="label">
                        <strong>{dataContact[2].title}</strong>{" "}
                        {dataContact[2].content}
                      </p>
                      <p className="label">
                        <strong>{dataContact[3].title}</strong>{" "}
                        {dataContact[3].content}
                      </p>
                      <p className="label">
                        <strong>{dataContact[4].title}</strong>{" "}
                        {dataContact[4].content}
                      </p>
                      <p className="label">
                        <strong>{dataContact[5].title}</strong>{" "}
                        {dataContact[5].content}
                      </p>
                    </div>
                  </div>
                  <div className="clearfix" />
                  <div className="description" />
                </div>
              </div>
              <div className="col-md-6">
                <Formik
                  initialValues={{
                    fullname: "",
                    email: "",
                    phone: "",
                    title: "",
                    content: ""
                  }}
                  validationSchema={CustomerSchema}
                  onSubmit={(values, props) => {
                    console.log(values)
                  }}
                >
                  {({ errors, touched, values, handleChange, handleBlur }) => (
                    <div className="form-contact">
                      <h2 className="heading">Gửi thông tin</h2>
                      <div className="clearfix" />
                      <Form>
                        {" "}
                        <div className="row">
                          <div className="text1 col-md-12 col-sm-12">
                            <span>*Họ tên:</span>
                            <input
                              className="text-box single-line"
                              name="fullname"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                          <div className="text1 col-md-12 col-xs-12">
                            <span>*Điện thoại:</span>
                            <input
                              className="text-box single-line"
                              name="phone"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                          <div className="text1 col-md-12 col-sm-12">
                            <span>*Email:</span>
                            <input
                              className="text-box single-line"
                              id="Email"
                              name="email"
                              type="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                          <div className="text1 col-md-12 col-xs-12">
                            <span>*Tiêu đề:</span>
                            <input
                              className="text-box single-line"
                              id="Subject"
                              name="title"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                          <div className="context-c1 col-md-12 col-xs-12">
                            <span>*Nội dung:</span>
                            <textarea
                              cols="20"
                              id="Body"
                              name="content"
                              rows="2"
                              value={values.content}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                        </div>
                        <div className="contact-submit">
                          <button type="submit" className="bt-submit" id="">
                            <i className="vns-genius" /> Gửi yêu cầu
                          </button>
                          <button type="button" className="bt-clear">
                            <i className="vns-refresh-2" /> Làm lại
                          </button>
                        </div>
                      </Form>{" "}
                    </div>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default InfoContact
