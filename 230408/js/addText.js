const orderBtn = document.querySelector("#order"); // 주문하기 버튼
const title = document.querySelector("#container > h2"); // 책 제목 요소
let orderInfo = document.querySelector("#orderInfo"); // 주문정보 영역

orderBtn.addEventListener("click", ()=>{
  let newP = document.createElement("p"); // 새로운 p 요소를 만든다.
  let textNode = document.createTextNode(title.innerText); // 새로운 텍스트노드를 만든다.
  newP.appendChild(textNode); // 텍스트노드를 p요소 노드에 추가한다.
  newP.style.fontSize = "0.8em";
  newP.style.color = "blue";
  orderInfo.appendChild(newP); // p요소를 orderInfo에 추가한다.
}, { once : true }) // click 이벤트가 여러번 발생해도 이벤트리스너는 한 번만 실행된다.