import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./_NavigationItems.scss";
const navigationItems = props => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
      <NavigationItem link="/category">Menu</NavigationItem>
      <NavigationItem link="/about">Sản phẩm</NavigationItem>
      <NavigationItem link="/contact">Nhượng Quyền</NavigationItem>
      <NavigationItem link="/promotion">Liên Hệ</NavigationItem>
      
    </ul>
  );
};


export default navigationItems;
