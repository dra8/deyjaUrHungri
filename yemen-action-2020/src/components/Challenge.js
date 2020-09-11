import React, { Component } from "react";
import "../componentStyles/challenge.scss";
import instastory from "../images/instastory.png";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

class Challenge extends Component {
  render() {
    return (
      <div className="challenge">
        <h2 className="challengeTitle">VIÐ SKORUM Á ÞIG</h2>
        <div className="challengeContent">
          <ScrollAnimation
            animateIn="animate__animated animate__fadeInUp"
            className="animation"
          >
            <div className="challengeImage">
              <img
                src={instastory}
                alt="instastory"
                width="200"
                height="200"
              ></img>
            </div>
          </ScrollAnimation>
          <div className="challengeText">
            <p>
              Yfirgnæfandi meirihluti Íslendinga upplifir ekki hungur í daglegu
              lífi. Samt sem áður erum við stöðugt að „deyja úr hungri“. En
              hvernig er að upplifa raunverulegt hungur, umfram almenna svengd,
              líkt og 20 milljónir Jemena gera dag hvern? Við skorum á þig að
              prófa.
            </p>
            <p>
              {" "}
              Við biðjum ungt fólk á Íslandi að sleppa máltíð eftir matseðlinum
              okkar og styrkja börn í Jemen um fjárhæðina sem henni nemur.
              Jafnframt biðjum við fólk að íhuga reynslu sína, og deila
              upplifuninni á InstaStory með myllumerkinu #deyjaúrhungri. Þannig
              vekjum við aðra til umhugsunar um efnahagsleg forréttindi sín, og
              söfnum pening fyrir jemensk börn. Hægt er að sjá matseðilinn og
              hvernig er hægt að styrkja málefnið hér að neðan.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Challenge;
