import React, { Component } from "react";
import "../componentStyles/header.scss";
import instalogo from "../images/instalogo-white.png"
import menuitem from "../images/menu-white.png"


class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
            <img className="instalogo" src={instalogo} alt="instagram logo"></img>
        </div>
        <div>
            <img className="menuitem" src={menuitem} alt="menu item"></img>
        </div>
    </div>
    );
  }
}
export default Header;