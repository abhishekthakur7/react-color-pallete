import React from "react";
import Navbar from "../navbar/navbar.component";
import Colorbox from "../colorbox/colorbox.component";
import "./palette.css";

export default function Palette({palette: { paletteName, colors, emoji }}) {
  const [level, setLevel] = React.useState(500);
  const [format, setFormat] = React.useState("hex");

  const handleSliderChange = level => {
    setLevel(level);
  };

  const handleFormatChange = value => {
    setFormat(value);
  };

  const colorBoxes = colors[level].map(color => (
    <Colorbox background={color[format]} name={color.name} key={color.id}/>
  ));

  return (
    <div className="palette">
      <Navbar
        level={level}
        handleSliderChange={handleSliderChange}
        handleFormatChange={handleFormatChange}
      />
      <div className="palette-colors">{colorBoxes}</div>
      <footer className="palette-footer">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </footer>
    </div>
  );
}
