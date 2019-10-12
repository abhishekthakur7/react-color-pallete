import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "../draggablecolorbox/draggablecolorbox.component";

function DraggableColorList({ colors, deleteColor }) {
  return (
    <>
      {colors.map((color, index) => (
        <DraggableColorBox
          index={index}
          key={color.name}
          deleteColor={deleteColor}
          color={color.color}
          name={color.name}
        />
      ))}
    </>
  );
}

export default SortableContainer(DraggableColorList);
