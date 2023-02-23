import { useState } from "react";
import "./App.css";
import GuGuDan from "./GuGuDan";

function App() {
  const [gameButton, SetGameButton] = useState();
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
      {gameButton == 1 ? <GuGuDan /> : null}
    </div>
  );
}

export default App;
