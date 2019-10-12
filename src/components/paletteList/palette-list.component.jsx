import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import MiniPalette from "../miniPalette/mini-palette.component";
import styles from "./palette-list.styles";
import logo from "../../logo.svg";

function PaletteList({ classes, palettes, history }) {
  const gotoPalette = id => {
    history.push(`/palette/${id}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <img className={classes.logo} src={logo} alt="logo" />
          <Link
            to="/palette/new"
            className={classes.newPaletteLink}
          >
            Create New Palette
          </Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map(palette => (
            <MiniPalette
              key={palette.id}
              {...palette}
              handleClick={() => gotoPalette(palette.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
