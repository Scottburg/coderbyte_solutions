// Have the function ThreeFiveMultiples(num) return the sum of all the multiples of 3 and 5 that are below num. For example:
// if num is 10, the multiples of 3 and 5 that are below 10 are 3, 5, 6, and 9, and adding them up you get 23, so your program
// should return 23. The integer being passed will be between 1 and 100.

function ThreeFiveMultiples(num) {
  let arr = [];

  for (let i = 1; i < num; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
      arr.push(i);
    }
  }

  return arr.length > 0 ? arr.reduce((a, c) => a + c) : 0;
}

console.log(ThreeFiveMultiples(6)); //8
console.log(ThreeFiveMultiples(1)); //0
