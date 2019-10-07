import React from "react";
import ColorBox from "../colorbox/colorbox.component";

function SingleColorPalette({ palette, colorId }) {
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
        key={color.id}
        name={color.name}
        background={color.hex}
        showLink={false}
      />
    );
  });

  return (
    <div className="palette">
      <div className="palette-colors">{colorBoxes}</div>
    </div>
  );
}

export default SingleColorPalette;
