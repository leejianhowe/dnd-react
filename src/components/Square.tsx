import React, { ReactNode } from "react";
type Props = { black: boolean; children?: ReactNode };

export const Square: React.FC<Props> = (props: Props) => {
  const fill = props.black ? "black" : "white";
  const stroke = props.black ? "white" : "black";
  return (
    <div
      style={{
        backgroundColor: fill,
        width: "100%",
        height: "100%",
        color: stroke,

      }}
    >
      {props.children}
    </div>
  );
};
