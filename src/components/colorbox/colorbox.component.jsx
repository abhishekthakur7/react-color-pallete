import React, { Component } from "react";
import './colorbox.css';

class ColorBox extends Component {
  render() {
    return (
      <div
        style={{ background: this.props.background.color }}
        className="colorBox"
      >
        <span>{this.props.background.name}</span>
        <span>MORE</span>
      </div>
    );
  }
}

export default ColorBox;
