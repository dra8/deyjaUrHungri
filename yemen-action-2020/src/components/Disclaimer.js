import React, { Component } from "react";
import "../componentStyles/disclaimer.scss";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class Disclaimer extends Component {
  render() {
    return <div className="disclaimer">
      <ScrollAnimation animateIn='animate__animated animate__fadeInLeft'>
        <h3>Hugmyndalegur fyrirvari</h3>
        <p>Í dag þjáist þriðja hver manneskja, eða 2.6 milljarðar fólks á heimsvísu, af einhvers konar vannæringu [Food Aid Foundation]. Fyrir langflest þessara einstaklinga er hungur ekki val. Það er því nauðsynlegt fyrir afmarkaðan hóp Íslendinga að vera meðvitaður um eigin forréttindum, og líta tilraunir sínar með svengd, ekki sömu augum og áralanga hungursneyð jemensku þjóðarinnar, sem um þessar mundir stendur í borgarstyrjöld og tekst á við heimsfaraldur, ofan á fátækt, ofbeldi, og veikbyggt heilbrigðiskerfi.</p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__animated animate__fadeInRight">
        <h3>Heilsufarslegur fyrirvari</h3>
        <p>Þátttaka í áskoruninni er á ábyrgð einstaklinga. Hvatning til þátttöku nær vitanlega ekki til þeirra sem eiga á hættu að skaða líkamlega eða andlega heilsu sína. Þvert á móti ráðum einstaklingum frá því að taka þátt ef þá hrjá undirliggjandi sjúkdómar eða óheilbrigt samband við fæðu. Aldrei skal gera stórtækar breytingar á matarvenjum án þess að ráðfæra sig við lækni fyrst.</p>
      </ScrollAnimation>
    </div>;
  }
}
export default Disclaimer;
