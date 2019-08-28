import React from "react"
import "./_FooterFanPage.scss"
const FooterFanPage = () => {
  return (
    <div className="col-lg-3 col-md-3 col-xs-3 col-sm-3">
      <div className="box-footer footer-address">
        <h2 className="heading">FanPage Facebook</h2>
        <div className="content">
          <div className="box-content">
            <div id="fb-root"></div>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FB%C6%A1-G%C6%A1-Viet-101677661191439%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="340"
              height="250"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              title="BoGoFanpage"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterFanPage
