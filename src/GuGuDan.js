import { useState } from "react";
import "./GuGuDan.css";

function GuGuDan() {
  const [first, SetFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, SetSecond] = useState(Math.ceil(Math.random() * 9));
  const [answer, SetAnswer] = useState();
  const [submitAnswer, SetSubmitAnswer] = useState(false);

  const ansCheck = (e) => {
    SetAnswer(e.target.value);
    SetSubmitAnswer(false);
  };

  const showResult = (e) => {
    return (
      <div>
        {first * second == answer ? (
          <div>정답입니다!</div>
        ) : (
          <div>틀렸습니다!</div>
        )}
      </div>
    );
  };
  return (
    <div className="GuGuDan">
      <div>
        <div>
          {first} x {second} = ?
        </div>
        <input type="number" onChange={ansCheck} placeholder="정답 입력:" />
        <button
          onClick={() => {
            SetSubmitAnswer(true);
          }}
        >
          제출
        </button>
        {submitAnswer ? showResult() : null}
      </div>
    </div>
  );
}

export default GuGuDan;
