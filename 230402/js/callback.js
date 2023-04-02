// 사용자의 이름과 나이를 보여주는 함수
function showInfo(name, age){
  alert(`${name}님의 나이는 ${age}세 입니다.`);
}

// 사용자의 이름과 나이를 받는 함수
function getInfo(callback){ // 매개변수가 콜백함수이다. 
  let userName = prompt("이름을 입력해주세요.");
  let userAge = Number(prompt("나이를 입력해주세요."));
  callback(userName, userAge); // showInfo(userName, userAge) 가 된다.
}

getInfo(showInfo)