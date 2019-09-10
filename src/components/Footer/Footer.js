import React, { Component } from "react"
import "./Footer.scss"
import FooterInfo from "./FooterInfo/FooterInfo"
import FooterCopy from "./FooterCopyright/FooterCopyright"
import FooterFanPage from "./FooterFanPage/FooterFanPage"
import RingingPhone from "./RingingPhone/RingingPhone"

class Footer extends Component {
  render() {
    return (
      <>
        <footer id="footer">
          <div className="bg-footer">
            <div className="container">
              <div className="row">
                <FooterInfo />
                <FooterFanPage />
                <RingingPhone />
              </div>
            </div>
          </div>
        </footer>
        <FooterCopy />
      </>
    )
  }
}

export default Footer
