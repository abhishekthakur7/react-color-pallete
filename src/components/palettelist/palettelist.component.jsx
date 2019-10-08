import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import MiniPalette from "../minipalette/minipalette.component";
import styles from "./palettelist.styles";

function PaletteList({ classes, palettes, history }) {
  const gotoPalette = id => {
    history.push(`/palette/${id}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link to="/palette/new">Create New Palette</Link>
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
