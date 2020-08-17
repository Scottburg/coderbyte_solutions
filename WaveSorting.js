// Have the function WaveSorting(arr) take the array of positive integers stored in arr
//  and return the string true if the numbers can be arranged in a wave pattern: a1 > a2 < a3 > a4 < a5 > ...,
//  otherwise return the string false. For example, if arr is: [0, 1, 2, 4, 1, 4], then a possible wave ordering
//   of the numbers is: [2, 0, 4, 1, 4, 1]. So for this input your program should return the string true. The input
//    array will always contain at least 2 elements. More examples are given below as sample test cases.

function WaveSorting(arr) {
  let midPoint = Math.floor(arr.length / 2);
  console.log(`midpoint >>> ${midPoint}`);
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let lastI = arr.lastIndexOf(arr[i]);
    if (lastI - i >= midPoint) return false;
  }
  return true;
}

console.log(WaveSorting([0, 1, 2, 4, 1, 1, 1])); // false
console.log(WaveSorting([0, 4, 22, 4, 14, 4, 2])); // true
