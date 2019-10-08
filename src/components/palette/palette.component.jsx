import React from "react";
import Navbar from "../navbar/navbar.component";
import Colorbox from "../colorbox/colorbox.component";
import PaletteFooter from "../palettefooter/palettefooter.component";
import { withStyles } from "@material-ui/styles";
import "./palette.css";

const styles = {
  palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  colors: {
    height: "90%"
  },
  paletteFooter: {
    backgroundColor: "white",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold"
  },
  emoji: {
    fontSize: "1.5rem",
    margin: "0 1rem"
  }
};

function Palette({ palette: { paletteName, colors, emoji, id }, classes }) {
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
      showingFullPalette={true}
    />
  ));

  return (
    <div className={classes.palette}>
      <Navbar
        level={level}
        handleSliderChange={handleSliderChange}
        handleFormatChange={handleFormatChange}
        showingAllColors={true}
      />
      <div className={classes.colors}>{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default withStyles(styles)(Palette);
