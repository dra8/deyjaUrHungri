import React, { Component } from "react";
import "../componentStyles/interview.scss";
import interview from "../images/Interview.m4a";
import firstQuote from "../images/quote-1.png";
import secondQuote from "../images/quote-2.png";

class Interview extends Component {
  render() {
    return (
      <div className="interview">
        <img src={firstQuote} alt='"' id="quote1"></img>
        <audio controls className="interview-audio">
          <source src={interview} type="audio/ogg"></source>
          <source src={interview} audio="audio/mpeg"></source>
        </audio>
        <img src={secondQuote} alt='"' id="quote2"></img>
      </div>
    );
  }
}
export default Interview;
