// Have the function PermutationStep(num) take the num parameter being passed and return the next number greater
// than num using the same digits. For example: if num is 123 return 132, if it's 12453 return 12534. If a number
// has no greater permutations, return -1 (ie. 999).

function PermutationStep(num) {
  num = num.toString();
  for (let i = 0; i < num.length; i++) {
    if (parseInt(num[num.length - i - 1]) < parseInt(num[num.length - i])) {
      num =
        num.slice(0, num.length - i - 1) +
        num[num.length - i] +
        num[num.length - i - 1] +
        num.slice(num.length - i + 1);
      let test = num.slice([num.length - i]).split('');
      test.sort((a, b) => {
        return a - b;
      });
      num = num.slice(0, num.length - i) + test.join('');
      return num;
    }
  }

  return -1;
}

console.log(PermutationStep(41352)); //41523
console.log(PermutationStep(44444444)); // -1
console.log(PermutationStep(76666666)); // -1
