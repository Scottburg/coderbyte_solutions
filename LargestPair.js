//Have the function LargestPair(num) take the num parameter being passed and determine the
// largest double digit number within the whole number. For example: if num is 4759472 then your
// program should return 94 because that is the largest double digit number. The input will always
// contain at least two positive digits.

function LargestPair(num) {
  let res = -Infinity;
  num = num.toString();

  for (let i = 0; i < num.length - 1; i++) {
    let temp = num[i] + num[i + 1];
    if (parseInt(temp) > res) {
      res = parseInt(temp);
    }
  }
  return res;
}

console.log(LargestPair(453857)); //85
