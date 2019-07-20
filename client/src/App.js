import React, { Component } from "react";
import "./App.css";
import Track from "./components/track/Track";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    window.scrollTo(0, 1);
    console.log("adasdasd");
    document.body.ontouchend = e => {
      e.preventDefault();
    };
  }
  componentWillMount() {
    this.client = new WebSocket(
      "ws://" + window.location.host + window.location.pathname
    );
    console.log(this.client);
    this.client.onmessage = message => {
      console.log(message);
    };
  }
  changed = (value, track) => {
    this.client.send(JSON.stringify({ track, value }));
  };
  render() {
    return (
      <div className="App">
        <div className="left-track">
          <Track changed={this.changed} id={"left"} />
        </div>
        <div className="right-track">
          <Track changed={this.changed} id={"right"} />
        </div>
      </div>
    );
  }
}

export default App;
