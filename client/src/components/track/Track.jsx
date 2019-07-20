import React, { Component } from "react";
import { track } from "./Track.module.scss";

class Track extends Component {
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
  trackChange = event => {
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
  componentWillUpdate(nextProps, nextState) {
    if (nextState !== this.state) {
      this.props.changed(nextState.value, nextProps.id);
    }
  }
  render() {
    return (
      <input
        className={track}
        type="range"
        min="-255"
        max="255"
        value={this.state.value}
        onChange={this.trackChange}
        onMouseUp={this.setLoop}
        onTouchEnd={this.setLoop}
      />
    );
  }
}

export default Track;
