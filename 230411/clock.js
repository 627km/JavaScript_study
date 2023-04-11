const displayDate = document.querySelector("#today"); // 날짜가 들어갈 곳
const displayTime = document.querySelector("#clock"); // 시간이 들어갈 곳

const today = new Date();
// console.log(today);
// console.log(today.toDateString()); // 시간은 제외하고 날짜정보만 가져온다.

const year = today.getFullYear();
// console.log(year);
const month = today.getMonth() + 1; // 월(0~11) 0부터 시작한다.
// console.log(month); 
const date = today.getDate();
// console.log(date);
const day1 = today.getDay(); // 요일(0~6) 일요일 = 0 
// console.log(day1);

let day2 = " "; // 요일을 담을 변수

switch(day1){
  case 0 :
    day2 = "일요일";
    break;
  case 1 :
    day2 = "월요일";
    break;
  case 2 :
    day2 = "화요일";
    break;
  case 3 :
    day2 = "수요일";
    break;
  case 4 :
    day2 = "목요일";
    break;
  case 5 :
    day2 = "금요일";
    break;
  case 6 :
    day2 = "토요일";
    break;
}

// console.log(day2); // 요일이 정상적으로 출력됨

displayDate.innerHTML = `${year}년 ${month}월 
${date}일 <span style="font-weight: bold">${day2}</span>`;

// console.log(today.toTimeString());

let clock = () => {
  let current = new Date();
  let hrs = current.getHours();
  let min = current.getMinutes();
  let sec = current.getSeconds();
  // console.log(`${current} / ${hrs} / ${min} / ${sec}`)

  // 시를 기준으로 오전, 오후 표시
  let period = "AM";
  if (hrs === 0) {
    hrs = 12;
  }else if(hrs > 12){
    hrs = hrs -12;
    period = "PM";
  }

  // 한자리 수일때 앞에 0을 붙여서 표시
  hrs = (hrs < 10) ? "0" + hrs : hrs;
  min = (min < 10) ? "0" + min : min;
  sec = (sec < 10) ? "0" + sec : sec;

  // console.log(`${period} ${hrs}:${min}:${sec}`);
  displayTime.innerHTML = `${period} ${hrs}:${min}:${sec}`;
}

setInterval(clock, 1000); // 1초마다 clock이라는 함수 실행