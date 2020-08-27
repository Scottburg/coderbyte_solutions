// Have the function LongestMatrixPath(strArr) take the array of strings stored in strArr, which will be an NxM matrix of
// positive single-digit integers, and find the longest increasing path composed of distinct integers. When moving through
// the matrix, you can only go up, down, left, and right. For example: if strArr is ["345", "326", "221"], then this looks
// like the following matrix:

const { coral } = require('color-name');

// 3 4 5
// 3 2 6
// 2 2 1

// For the input above, the longest increasing path goes from: 3 -> 4 -> 5 -> 6. Your program should return the number
// of connections in the longest path, so therefore for this input your program should return 3. There may not necessarily
// always be a longest path within the matrix.

function LongestMatrixPath(strArr) {
  const findLongestPath = (coords, strArr, count = 0) => {
    debugger;
    // if (hash[coords]) {
    //   return hash[coords];
    // }
    const y = parseInt(coords[0]);
    const x = parseInt(coords[1]);
    let num = parseInt(strArr[y][x]);
    if (x < strArr[0].length - 1) {
      if (parseInt(strArr[y][x + 1]) > num) {
        count++;
        findLongestPath([y, x + 1], strArr, count);
        count--;
      }
    } //left
    if (x > 0) {
      if (parseInt(strArr[y][x - 1]) > num) {
        count++;
        findLongestPath([y, x - 1], strArr, count);
        count--;
      }
    } //right
    if (y < strArr.length - 1 && y >= 0) {
      if (parseInt(strArr[y + 1][x]) > num) {
        count++;
        findLongestPath([y + 1, x], strArr, count);
        count--;
      }
    } //down
    if (y > 0 && y < strArr.length) {
      if (parseInt(strArr[y - 1][x]) > num) {
        count++;
        findLongestPath([y - 1, x], strArr, count);
        count--;
      }
    } //up

    if (count > maximum) {
      maximum = count;
    }
    // hash[`${y}${x}`] = count;
    return count;
  };
  let maximum = 0;
  let max = 0;
  const hash = {};
  for (let i = 0; i < strArr[0].length; i++) {
    for (let j = 0; j < strArr.length; j++) {
      let coords = `${j}${i}`;
      findLongestPath(coords, strArr);
    }
  }
  return maximum;
}

// keep this function call here
console.log(LongestMatrixPath(['9', '1', '9', '3', '1'])); //2
console.log(LongestMatrixPath(['923', '456', '789'])); //3
console.log(LongestMatrixPath(['67', '21', '45'])); //3
console.log(LongestMatrixPath(['123', '456', '789'])); //4
console.log(LongestMatrixPath(['9452124643115673264'])); //3
console.log(LongestMatrixPath(['564215', '287532', '193167', '111123'])); //5
console.log(LongestMatrixPath(['12256', '56219', '43215'])); //5
