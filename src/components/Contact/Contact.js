import React, { Component } from "react"
import "./Contact.scss"
import PageDetails from "./PageDetails/PageDetails";
import InfoContact from './InfoContact/InfoContact'

class Contact extends Component {
  render() {
    return (
      <div style={{paddingTop:'100px'}}>
            <PageDetails />
            <InfoContact/>
      </div>
    )
  }
}

export default Contact
