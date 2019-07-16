import React, { Component } from "react";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  componentDidMount() {
    let interval = setInterval(this.loop, 20);
    this.setState({ interval });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  sliderChange = event => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  };
  loop = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
    // } else if (this.state.value < 0) {
    //   this.setState({ value: this.state.value + 1 });
    // }
  };
  render() {
    return (
      <input
        type="range"
        orient="vertical"
        min="-255"
        max="255"
        value={this.state.value}
        onChange={this.sliderChange}
      />
    );
  }
}

export default Slider;
