const container = document.querySelector('#container');

const pics = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.jpg"];

container.style.backgroundImage = `url(images/${pics[0]})`; // 첫번째 이미지를 기본이미지로 설정

const arrows = document.querySelectorAll(".arrow"); // arrow라는 클래스를 가진 요소가 두개임
let i = 0;

arrows.forEach(arrow => { // 배열 순회하기
  arrow.addEventListener("click", (e) => {
    if(e.target.id === "left"){
      i--;
      if(i<0){
        i=pics.length - 1;
      }
    }else{
      i++;
      if(i>pics.length -1){
        i=0;
      }
    }
    container.style.backgroundImage = `url(images/${pics[i]})`;
  })
})