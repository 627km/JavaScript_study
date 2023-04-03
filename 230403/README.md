# DOM (Document Object Model)
> 자바스크립트 같은 프로그래밍 언어로 웹 문서에 접근하고 제어할 수 있도록 웹 문서를 체계적으로 정리하는 방법을 말한다. 

## 웹 요소에 접근하기
- `querySelector()`<br>
지정한 선택자를 사용한 요소 중에서 첫 번째 요소에 접근할 수 있다.
- `querySelectorAll()`<br>
한꺼번에 여러개의 요소에 접근할 수 있다. 여러개의 요소를 가져올 때 사용한다. 
- `getElementById(id명)`<br>
id 선택자를 기준으로 접근한다.
- `getElementsByClassName(class명)`<br>
class 선택자를 기준으로 접근
- `getElementsByTagName(tag명)`<br>
태그 이름을 기준으로 접근한다. 

## 웹 요소의 내용 가져오기
- 웹요소`.innerText` : 웹 브라우저 창에 보이는 내용만 가져온다.
- 웹요소`.innerHTML` : 요소안에 있는 태그와 내용을 함께 가져온다.
- 웹요소`.textContent` : 내용을 가져오되, 소스에 있는대로 가져온다.

## 자바스크립트로 스타일 수정
### CSS 속성에 접근하고 스타일 수정
- 요소`.style.`속성명<br>
  ```JavaScript
  const title = document.querySelector("#title");

  title.style.backgroundColor = 'black';
  title.style.color = 'white';
  ```
### classList 프로퍼티 사용
- `classList()` : 요소에 적용한 클래스 스타일을 모두 모아 놓은 프로퍼티이다. 
#### 클래스 스타일 추가와 삭제
- 추가 : 요소`.classList.add(클래스명)`
- 삭제 : 요소`.classList.remove(클래스명)`
> 추가와 삭제를 이용해서 버튼을 클릭했을 때 스타일이 바뀌는 토글효과를 줄 수 있다.
#### toggle
- 요소`.classList.toggle(클래스명)`
#### 특정 클래스 스타일이 있는 요소를 찾아주는 함수
- 요소`.classList.contains(클래스명)`
## Form에 접근하기
> form에 입력된 값에 접근하기 위해서는 `.value`를 사용해야 한다.
- 요소`.value`
  ```JavaScript
  // order-name 이라는 id를 가진 input태그에 담겨있는 값을 가져온다.
  document.querySelector("#order-name").value
  ```