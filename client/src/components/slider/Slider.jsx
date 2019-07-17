import React, { Component } from "react";
import { slider } from "./Slider.module.scss";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, interval: {} };
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  setLoop = () => {
    let interval = setInterval(this.loop, 15);
    this.setState({ interval });
  };
  sliderChange = event => {
    clearInterval(this.state.interval);
    this.setState({ value: parseInt(event.target.value) });
  };
  loop = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    } else if (this.state.value < 0) {
      this.setState({ value: this.state.value + 1 });
    } else {
      clearInterval(this.state.interval);
    }
  };
  render() {
    return (
      <input
        className={slider}
        type="range"
        min="-255"
        max="255"
        value={this.state.value}
        onChange={this.sliderChange}
        onMouseUp={this.setLoop}
        onTouchEnd={this.setLoop}
      />
    );
  }
}

export default Slider;
