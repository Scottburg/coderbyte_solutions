// Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode.

function MeanMode(arr) {
  const add = (a, b) => a + b;
  const mean = arr.reduce(add) / arr.length;

  function mode(array) {
    let resObj = {};
    let max = 1;
    let res = null;
    for (const item of arr) {
      resObj[item] ? resObj[item]++ : (resObj[item] = 1);
    }
    for (const item in resObj) {
      if (resObj[item] > max) {
        max = resObj[item];
        res = item;
      }
    }
    return res;
  }
  const modeRes = mode(arr);
  return mean === parseInt(modeRes) ? 1 : 0;
}
