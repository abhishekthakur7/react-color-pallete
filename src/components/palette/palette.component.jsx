import React from "react";
import Navbar from "../navbar/navbar.component";
import Colorbox from "../colorbox/colorbox.component";
import "./palette.css";

export default function Palette({ palette }) {
  const [level, setLevel] = React.useState(500);
  const [format, setFormat] = React.useState("hex");

  const handleSliderChange = level => {
    setLevel(level);
  };

  const handleFormatChange = value => {
    setFormat(value);
  };

  const colorBoxes = palette.colors[level].map(color => (
    <Colorbox background={color[format]} name={color.name} />
  ));

  return (
    <div className="palette">
      <Navbar
        level={level}
        handleSliderChange={handleSliderChange}
        handleFormatChange={handleFormatChange}
      />
      <div className="palette-colors">{colorBoxes}</div>
      <div>Footer</div>
    </div>
  );
}
