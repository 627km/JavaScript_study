# 캐러셀(Carousel) 만들기
> 캐러셀이란, 이미지나 콘텐츠를 슬라이드쇼처럼 보여주는 요소입이다.
- `event`의 `target`프로퍼티를 이용해서 이벤트가 발생한 화살표가 왼쪽 화살표인지 오른쪽 화표인지 알아낸다.
- 이미지를 배열안에 담고, 인덱스를 이용해서 다음 또는 이전 이미지를 보여준다.
- 화살표버튼 요소들을 배열에 담고 그 배열을 `forEach`를 이용해서 순회한다.