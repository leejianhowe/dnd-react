import React from "react";

import "./App.css";
import { Knight } from "./components/Knights";
import { Square } from "./components/Square";
import { Board } from "./components/Board";
function App() {

  return (
<Board  knightPosition={[4,5]}/>
  );
}

export default App;
