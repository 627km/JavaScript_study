# 배열의 요소를 모두 더한 후 마지막에 결과값을 추가해서 보여주기
- 영역과 배열을 인수로 받아서 화면에 보여주는 함수를 만든다. 
- `for`문을 이용해서 배열의 각 요소를 더한다.
- `push()`메소드를 이용해서 각 요소를 더한 값을 배열에 추가한다.
  
# 배열 사용하기
## 새로운 배열 만들기
- 빈 배열을 만들고 값을 할당하기
  ```javascript
  let season = [];
  season[0] = "spring";
  season[1] = "summer";
  ```
- 리터럴 표기법으로 만들기
  ```javascript
  let pet = ["dog", "cat", "parrot"];
  ```
- Array 객체의 인스턴스 만들기
  ```javascript
  let fruits = new Array("사과", "복숭아", "배");
  ```
## 배열 요소 순회하기 - `forEach()`
  > forEach문은 배열의 처음부터 끝까지 모두 순회해야 끝난다. 
```javascript
let pets = ["dog", "cat", "parrot"];
pets.forEach((pet) => {
  console.log(pet);
});
```
## 배열의 다양한 메소드
-  배열 합치기 - `concat()`
    ```javascript
    let vegetable = ["양상추", "토마토", "피클"];
    let meat = ["불고기"];

    let meatBurger = vegetable.concat(meat, "빵")
    meatBurger // ["양상추", "토마토", "피클", "불고기", "빵"]
    ```
- 전개연산사 - `...`
  > 전개연산자를 사용하면 concat() 메소드보다 더 간단하게 배열을 합칠 수 있다. 
  ```javascript
  let meatBurger = ["빵", ...meat, ...vegetable];
  meatBurger // ["빵", "불고기", "양상추", "토마토", "피클"]
  ```
- 배열요소 정렬하기 - `reverse(), sort()`
  ```javascript
  배열.reverse();
  배열.sort();  // 값의 크기에 따라 가장 작은 값 부터 순서대로 값을 정렬한다. 
  ```
- 배열의 맨 끝에 요소 추가, 삭제하기 - `pop(), push()`
  ```javascript
  배열.push();  // 맨 마지막에 값을 추가
  배열.pop(); // 맨 마지막 값을 제거
  ```