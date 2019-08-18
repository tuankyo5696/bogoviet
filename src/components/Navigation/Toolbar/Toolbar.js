import React from "react";
import "./_Toolbar.scss";
import Logo from "./../../Logo/Logo";
import DrawerToggle from "./../SideDrawer/DrawerToggle/DrawerToggle";

import {NavLink} from 'react-router-dom';
import NavigationItems from "../NavigationItems/NavigationItems";
const toolbar = props => (
  <header className="Toolbar">
    <div className="container">
      <div className="row">
        <div className="col-auto">
          <NavLink to ={`/`}>
          <div className="Logo">
            <Logo />
          </div>
          </NavLink>
        </div>
        <div className="col-auto ml-auto">
          <div className="menu-option-wrap">
            <nav className = "DesktopOnly">
            <NavigationItems />
            </nav>
            
            <DrawerToggle
              clicked={props.drawerToggleClicked}
              toggleClass={props.toggleClass}
            />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default toolbar;
