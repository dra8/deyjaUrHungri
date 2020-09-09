import React, { Component } from "react";
import "../componentStyles/unicef.scss";

class Unicef extends Component {
  render() {
    return (
      <div className="unicef">
        <h2>Styrktu málefnið</h2>
        <p className="aur-text">Styrktu börn í Jemen með því að aura á neyðarsjóð UNICEF fyrir Jemen, hægt er að gera það með því að borga inn á númerið 1237872332 eða notandanafnið @Jemen</p>
        <h3 className="unicef-title">Hvað gerir UNICEF í Jemen? </h3>
        <ul>
          <li>Við veitum börnum meðferð við vannæringu.</li>
          <li>Við komum börnum aftur í skóla.</li>
          <li>Við útvegum börnum heilbrigðisþjónustu.</li>
          <li> Við bólusetjum börn gegn mislingum og öðrum lífshættulegum sjúkdómum.</li>
          <li>Við veitum fólki hreint vatn og hreinlætisaðstöðu. </li>
          <li>Við veitum börnum sálrænan stuðning.</li>
          <li>Við setjum upp barnvæn svæði þar sem börn geta leikið sér og fundið fyrir öryggi. </li>
          <li>Við hjálpum börnum sem hafa verið fengin til liðs við stríðandi fylkingar að sameinast fjölskyldum sínum.</li>
        </ul>
        <h3 className="unicef-title">Nánar um aðstæðurnar í Jemen</h3>
        <p className="unicef-text">Staða barna í Jemen er skelfileg og nánast hvert einasta barn í landinu þarf á lífsnauðsynlegri hjálp að halda. Milljónir barna þjást vegna vannæringar og smitsjúkdóma á borð við kóleru og nú bætist kórónaveiran við sem enn ein ógnin við líf og heilsu barna í landinu. UNICEF hefur í fleiri ár lagt allt kapp í að veita börnum í Jemen neyðaraðstoð við gífurlega erfiðar aðstæður og í forgangi er að meðhöndla þau börn sem þjást vegna alvarlegrar bráðavannæringar. Á síðasta ári náði UNICEF að meðhöndla yfir 200 þúsund börn vegna bráðavannæringar en ljóst er að fjöldi barna í neyð verður enn meiri á þessu ári þar sem vannæring og skortur á heilsugæslu gerir börn enn varnarlausari gegn kórónaveirunni.</p>
        <p className="unicef-text">UNICEF heldur einnig áfram að þrýsta á stjórnvöld og alþjóðasamfélagið að hjálparstofnunum sé tryggður óheftur aðgangur að höfnum og flugvöllum í landinu til þess að hægt sé að koma mat, vatni, lyfjum og bólusetningum til fólks í neyð.</p>
      </div>
    );
  }
}
export default Unicef;
