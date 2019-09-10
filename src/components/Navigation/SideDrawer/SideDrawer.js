import React from "react"
import PropTypes from "prop-types"
import NavigationItems from "./../NavigationItems/NavigationItems"
import Backdrop from "./../../UI/Backdrop/Backdrop"

import "./_SideDrawer.scss"
const sideDrawer = props => {
  
  let attachedClasses = ["SideDrawer", "Close"]
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"]
  }
  

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} >
        <nav>
          <NavigationItems clicked={props.closed}/>
        </nav>
      </div>
    </>
  )
}

sideDrawer.propTypes = {
  open: PropTypes.bool.isRequired
}

export default sideDrawer
