import React from "react"
import NavigationItem from "./NavigationItem/NavigationItem"
import "./_NavigationItems.scss"
const navigationItems = props => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" exact clicked={props.clicked} >
        Trang chủ
      </NavigationItem>
      <NavigationItem link="/product" clicked={props.clicked}>Sản phẩm</NavigationItem>
      <NavigationItem link="/franchise" clicked={props.clicked}>Hợp tác kinh doanh</NavigationItem>
      <NavigationItem link="/contact" clicked={props.clicked}>Liên Hệ</NavigationItem>
    </ul>
  )
}

export default navigationItems
