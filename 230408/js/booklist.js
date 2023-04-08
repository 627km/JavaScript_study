let title = document.querySelector("#title"); 
let author = document.querySelector("#author");
const save = document.querySelector("#save");
const bookList = document.querySelector("#bookList");

save.addEventListener("click", (e)=>{
  e.preventDefault(); // 저장하기 버튼을 클릭하면 내용이 바로 사라져버리는데 그 새로고침되는 현상을 막기위한 것
  const item = document.createElement("li");
  item.innerHTML = `
  ${title.value} - ${author.value}
  <span class="delButton">삭제</span>
  `
  bookList.appendChild(item);
  title.value = ""; // 저장을 누르면 입력창을 빈칸으로 바꾼다. 
  author.value = "";
  const delButtons = document.querySelectorAll(".delButton");
  for(let delButton of delButtons){
    delButton.addEventListener("click", function(){ // this를 사용하기 위해서는 화살표함수를 사용하면 안된다. 
      // 부모요소.removeChild(자식요소)
      this.parentNode.parentNode.removeChild(this.parentNode) // span요소의 부모요소는 li요소, li요소의 부모요소는 ul요소
    })
  }
})

