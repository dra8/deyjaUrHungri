import React, { Component } from "react";
import "../componentStyles/donateLinks.scss";

class DonateLinks extends Component {
  render() {
    return (
      <div className="donate-links">
        <h2 class="component-title">Links to donate</h2>
        <div>
          <a href="https://www.savethechildren.org/us/what-we-do/where-we-work/greater-middle-east-eurasia/yemen">
            Save the Children
          </a>
        </div>
      </div>
    );
  }
}
export default DonateLinks;
