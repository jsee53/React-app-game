import { useState } from "react";
import "./GuGuDan.css";

function GuGuDan() {
  const [first, SetFirstNumber] = useState(Math.ceil(Math.random() * 9));
  const [second, SetSecondNumber] = useState(Math.ceil(Math.random() * 9));
  const [result, SetResult] = useState(false);
  return (
    <div className="GuGuDan">
      <div>
        <div>
          {result ? (
            <div>true</div>
          ) : (
            <div>
              {first} x {second} = ?
            </div>
          )}
        </div>
        <form action="">
          <input type="number" placeholder="정답 입력:" />
          <button>제출</button>
        </form>
        <div>{result ? <div>정답입니다!</div> : <div>틀렸습니다!</div>}</div>
      </div>
    </div>
  );
}

export default GuGuDan;
