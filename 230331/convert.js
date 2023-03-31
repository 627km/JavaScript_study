// 섭씨: celsius, 화씨: fahrenheit
// 섭씨 = (화씨 - 32) / 1.8

let cel; // 섭씨온도를 저장할 변수 선언
let fah = prompt("섭씨로 변환할 화씨온도를 입력하세요.") // 화씨온도를 저장할 변수 선언
parseFloat(fah); // 실수형으로 형변환

cel = ((fah - 32) / 1.8).toFixed(2); // toFixed() : 결과값의 소수점 자리수를 고정시켜준다. 

alert(`화씨 ${fah}도는 섭씨 ${cel}도 입니다.`)

document.getElementById('cel').innerText = cel + '℃';
document.getElementById('fah').innerText = fah + '℉';