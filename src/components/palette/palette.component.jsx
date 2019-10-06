import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Colorbox from "../colorbox/colorbox.component";
import "./palette.css";

export default function Palette({ palette }) {
  const [level, setLevel] = React.useState(500);

  const handleSliderChange = level => {
    setLevel(level);
  };

  const colorBoxes = palette.colors[level].map(color => (
    <Colorbox background={color.hex} name={color.name} />
  ));

  return (
    <div className="palette">
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={handleSliderChange}
        />
      </div>
      <div>
        <h2>Header</h2>
      </div>

      <div className="palette-colors">{colorBoxes}</div>

      <div>Footer</div>
    </div>
  );
}
