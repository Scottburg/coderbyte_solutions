// Have the function ProductDigits(num) take the num parameter being passed which
//  will be a positive integer, and determine the least amount of digits you need to
//   multiply to produce it. For example: if num is 24 then you can multiply 8 by 3
//    which produces 24, so your program should return 2 because there is a total of
//     only 2 digits that are needed. Another example: if num is 90, you can multiply 10 * 9,
//      so in this case your program should output 3 because you cannot reach 90 without
//      using a total of 3 digits in your multiplication.

function ProductDigits(num) {
  // go through all the numbers up to half num and make a list of all the divisors
  const divisors = [];
  for (let i = 0; i < num / 2 + 1; i++) {
    if (num % i === 0) {
      divisors.push([
        i,
        num / i,
        i.toString().length + (num / i).toString().length,
      ]);
    }
  }
  divisors.sort((a, b) => a[2] - b[2]);
  return divisors[0][2];
}

console.log(ProductDigits(6)); // 2
console.log(ProductDigits(23)); // 3
console.log(ProductDigits(90)); // 3
console.log(ProductDigits(1)); // 2
