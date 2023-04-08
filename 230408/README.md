# DOM 활용하기
## 상품(텍스트) 추가하기
- p요소를 만든다. `createElement("p")`
- 텍스트를 담을 텍스트노드를 만든다. `createTextNode()`
- p요소에 텍스트노드를 추가한다. `.appendChild()`
- body에 p요소를 추가한다. `.appendChild()`

## 이미지 추가하기
- 이미지 요소를 만든다. `createElement("img")`
- 속성노드를 만든다. `createAttribute()`
- 속성 값을 할당한다. 속성노드`.value` = ""
- 이미지요소에 속성노드를 연결한다. `.setAttributeNode()`
- body에 img요소를 추가한다. `.appendChild()`

## 도서 리스트 만들기
- 제목과 저자입력란에 작성 후 저장을 누르면 아래 목록형태로 저장된다. (저장기능)
- 삭제버튼을 누르면 해당 제목과 저자만 삭제된다. (삭제기능)
- `addEventLister()`에서 `this`를 사용할 경우 화살표함수를 사용하면 에러가 발생한다.
- 자식노드를 삭제할 경우 `.removeChild()`메소드를 사용한다.
  > 부모요소`.removeChild(`자식요소`)`