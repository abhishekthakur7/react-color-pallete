import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./colorbox.styles";

function ColorBox({ background, name, moreUrl, showingFullPalette, classes }) {
  const [isCopied, setIsCopied] = React.useState(false);

  const changeCopyState = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className={classes.colorBox}>
        <div
          style={{ background }}
          className={`${classes.copyOverlay} ${isCopied &&
            classes.showOverlay}`}
        />
        <div
          className={`${classes.copyMessage} ${isCopied &&
            classes.showMessage}`}
        >
          <h1>Copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        {showingFullPalette && (
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className={classes.seeMore}>MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default withStyles(styles)(ColorBox);
