import React from "react"
import NavigationItem from "./NavigationItem/NavigationItem"
import "./_NavigationItems.scss"
const navigationItems = props => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" exact>
        Trang chủ
      </NavigationItem>
      <NavigationItem link="/product">Sản phẩm</NavigationItem>
      <NavigationItem link="/franchise">Hợp tác kinh doanh</NavigationItem>
      <NavigationItem link="/contact">Liên Hệ</NavigationItem>
    </ul>
  )
}

export default navigationItems
