import React, { Component } from "react";
import "../componentStyles/menu.scss";
import curry from "../images/menu/currynaan.png";
import hamborgari from "../images/menu/hamborgari.png";
import nautasteik from "../images/menu/nautasteik.png";
import pizza from "../images/menu/pizza.png";
import pulsakok from "../images/menu/pulsakok.png";
import supa from "../images/menu/supa.png";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <h2>MATSEÐILLINN</h2>
        <div class="menu-items">
          <img src={pulsakok} alt="pulsakok"></img>
          <div class="menu-items-info">
            <p>Ein með öllu og kók</p>
            <p>730 kr</p>
            <p>Samanber 15 pakka af jarðhnetumauki</p>
          </div>
          <img src={pizza} alt="pizza"></img>
          <div class="menu-items-info">
            <p>Miðstærð af pítsu</p>
            <p>2.490 kr</p>
            <p>Samanber 50 pakka af jarðhnetumauki</p>
          </div>
        </div>
        <div class="menu-items">
          <img src={hamborgari} alt="hamborgari"></img>
          <div class="menu-items-info">
            <p>Hamborgari og bjór</p>
            <p>3.498 kr </p>
            <p>Samanber 70 pakka af jarðhnetumauki</p>
          </div>
          <img src={supa} alt="supa"></img>
          <div class="menu-items-info">
            <p>Humarsúpa og eplakaka</p>
            <p>4.980 kr</p>
            <p>Samanber 100 pakka af jarðhnetumauki</p>
          </div>
        </div>
        <div class="menu-items">
          <img src={nautasteik} alt="nautasteik"></img>
          <div class="menu-items-info">
            <p>Nautalund</p>
            <p>5.990 kr</p>
            <p>Samanber 120 pakka af jarðhnetumauki</p>
          </div>
          <img src={curry} alt="curry"></img>
          <div class="menu-items-info">
            <p>Grænmetis curry og naan brauð</p>
            <p>4.280 kr</p>
            <p>Samanber 99 pakka af jarðhnetumauki</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;
