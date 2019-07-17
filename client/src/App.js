import React from "react";
import "./App.css";
import Slider from "./components/slider/Slider";

function App() {
  window.scrollTo(0, 1);
  console.log("adasdasd");
  document.body.ontouchend = e => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <div className="left-track">
        <Slider></Slider>
      </div>
      <div className="right-track">
        <Slider></Slider>
      </div>
    </div>
  );
}

export default App;
