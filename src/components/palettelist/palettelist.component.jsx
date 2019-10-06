import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "../minipalette/minipalette.component";

export default function PaletteList({ palettes }) {
  return (
    <div>
      <h1>React Colors</h1>
      {palettes.map(palette => (
        <MiniPalette {...palette} />
      ))}
    </div>
  );
}
