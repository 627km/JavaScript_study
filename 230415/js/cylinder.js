function Cylinder(cylinderDiameter, cylinderHeight){
  this.diameter = cylinderDiameter;
  this.height = cylinderHeight;

  this.getVolume = function() {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2); // 원기둥의 부피 구하기, toFixed() : 소수점이하 자리 지정
  };
}

const button = document.querySelector("button"); // 계산하기 버튼 가져오기
const result = document.querySelector("#result"); // 결과값이 들어갈 자리 가져오기

button.addEventListener("click", function(event) { // 계산하기 버튼에 클릭 이벤트가 발생할 때, 
  event.preventDefault();
  const diameter = document.querySelector("#cyl-diameter").value; // 입력되어 있는 지름값 가져오기
  const height = document.querySelector("#cyl-height").value; // 입력되어 있는 높이값 가져오기

  if(diameter === "" || height === ""){ // 지름값, 높이값 둘 중 하나라도 빈값이면 
    result.innerText = "지름값과 높이값을 입력하세요." // 값을 입력하라는 안내해주기
  }else {
    let cylinder = new Cylinder(parseInt(diameter), parseInt(height)); // Cylinder 생성자 함수를 통해 cylinder 인스턴스 생성
    result.innerText = `원기둥의 부피는 ${cylinder.getVolume()} 입니다.`
  }
  
})