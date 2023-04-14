function changeBg(){
  let randomNumber = Math.floor(Math.random() * 5) + 1; // 1부터 5까지 무작위로 숫자가 할당된다. 
  console.log(randomNumber);
  document.body.style.backgroundImage = `url(images/bg-${randomNumber}.jpg)`; // 배경사진을 랜덤숫자에 해당하는 배경으로 바꿔준다.

}
document.addEventListener("load", changeBg()); // 페이지가 로드될 때, changeBg() 함수가 실행
