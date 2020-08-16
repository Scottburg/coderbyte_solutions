// Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return
//  the string true if any combination of numbers in the array (excluding the largest number) can
//   be added up to equal the largest number in the array, otherwise return the string false.
//    For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23.
//     The array will not be empty, will not contain all the same elements, and may contain negative numbers.

function ArrayAdditionI(arr) {
  const sum = Math.max(...arr);
  arr.splice(arr.indexOf(sum), 1);

  // console.log(max);
  //powersets

  var sets = [[]];

  // generate the power set and for each new set
  // check if the temporary sum equals our sum above

  for (var i = 0; i < arr.length; i++) {
    // loops thru all numbers as i
    for (var j = 0, len = sets.length; j < len; j++) {
      var temp = sets[j].concat(arr[i]); // concats  the array element to the other arrays in the super set; by looping through like this all combos are found.
      sets.push(temp);
      var s = temp.reduce((p, c) => {
        // reduce to sum of numbers
        return p + c;
      });
      if (s === sum) {
        // if total = sum return true
        return 'true';
      }
    }
  }
  return false;
}

console.log(ArrayAdditionI([5, 7, 16, 1, 2])); // false
// console.log(ArrayAdditionI([3, 5, -1, 8, 12])); // true
// console.log(ArrayAdditionI([54, 49, 1, 0, 7, 4])); // true
// console.log(ArrayAdditionI([3, 4, 5, 7])); // true
