import React, { Component } from "react";
import "../componentStyles/intro.scss";

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="introText">
          {/* TODO: Spurning með titilinn */}
          {/* <h1>Deyja úr hungri</h1>
          <h2>Börn í Jemen þurfa þína hjálp</h2> */}
          <h1>ERT ÞÚ AÐ</h1>
          <h1>DEYJA ÚR HUNGRI?</h1>
        </div>
        <div className="darken"></div>
        <div className="triangle"></div>
      </div>
    );
  }
}
export default Intro;
