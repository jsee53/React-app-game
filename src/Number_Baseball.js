import { useState } from "react";
import "./Number_Baseball.css";

function Number_Baseball() {
  //랜덤한 서로 다른 4자리 숫자를 생성
  var answer_arr = [];
  let index = 0;
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      for (let k = 1; k <= 9; k++) {
        for (let l = 1; l <= 9; l++) {
          if (i != j && i != k && i != l && j != k && j != l) {
            answer_arr[index] = i * 1000 + j * 100 + k * 10 + l;
            index++;
          }
        }
      }
    }
  }

  const [correctNum, SetCorrectNum] = useState(
    answer_arr[Math.ceil(Math.random() * answer_arr.length)]
  );
  const [answer, SetAnswer] = useState();
  const [strike, SetStrike] = useState(0);
  const [ball, SetBall] = useState(0);
  const [text, SetText] = useState("ex) 1234");
  const [submitAnswer, SetSubmitAnswer] = useState(false);

  const ansCheck = (e) => {
    SetAnswer(e.target.value);
    SetSubmitAnswer(false);
  };

  const reset = (e) => {
    SetText("ex) 1234");
    SetSubmitAnswer(true);
    SetStrike(0);
    SetBall(0);
  };

  const showResult = (e) => {
    if (answer > 1000 && answer < 10000) {
      //입력값이 들어왔을 때
      const digits = [];
      digits[0] = Math.floor(answer / 1000); //천의 자리 숫자
      digits[1] = Math.floor((answer % 1000) / 100); //백의 자리 숫자
      digits[2] = Math.floor((answer % 100) / 10); //십의 자리 숫자
      digits[3] = answer % 10; //일의 자리 숫자

      //입력값이 들어왔을 때
      const answer_digits = [];
      answer_digits[0] = Math.floor(correctNum / 1000); //천의 자리 숫자
      answer_digits[1] = Math.floor((correctNum % 1000) / 100); //백의 자리 숫자
      answer_digits[2] = Math.floor((correctNum % 100) / 10); //십의 자리 숫자
      answer_digits[3] = correctNum % 10; //일의 자리 숫자

      for (let i = 0; i < digits.length; i++) {
        for (let j = 0; j < answer_digits.length; j++) {
          if (digits[j] == answer_digits[j]) {
            SetStrike(strike + 1);
          } else if (digits[i] == answer_digits[j]) {
            SetBall(ball + 1);
          }
        }
      }
    }

    return (
      <div>
        {true ? (
          <div>
            strike: {strike}
            <br></br>ball: {ball}
            <br></br>정답 :{correctNum}
            <br></br>제출한답 :{answer}
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <div className="Number_Baseball">
      <div className="title">
        <span className="gradtext">숫자야구</span>

        <table className="gameTable" id="gameTable">
          <tbody>
            <tr>
              <td colSpan="3">SCORE</td>
            </tr>
            <tr>
              <td>1회</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="input">
        <h4>서로 다른 네 자리 숫자를 입력하세요. (0은 제외)</h4>
        <input
          className="text"
          id="inputNumber"
          onChange={ansCheck}
          type="number"
          placeholder={text}
        />
        <button
          className="resultButton"
          onClick={() => {
            SetSubmitAnswer(true);
          }}
        >
          제출
        </button>
      </div>
      {submitAnswer ? showResult() : null}
    </div>
  );
}

export default Number_Baseball;
