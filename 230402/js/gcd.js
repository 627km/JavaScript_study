// 최대공약수(Greatest Common Divisor)
// 두 수 모두 나누어 떨어지는 수 중 가장 큰 수 

function getGCD(n1, n2){
  let max = n1 > n2 ? n1 : n2; // 두 수 중 더 큰 값을 찾는다. 
  let GCD = 0;

  for(let i = 1; i <= max; i++){
    if(n1 % i === 0 && n2 % i === 0){ // i로 나눴을 때 둘다 나누어 떨어질 경우 그 i 값을 GCD에 할당한다. 
      GCD = i;
    }
  }
  return GCD; // GCD값을 반환해주므로 함수를 실행하면 GCD값이 반환된다.
}

console.log(`308과 20의 최대 공약수 : ${getGCD(308, 20)}`) 
console.log(`45과 38의 최대 공약수 : ${getGCD(45, 38)}`)