import React from "react"
import { NavLink } from "react-router-dom"
import "./LinkRegister.scss"

const LinkRegister = () => (
  <>
    <div className="share-article btn-group">
      <div className="item itemLinkRe">
        <NavLink to="#" id="facebook" title="Chía sẻ lên Facebook">
          <i className="fab fa-facebook-f" />
        </NavLink>
      </div>
      <div className="item itemLinkRe">
        <NavLink to="#" id="twitter" title="Chía sẻ lên Twitter">
          <i className="fab fa-twitter" />
        </NavLink>
      </div>
      <div className="item itemLinkRe">
        <NavLink to="#" id="google" title="Chía sẻ lên Google">
          <i className="fab fa-google" />
        </NavLink>
      </div>
      <div className="item itemLinkRe">
        <NavLink to="#" id="linkedin" title="Chía sẻ lên Linked In">
          <i className="fab fa-linkedin" />
        </NavLink>
      </div>
    </div>
  </>
)

export default LinkRegister
