import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./palette-footer.styles";

function PaletteFooter({ paletteName, emoji, classes }) {
  return (
    <footer className={classes.paletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);