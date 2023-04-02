// 양수인지 음수인지 0인지 판별하는 함수
function isPositive(num){ // num 자리에 userNumber가 전달 됨
  if(num > 0){
    alert(`${num}은 양수입니다.`);
  }else if(num < 0){
    alert(`${num}은 음수입니다.`);
  }else{
    alert(`0입니다.`);
  }
}

// 입력받은 값을 숫자로 변환
let userNum = parseInt(prompt("숫자를 입력하세요."));

if(!isNaN(userNum)){ // userNum이 숫자일 경우에만 
  isPositive(userNum); // isPositive함수가 실행되도록 함
}