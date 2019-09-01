import React, { Component } from "react"
import "./Contact.scss"
import InfoContact from './InfoContact/InfoContact'

class Contact extends Component {
  render() {
    return (
      <div style={{paddingTop:'100px'}}>
           
            <InfoContact/>
      </div>
    )
  }
}

export default Contact
