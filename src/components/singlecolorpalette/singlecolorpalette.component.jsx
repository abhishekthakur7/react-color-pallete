import React from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import ColorBox from "../colorbox/colorbox.component";
import Navbar from "../navbar/navbar.component";
import PaletteFooter from "../palettefooter/palettefooter.component";

const styles = {
  palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  colors: {
    height: "90%"
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    textTransform: "uppercase",
    opacity: "1",
    backgroundColor: "black",
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%;",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      border: "none",
      textDecoration: "none",
    }
  }
};

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
