// Have the function FoodDistribution(arr) read the array of numbers stored in arr which will represent the hunger level
// of different people ranging from 0 to 5 (0 meaning not hungry at all, 5 meaning very hungry). You will also have N sandwiches
// to give out which will range from 1 to 20. The format of the array will be [N, h1, h2, h3, ...] where N represents the number
// of sandwiches you have and the rest of the array will represent the hunger levels of different people. Your goal is to minimize
// the hunger difference between each pair of people in the array using the sandwiches you have available.

// For example: if arr is [5, 3, 1, 2, 1], this means you have 5 sandwiches to give out. You can distribute them in the following order
//  to the people: 2, 0, 1, 0. Giving these sandwiches to the people their hunger levels now become: [1, 1, 1, 1]. The difference between
//  each pair of people is now 0, the total is also 0, so your program should return 0. Note: You may not have to give out all, or even any,
//  of your sandwiches to produce a minimized difference.

// Another example: if arr is [4, 5, 2, 3, 1, 0] then you can distribute the sandwiches in the following order: [3, 0, 1, 0, 0] which makes
// all the hunger levels the following: [2, 2, 2, 1, 0]. The differences between each pair of people is now: 0, 0, 1, 1 and so your program
// should return the final minimized difference of 2.

function FoodDistribution(arr) {
  let sandwiches = arr.shift();
  let min = Math.min(...arr);

  // this loop gives sandwich when 2 hunger differential is taken away

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] >= min && sandwiches > 0) {
      while (arr[i] > arr[i + 1] && arr[i] > arr[i - 1] && sandwiches > 0) {
        arr[i]--;
        sandwiches--;
      }
    }
  }
  let res = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    res += arr[i] > arr[i + 1] ? arr[i] - arr[i + 1] : arr[i + 1] - arr[i];
  }
  // check end of array first to give sandwich as less neighbours and can cause edge case fail

  if (arr[arr.length - 1] > min && sandwiches > 0) {
    while (arr[arr.length - 1] !== arr[arr.length - 2] && sandwiches > 0) {
      if (arr[arr.length - 1] > arr[arr.length - 2]) {
        arr[arr.length - 1]--;
        sandwiches--;
      }
    }
  }

  // this loop removes gives sandwich when 1 hunger differential is taken away
  while (sandwiches > 0 && res > 0) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] >= min && sandwiches > 0) {
        while (arr[i] !== arr[i + 1] && sandwiches > 0) {
          arr[i] > arr[i + 1] ? arr[i]-- : arr[i + 1]--;
          sandwiches--;
        }
      }
    }
    res = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      res += arr[i] > arr[i + 1] ? arr[i] - arr[i + 1] : arr[i + 1] - arr[i];
    }
  }
  return res;
}
// keep this function call here
console.log(FoodDistribution([7, 5, 4, 3, 4, 5, 2, 3, 1, 4, 5])); //6
console.log(FoodDistribution([4, 5, 4, 5, 2, 3, 1, 2])); //3
console.log(FoodDistribution([5, 3, 1, 2, 1])); //0
console.log(FoodDistribution([5, 2, 3, 4, 5])); //1
console.log(FoodDistribution([3, 2, 1, 0, 4, 1, 0])); //4
console.log(FoodDistribution([20, 5, 4, 1])); //0
console.log(FoodDistribution([4, 5, 2, 3, 1, 0])); //2
