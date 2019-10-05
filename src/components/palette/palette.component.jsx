import React, { Component } from "react";
import Colorbox from "../colorbox/colorbox.component";
import './palette.css';

class Palette extends Component {
  render() {
    const colorBoxes = this.props.palette.colors.map(color => (
      <Colorbox background={color} />
    ));

    return (
      <div className="palette">
        <div>
          <h2>Header</h2>
        </div>

        <div className="palette-colors">{colorBoxes}</div>

        <div>Footer</div>
      </div>
    );
  }
}

export default Palette;
