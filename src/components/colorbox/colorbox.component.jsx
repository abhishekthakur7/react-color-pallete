import React from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import "./colorbox.css";

export default function ColorBox({ background, name, moreUrl, showLink }) {
  const [isCopied, setIsCopied] = React.useState(false);

  const changeCopyState = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  const isDarkColor = chroma(background).luminance() <= 0.08;
  const isLightColor = chroma(background).luminance() >= 0.07;

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className="colorBox">
        <div
          style={{ background }}
          className={`copy-overlay ${isCopied && "show"}`}
        />
        <div className={`copy-msg ${isCopied && "show"}`}>
          <h1>Copied!</h1>
          <p className={isLightColor ? "dark-text" : null}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={isDarkColor ? "light-text" : null}>{name}</span>
          </div>
          <button
            className={`copy-button ${isLightColor ? "dark-text" : null}`}
          >
            Copy
          </button>
        </div>
        {showLink && (
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className={`see-more ${isLightColor ? "dark-text" : null}`}>
              MORE
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}
