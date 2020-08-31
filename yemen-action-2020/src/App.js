import React from "react";
import "./App.css";

import About from "./components/About";
import Challenge from "./components/Challenge";
import Disclaimer from "./components/Disclaimer";
import Interview from "./components/Interview";
import Menu from "./components/Menu";
import Intro from "./components/Intro";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Intro></Intro>
        <About></About>
        <Challenge></Challenge>
        <Disclaimer></Disclaimer>
        <Menu></Menu>
        <Interview></Interview>
    </div>
  );
}

export default App;
