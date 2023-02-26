import { useState } from "react";
import "./Number_Baseball.css";

function Number_Baseball() {
  const [correctNum, SetCorrectNum] = useState(Math.ceil(Math.random() * 9000));
  const [answer, SetAnswer] = useState();
  const [strike, SetStrike] = useState();
  const [ball, SetBall] = useState();

  const ansCheck = (e) => {
    SetAnswer(e.target.value);
    if (answer > 1000 && answer < 10000) {
      const digits = [];
      digits[0] = Math.floor(answer / 1000); //천의 자리 숫자
      digits[1] = Math.floor((answer % 1000) / 100); //백의 자리 숫자
      digits[2] = Math.floor((answer % 100) / 10); //십의 자리 숫자
      digits[3] = answer % 10; //일의 자리 숫자
    }
  };

  return (
    <div className="Number_Baseball">
      <div class="title">
        <span class="gradtext">숫자야구</span>
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
          <span class="gameButton">
            <input class="resultButton" type="submit" value="정답입력" />
          </span>
        </form>
      </div>
      {answer}
    </div>
  );
}

export default Number_Baseball;
