// Have the function FindIntersection(strArr) read the array of strings stored in strArr
//  which will contain 2 elements: the first element will represent a list of comma-separated
//   numbers sorted in ascending order, the second element will represent a second list of comma-separated
//    numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur
//     in elements of strArr in sorted order. If there is no intersection, return the string false.

// For example: if strArr contains ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"] the output should return "1,4,13"
//  because those numbers appear in both strings. The array given will not be empty, and each string inside
//  the array will be of numbers sorted in ascending order and may contain negative numbers.

function FindIntersection(strArr) {
  let newArr = [];
  let elem1 = strArr[0].split(', ');
  let elem2 = strArr[1].split(', ');

  for (let i = 0; i < elem1.length; i++) {
    if (elem2.includes(elem1[i])) {
      newArr.push(elem1[i]);
    }
  }
  if (newArr.length === 0) {
    return false;
  } else {
    return newArr.toString();
  }
}
