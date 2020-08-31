import React, { Component } from "react";
import "../componentStyles/challenge.scss";

class Challenge extends Component {
  render() {
    return <div className="challenge">
      <div className="challengeText">
        <h2>VIÐ SKORUM Á ÞIG</h2>
        <p>Yfirgnæfandi meirihluti Íslendinga upplifir ekki hungur í daglegu lífi. Samt sem áður erum við stöðugt að „deyja úr hungri“. En hvernig er að upplifa raunverulegt hungur, umfram almenna svengd, líkt og 20 milljónir Jemena gera dag hvern? Við skorum á þig að prófa!</p>
        <p> Við biðjum ungt fólk á Íslandi að sleppa máltíð, annað hvort (pulsa og kók) … (apótek) …., og styrkja börn í Jemen um fjárhæðina sem henni nemur. Jafnframt biðjum við fólk að íhuga reynslu sína, og deila upplifuninni á InstaStory  með myllumerkinu #deyjaúrhungri. Þannig vekjum við aðra til umhugsunar um efnahagsleg forréttindi sín, og söfnum pening fyrir jemensk börn.</p>
      </div>
    </div>;

  }
}
export default Challenge;
