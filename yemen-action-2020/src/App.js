import React from "react";
import "./App.css";

import About from "./components/About";
import Challenge from "./components/Challenge";
import Disclaimer from "./components/Disclaimer";
import Interview from "./components/Interview";
import Menu from "./components/Menu";
import Intro from "./components/Intro";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import DonateLinks from "./components/DonateLinks";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <section id="Intro">
        <Intro></Intro>
      </section>

      <section id="About">
        <About></About>
      </section>

      <section id="Challenge">
        <Challenge></Challenge>
      </section>

      <section id="Disclaimer">
        <Disclaimer></Disclaimer>
      </section>

      <section id="Menu">
        <Menu></Menu>
      </section>

      <section id="Interview">
        <Interview></Interview>
      </section>

      <section id="AboutUs">
        <AboutUs></AboutUs>
      </section>

      <section id="DonateLinks">
        <DonateLinks></DonateLinks>
      </section>
    </div>
  );
}

export default App;
