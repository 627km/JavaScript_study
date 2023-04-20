const origin = document.querySelector("#origin"); // 원래 배열이 들어갈 곳
const result = document.querySelector("#result"); // 요소의 합까지 포함된 배열이 들어갈 곳

let numbers = [2, 4, 6, 8, 10];
showArray(origin, numbers); // 원래 배열 보여주기

// 요소의 합 구하고, 배열에 추가하기
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
numbers.push(sum);
showArray(result, numbers); // 결과값이 추가된 배열 보여주기

// 배열을 보여주는 함수
function showArray(area, arr) {
  let str;
  str = "<table><tr>";
  for (let i = 0; i < arr.length; i++) {
    str +=  "<td>" + arr[i] + "</td>";
  }
  str += "</tr></table>";
  area.innerHTML = str;
}