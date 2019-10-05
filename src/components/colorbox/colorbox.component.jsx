import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./colorbox.css";

export default function({ background: { name, color } }) {
  return (
    <CopyToClipboard text={ color }>
      <div style={{ background: color }} className="colorBox">
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
