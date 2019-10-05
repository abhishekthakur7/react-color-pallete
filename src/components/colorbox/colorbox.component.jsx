import React, { Component } from "react";
import "./colorbox.css";

class ColorBox extends Component {
  render() {
    const { name, color } = this.props.background;
    return (
      <div
        style={{ background: color }}
        className="colorBox"
      >
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className='copy-button'>Copy</button>
        </div>
        <span className='see-more'>MORE</span>
      </div>
    );
  }
}

export default ColorBox;
