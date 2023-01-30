// 연습문제 - 조건문
/* 1. prompt 를 활용하여, 사용자로부터 입력받은 점수가 95 이상이면 A, 
(95 미만이고) 90 이상이면 B, (90 미만이고) 85 이상이면 C, 
85 미만이면 F 를 출력하는 조건문을 작성해보세요. */
let userInput = Number(prompt("점수를 입력 하세요.", 0));

if (userInput >= 95) {
    alert("A");
}else if (userInput >= 90) {
    alert("B");
}else if (userInput >= 85) {
    alert("C");
}else {
    alert("F");
}

/* 2. prompt 를 활용하여 사용자로부터 숫자를 2번 입력받아, 두 숫자가 모두 홀수라면 ‘홀수’, 
두 숫자가 모두 짝수라면 ‘짝수’ 라고 출력하는 조건문을 작성해보세요.*/
let userInput1 = Number(prompt("첫 번째 숫자를 입력하세요."));
let userInput2 = Number(prompt("두 번째 숫자를 입력하세요."));

if (userInput1 % 2 === 0 && userInput2 % 2 === 0) {
    console.log("짝수입니다.");
}else if(userInput1 % 2 === 1 && userinput2 % 2 === 1) {
    console.log("홀수입니다.");
}

// 연습문제 - 반복문
/* 1. 1 부터 100 까지의 수 중 짝수만 출력하는 반복문을 작성해보세요. */
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/* 2. 유저가 ‘그만’ 이라고 입력할 때까지 계속해서 prompt 를 띄우는 반복문을 작성해보세요. */
let flag = 1;
while(flag) {
    let input = prompt("입력하세요.");
    alert(input);
    if (input === "그만") {
        alert("종료");
        flag = 0;
    }
}

// 연습문제 - 함수
/* 매개변수로 숫자를 받아서 해당 수의 <1 배수부터 10 배수까지> 출력하는 함수를 작성해보세요. 
(ex. 2가 들어오면, 2 4 6 8 10 12 14 16 18 20 을 차례로 출력) (매개변수는 1개) */
function func1(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num * i);
    }
}

/* 매개변수로 숫자를 받아서 해당 수의 <1 배수부터 10 배수까지> 모두 더한 값을 리턴하는 함수를 작성해보세요. 
(매개변수는 1개) (ex. 1이 들어오면, 55를 return) */
function func2(num) {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += num * i;
    }
    console.log(sum);
}

/* 매개변수로 이름과 나이를 받아서 미성년자인지 여부를 판별하고, 
“’이름’님은 ‘미성년자/성인’입니다.” 를 출력하는 함수를 작성해보세요. (매개변수는 2개) */
function func2(name, age){
    if (age > 18){
        console.log(`${name}님은 성인입니다.`);
    }else{
        console.log(`${name}님은 미성년자입니다.`);
    }
}

// 실습1: 가위 바위 보 게임 만들기
/* 당신은 컴퓨터와 가위 바위 보 게임을 하려고 합니다.
당신이 가위, 바위, 보 중에서 하나를 선택하면,
컴퓨터는 가위, 바위, 보 중에서 하나를 랜덤하게 고릅니다.
이때 승부의 결과를 출력하는 코드를 작성하세요.
(유저가 이겼다면 “유저: 승, 컴퓨터: 패” 와 같은 형식으로 출력)
**(유저가 가위, 바위, 보 중에서 하나만 입력한다고 가정하고, 예외처리는 하지 않아도 됩니다.)** */
function checkResult(user, computer){
    if(user === "가위") {
        if(computer === "0") {
            alert("무승부");
        }else if(computer === "1") {
            alert("유저: 패, 컴퓨터: 승");
        }else {
            alert("유저: 승, 컴퓨터: 패");
        }
    }
    if(user === "바위") {
        if(computer === "1") {
            alert("무승부");
        }else if(computer === "2") {
            alert("유저: 패, 컴퓨터: 승");
        }else {
            alert("유저: 승, 컴퓨터: 패");
        }
    }
    if(user === "보") {
        if(computer === "2") {
            alert("무승부");
        }else if(computer === "0") {
            alert("유저: 패, 컴퓨터: 승");
        }else {
            alert("유저: 승, 컴퓨터: 패");
        }
    }
}

const user = prompt("가위 바위 보 중 하나를 입력하세요.");
const computer = Math.floor(Math.random()*3);
console.log(computer, '0 = 가위, 1 = 바위, 2 = 보');

checkResult(user, computer);

// 실습2: 업, 다운 게임 만들기
/* 당신은 컴퓨터와 업, 다운 게임을 하려고 합니다.
컴퓨터가 1 ~ 100 까지의 수 중에서 하나를 랜덤하게 고르면,
당신은 컴퓨터가 고른 숫자가 무엇인지를 찾아내야 합니다.
당신이 숫자를 하나 부르면, 컴퓨터는 그 숫자가 처음 고른 숫자보다 큰 지, 작은 지 여부만 알려줍니다.
(컴퓨터가 30을 골랐고, 유저가 10을 불렀다면, 컴퓨터가 고른 숫자가 더 크기에 컴퓨터는 ‘업’ 이라고 말함)
(반대의 경우 ‘다운’)
당신이 숫자를 맞힐 때까지 게임이 계속되도록 코드를 작성하세요.
(숫자를 부르는 것은 prompt 활용)
**(유저가 숫자만 입력한다고 가정하고, 예외처리는 하지 않아도 됩니다.)** */
function upDownGame(userNum) {
    if(userNum < randomNum) {
        alert("업");
    }else if(userNum > randomNum){
        alert("다운");
    }else{
        alert("정답입니다.")
    }
}
const randomNum = Math.floor(Math.random() * 99)+1;
let isContinue = 1;
while(isContinue) {
    let userNum = Number(prompt("숫자를 입력하세요."));
    upDownGame(userNum);
    if (randomNum === userNum){
        isContinue = 0;
    }
}