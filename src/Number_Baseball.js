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

  const [submitAnswer, SetSubmitAnswer] = useState(false);

  const ansCheck = (e) => {
    SetAnswer(e.target.value);
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
      SetSubmitAnswer(false);
    }
  };

  return (
    <div className="Number_Baseball">
      <div class="title">
        <span class="gradtext">숫자야구</span>
        {submitAnswer ? <div>{strike}</div> : null}

        <table class="gameTable" id="gameTable">
          <tr>
            <td colspan="3">SCORE</td>
          </tr>
          <tr>
            <td>1회</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2회</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3회</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>4회</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>5회</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>6회</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>7회</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>8회</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>9회</td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>

      <div class="input">
        <h4>서로 다른 네 자리 숫자를 입력하세요. (0은 제외)</h4>
        <form id="form">
          <input
            class="text"
            id="inputNumber"
            onChange={ansCheck}
            type="number"
            placeholder="ex) 1234"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='ex) 1234'"
          />
          <button
            class="gameButton"
            onClick={() => {
              SetSubmitAnswer(true);
            }}
          ></button>
        </form>
      </div>
      {answer}
    </div>
  );
}

export default Number_Baseball;
