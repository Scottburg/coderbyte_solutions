// Have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most
// frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one
// mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first).
// If there is no mode return -1. The array will not be empty.

function SimpleMode(arr) {
  let resObj = {};
  let max = 1.1;
  let maxArr = [];
  for (let i = 0; i < arr.length; i++) {
    resObj[arr[i]]
      ? resObj[arr[i]].count++
      : (resObj[arr[i]] = { value: arr[i], count: 1, index: i });
  }

  for (const item in resObj) {
    debugger;
    if (resObj[item].count > max) {
      max = resObj[item].count;
      maxArr = [resObj[item]];
      continue;
    }
    if (resObj[item].count === max) {
      maxArr.push(resObj[item]);
    }
  }

  maxArr.sort((a, b) => {
    return a.index - b.index;
  });
  return maxArr.length === 0 ? -1 : maxArr[0].value;
}

console.log(SimpleMode([5, 5, 2, 2, 1])); //5
console.log(SimpleMode([3, 4, 1, 6, 10])); //-1
