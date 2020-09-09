import React, { Component } from "react";
import "../componentStyles/header.scss";
import instalogo from "../images/instalogo-white.png";
import menuitem from "../images/menu-white.png";
import jquery from "jquery";

jquery(document).ready(function () {
  jquery(window).scroll(function () {
    if (jquery(document).scrollTop() > 0) {
      jquery(".header").addClass("background-color-navbar");
    } else {
      jquery(".header").removeClass("background-color-navbar");
    }
  });
});

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="#About">Ástandið í Yemen</a>
        <a href="#Challenge">Áskorunin</a>
        <a href="#Menu">Matseðill</a>
        <a href="#Unicef">Styrktu málefnið</a>
        <a href="#Interview">Viðtalið</a>
        <a href="#AboutUs">Um Okkur</a>
        <a href="https://www.instagram.com/deyjaurhungri/" target="_blank">
          <img className="instalogo" src={instalogo} alt="instagram logo"></img>
        </a>

        {/* <div>
          <img className="menuitem" src={menuitem} alt="menu item"></img>
        </div> */}
      </div>
    );
  }
}
export default Header;
