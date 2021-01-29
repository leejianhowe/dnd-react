import React from "react";
import { Square } from "./Square";
import BoardSquare from "./BoardSquare";
import { Knight } from "./Knights";
import { canMoveKnight, moveKnight } from "../observe";
import { DndProvider ,useDrop} from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {ItemTypes} from '../Constants'

type Props = {
  knightPosition: number[];
};
type SquareParams = {
  i: number;

  knightPosition: number[];
};

export const Board: React.FC<Props> = (props: Props) => {
  //   const position1 = { x: 0, y: 0, knightPosition: props.knightPosition };
  //   const position2 = { x: 1, y: 0, knightPosition: props.knightPosition };
  //   const position3 = { x: 2, y: 0, knightPosition: props.knightPosition };
  const { knightPosition } = props;


  function renderPiece(x: number, y: number, [knightX, knightY]: number[]) {
    if (x === knightX && y === knightY) {
      return <Knight />;
    }
  }
  const renderSquare = ({ i, knightPosition }: SquareParams) => {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
        <BoardSquare x={x} y={y}>
          {renderPiece(x, y, knightPosition)}
        </BoardSquare>
      </div>
    );
  };
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare({ i, knightPosition: knightPosition }));
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          height: "600px",
          width: "800px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
};
