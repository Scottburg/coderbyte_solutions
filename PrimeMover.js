// Have the function PrimeMover(num) return the numth prime number. The range will
// be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the
// 16th prime number

function PrimeMover(pos) {
  if (pos === 1) {
    return 2;
  }

  let primePos = 1;
  let num = 1;
  while (primePos < pos) {
    num = num + 2;
    let prime = true;
    for (let i = 3; i <= Math.sqrt(num); i = i + 2) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      primePos++;
    }
  }

  return num;
}

console.log(PrimeMover(9)); //23
console.log(PrimeMover(100)); //541
