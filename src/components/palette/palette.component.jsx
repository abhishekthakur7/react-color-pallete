import React from "react";
import Navbar from "../navbar/navbar.component";
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
      <Navbar level={level} handleSliderChange={handleSliderChange} />
      <div className="palette-colors">{colorBoxes}</div>
      <div>Footer</div>
    </div>
  );
}
