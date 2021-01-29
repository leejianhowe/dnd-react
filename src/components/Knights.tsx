import React from "react";
import { ItemTypes } from "../Constants";
import { useDrag } from "react-dnd";

export const Knight: React.FC = () => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  });
  return (
    <div
    ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "pointer",
        width:'100%',
        height:'100%',
        textAlign:'center',
        padding: '20x`% 0 0 0'
      }}
    >
      ♘
    </div>
  );
};
