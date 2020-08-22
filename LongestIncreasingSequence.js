// Have the function LongestIncreasingSequence(arr) take the array of positive integers stored in arr and
// return the length of the longest increasing subsequence (LIS). A LIS is a subset of the original list
// where the numbers are in sorted order, from lowest to highest, and are in increasing order. The sequence
// does not need to be contiguous or unique, and there can be several different subsequences. For example:
// if arr is [4, 3, 5, 1, 6] then a possible LIS is [3, 5, 6], and another is [1, 6]. For this input, your
// program should return 3 because that is the length of the longest increasing subsequence.

function LongestIncreasingSequence(arr) {
  // you have to get the max length at each point in the array, at the first item the length will be 1, also any item will have a min length of 1
  let lens = [];

  for (let i = 0; i < arr.length; i++) {
    lens[i] = 1; //set length to 1 which is the min length possible

    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && lens[j] + 1 > lens[i]) {
        // if number is greater than the number at i, you can set the length to the length at i , + 1.
        lens[i] = lens[j] + 1;
      }
    }
  }
  return Math.max(...lens);
}

console.log(LongestIncreasingSequence([9, 9, 4, 2])); //1
console.log(LongestIncreasingSequence([10, 12, 4, 6, 100, 2, 56, 34, 79])); //4
console.log(
  LongestIncreasingSequence([
    10,
    12,
    4,
    6,
    100,
    2,
    56,
    34,
    79,
    45,
    33,
    12,
    45,
    67,
    89,
  ])
); // 6
console.log(
  LongestIncreasingSequence([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90])
); //7
