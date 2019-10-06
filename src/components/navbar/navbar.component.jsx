import React from "react";
import Select from "@material-ui/core/Select";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./navbar.css";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";

export default function Navbar({
  level,
  handleSliderChange,
  handleFormatChange
}) {
  const [format, setFormat] = React.useState("hex");
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleChange = e => {
    setFormat(e.target.value);
    handleFormatChange(e.target.value);
    setOpenSnackbar(true);
  };

  const closeSnackbar = () => {
    setOpenSnackbar(false);
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
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={openSnackbar}
        autoHideDuration={3000}
        message={<span id="message-id">Format Changed To {format.toUpperCase()}!</span>}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        onClose={closeSnackbar}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </nav>
  );
}
