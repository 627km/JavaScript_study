// 사용자의 입력을 prompt를 이용해서 받는다.
// 사용자가 취소를 클릭하면 어떻게 할지 생각해본다.
// 짝수와 홀수를 어떻게 구별할지 생각해본다.

let userInput = prompt("숫자를 입력하세요.");

if(userInput != null) { // 입력창에서 취소를 누르지 않은 경우 (취소를 누르면 userInput에는 null이 할당된다.)
  parseInt(userInput); // 정수로 변환
  (userInput % 2 === 0) ? alert("짝수입니다.") : alert("홀수입니다."); // 삼항연산자를 이용
}