let today = new Date(); // 현재 날짜와 시간 정보를 담은 객체 생성
let hours = today.getHours(); // 현재 시간 중 시에 대한 정보만 가져온다.
const container = document.querySelector("#container");

let newImg = document.createElement("img"); // 이미지 요소 노드 만들기
let srcNode = document.createAttribute("src"); // 속성노드 만들기 setAttribute()
srcNode.value = (hours < 12) ? "images/morning.jpg" : "images/afternoon.jpg"; // 오전, 오후 판단
newImg.setAttributeNode(srcNode); // img요소에 속성노드 연결하기 setAttributeNode()
container.appendChild(newImg); // container요소에 img요소 추가하기