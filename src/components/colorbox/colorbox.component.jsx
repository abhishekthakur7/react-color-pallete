import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./colorbox.css";

export default function ColorBox({ background: { name, color } }) {
  const [isCopied, setIsCopied] = React.useState(false);

  const changeCopyState = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <CopyToClipboard text={color} onCopy={changeCopyState}>
      <div style={{ background: color }} className="colorBox">
        <div
          style={{ background: color }}
          className={`copy-overlay ${isCopied && "show"}`}
        />
        <div className={`copy-msg ${isCopied && "show"}`}>
          <h1>Copied!</h1>
          <p>{color}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">MORE</span>
      </div>
    </CopyToClipboard>
  );
}
