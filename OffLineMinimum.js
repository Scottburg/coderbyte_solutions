// Have the function OffLineMinimum(strArr) take the strArr parameter being passed which will
// be an array of integers ranging from 1...n and the letter "E" and return the correct subset
// based on the following rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"]
// where the I's stand for integers and the E means take out the smallest integer currently in the whole set.
// When finished, your program should return that new set with integers separated by commas. For example: if strArr
// is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.

function OffLineMinimum(strArr) {
  let newArr = [];
  let resArr = [];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'E') {
      resArr.push(newArr[0]);
      newArr.shift();
    } else {
      newArr.push(strArr[i]);
      newArr.sort((a, b) => a - b);
    }
  }
  return resArr.toString();
}

// keep this function call here
console.log(OffLineMinimum(['1', '2', 'E', 'E', '3'])); //1,2
console.log(OffLineMinimum(['4', 'E', '1', 'E', '2', 'E', '3', 'E'])); //4,1,2,3
