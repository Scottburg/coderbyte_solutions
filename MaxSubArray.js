// Have the function MaxSubarray(arr) take the array of numbers stored in arr and
// determine the largest sum that can be formed by any contiguous subarray in the array.
// For example, if arr is [-2, 5, -1, 7, -3] then your program should return 11 because the
// sum is formed by the subarray [5, -1, 7]. Adding any element before or after this subarray would make the sum smaller.

function MaxSubarray(arr) {
  let max = arr.reduce((a, c) => a + c);

  for (let i = 0; i < arr.length; i++) {
    debugger;
    for (let j = i; j < arr.length; j++) {
      let temp = j === i ? arr[i] : arr.slice(i, j).reduce((a, c) => a + c);
      if (temp > max) {
        max = temp;
      }
    }
  }
  return max;
}

console.log(MaxSubarray([1, -2, 0, 3])); // 3
console.log(MaxSubarray([3, -1, -1, 4, 3, -1])); // 8
console.log(MaxSubarray([1, 1, 1, 1])); // 4
console.log(MaxSubarray([-4, -5, -6])); // -4
