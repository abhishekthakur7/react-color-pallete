import React from "react";
import Navbar from "../navbar/navbar.component";
import Colorbox from "../colorbox/colorbox.component";
import PaletteFooter from "../palettefooter/palettefooter.component";
import "./palette.css";

export default function Palette({
  palette: { paletteName, colors, emoji, id }
}) {
  const [level, setLevel] = React.useState(500);
  const [format, setFormat] = React.useState("hex");

  const handleSliderChange = level => {
    setLevel(level);
  };

  const handleFormatChange = value => {
    setFormat(value);
  };

  const colorBoxes = colors[level].map(color => (
    <Colorbox
      background={color[format]}
      name={color.name}
      key={color.id}
      moreUrl={`/palette/${id}/${color.id}`}
      showLink={true}
    />
  ));

  return (
    <div className="palette">
      <Navbar
        level={level}
        handleSliderChange={handleSliderChange}
        handleFormatChange={handleFormatChange}
        showingAllColors={true}
      />
      <div className="palette-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}
