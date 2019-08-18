import React, { Component } from "react";
import Toolbar from "./../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "./../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
    toggleClass: ""
  };
  SideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
      toggleClass: ""
    });
  };
  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
        toggleClass: this.state.toggleClass === "change" ? "" : "change"
      };
    });
  };
  render() {
    return (
      <>
        <Toolbar
          drawerToggleClicked={this.sideDrawerToggleHandler}
          toggleClass={this.state.toggleClass}
        />
        <SideDrawer
          closed={this.SideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <main className="Content">{this.props.children}</main>
      </>
    );
  }
}


export default Layout;
