import React, { Component } from "react";
import "../componentStyles/about.scss";

class About extends Component {
  render() {
    return (
      <div className="About">
        <p className="AboutText">Í Jemen hefur geysað borgarastyrjöld síðan 2015. Samkvæmt tölum Amnesty International eru um 16 milljónir mans sem lifa við sára hungursneið í Yemen. Borgarastyrjöldinni fylgir ekki einungis hungursneið, en á þeim rúmlega fimm árum sem hún hefur geysað er talið að 230 þúsund almennir borgarar hafi látist, en 20 þúsund dauðsfallanna hafa verið staðfest af Mannréttindastofnun Sameinuðu Þjóðanna. Styrjöldinni fylgja alvarleg mannréttindabrot, sem oft geta talist alvarlegir stríðsglæpir.</p>
        <div className="Shape">
        </div>
      </div>
    );
  }
}
export default About;
