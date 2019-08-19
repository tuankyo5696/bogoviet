import React, { Component } from "react"
import "./Footer.scss"
import FooterInfo from "./FooterInfo/FooterInfo"
import FooterCat from "./FooterCategory/FooterCategory"
import FooterCopy from "./FooterCopyright/FooterCopyright"

class Footer extends Component {
  render() {
    return (
      <>
        <footer id="footer">
          <div className="bg-footer">
            <div className="container">
              <div className="row">
                <FooterInfo />
                <FooterCat />
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
