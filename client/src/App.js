import React from "react";
import "./App.css";
import Track from "./components/track/Track";

function App() {
  window.scrollTo(0, 1);
  console.log("adasdasd");
  document.body.ontouchend = e => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <div className="left-track">
        <Track></Track>
      </div>
      <div className="right-track">
        <Track></Track>
      </div>
    </div>
  );
}

export default App;
