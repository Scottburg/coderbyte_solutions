// Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest
//  and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106]
//  the output should be 12 98. The array will not be empty and will contain at least 2 numbers.
//  It can get tricky if there's just two numbers!

function SecondGreatLow(arr) {
  arr = new Set(arr);
  arr = Array.from(arr);
  arr.sort((a, b) => a - b);

  if (arr.length === 2) {
    return arr[1] + ' ' + arr[0];
  }
  if (arr.length === 1) {
    return arr[0] + ' ' + arr[0];
  }
  return arr[1] + ' ' + arr[arr.length - 2];
}
