const number = parseInt(prompt("자연수를 입력하세요."));
let isPrime; // true 또는 false를 할당할 변수

if(number === 1){
  document.write(`${number}은(는) 소수도, 합성수도 아닙니다.`);
}else if(number === 2){
  isPrime = true;
  document.write(`${number}은(는) 소수입니다.`)
}else{
  for(let i = 2; i < number; i++){
    if(number % i === 0){ // 나눴을 때 나머지가 0이면 소수가 아니다. 
      isPrime = false;
      break;
    }else{
      isPrime = true;
    }
  }
  if(isPrime){
    document.write(`${number}은(는) 소수입니다.`);
  }else{
    document.write(`${number}은(는) 소수가 아닙니다.`);
  }
}
