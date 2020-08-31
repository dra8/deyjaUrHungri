import React from "react";
import "./App.css";

import About from "./components/About";
import Challenge from "./components/Challenge";
import Disclaimer from "./components/Disclaimer";
import Interview from "./components/Interview";
import Menu from "./components/Menu";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
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
