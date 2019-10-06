import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./navbar.css";

export default function Navbar({ level, handleSliderChange }) {
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
    </nav>
  );
}
