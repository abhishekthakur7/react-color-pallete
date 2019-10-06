import React from "react";
import Select from "@material-ui/core/Select";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./navbar.css";
import MenuItem from "@material-ui/core/MenuItem";

export default function Navbar({
  level,
  handleSliderChange,
  handleFormatChange
}) {
  const [format, setFormat] = React.useState("hex");

  const handleChange = e => {
    setFormat(e.target.value);
    handleFormatChange(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">ReactColorPicker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={handleSliderChange}
          />
        </div>
      </div>
      <div className="select-container">
        <Select value={format} onChange={handleChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb 255,255,255</MenuItem>
          <MenuItem value="rgba">RGBA - rgba 255,255,255,1.0</MenuItem>
        </Select>
      </div>
    </nav>
  );
}
