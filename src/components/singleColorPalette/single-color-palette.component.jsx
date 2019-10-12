import React from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import ColorBox from "../colorBox/color-box.component";
import Navbar from "../navbar/navbar.component";
import PaletteFooter from "../paletteFooter/palette-footer.component";
import styles from "./single-color-palette.styles";

function SingleColorPalette({ palette, colorId, classes }) {
  const [format, setFormat] = React.useState("hex");

  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  };

  const colorShades = gatherShades(palette, colorId);

  const colorBoxes = colorShades.map(color => {
    return (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showingFullPalette={false}
      />
    );
  });

  const handleFormatChange = value => {
    setFormat(value);
  };

  return (
    <div className={classes.palette}>
      <Navbar
        showingAllColors={false}
        handleFormatChange={handleFormatChange}
      />
      <div className={classes.colors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${palette.id}`} className="back-button">
            GO Back
          </Link>
        </div>
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}

export default withStyles(styles)(SingleColorPalette);
