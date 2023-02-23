import { useState } from "react";
import "./App.css";
import GuGuDan from "./GuGuDan";
import Number_Baseball from "./Number_Baseball";
import Minesweeper from "./Minesweeper";

function App() {
  const [gameButton, SetGameButton] = useState(null);
  return (
    <div className="App">
      <button
        onClick={() => {
          SetGameButton(1);
        }}
      >
        구구단
      </button>
      <button
        onClick={() => {
          SetGameButton(2);
        }}
      >
        숫자야구
      </button>
      <button
        onClick={() => {
          SetGameButton(3);
        }}
      >
        지뢰찾기
      </button>
      {selectGame(gameButton)}
    </div>
  );
}

function selectGame(gameButton) {
  switch (gameButton) {
    case 1:
      return <GuGuDan />;
    case 2:
      return <Number_Baseball />;
    case 3:
      return <Minesweeper />;
  }
}

export default App;
