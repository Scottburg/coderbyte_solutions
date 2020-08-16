// Min Window Substring

// Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr,
// which will contain only two strings, the first parameter being the string N and the second parameter
//  being a string K of some characters, and your goal is to determine the smallest substring of N that contains all the characters in K. For example: if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e, and d is "dae" located at the end of the string. So for this example your program should return the string dae.

// Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the characters in K is "aabd"
// which is located at the beginning of the string. Both parameters will be strings ranging in length from 1 to 50 characters and
// all of K's characters will exist somewhere in the string N. Both strings will only contains lowercase alphabetic characters.

function MinWindowSubstring(strArr) {
  let str = strArr[0];
  let target = strArr[1];
  let targetDict = getCount(target);
  let solutions = [];
  let l = 0;
  let r = target.length - 1;

  while (l < str.length) {
    while (r <= str.length) {
      let subStr = str.slice(l, r);
      let subStrDict = getCount(subStr);
      if (containsAll(subStrDict, targetDict)) {
        solutions.push(subStr);
        break;
      } else r++;
    }
    l++;
  }
  let result = solutions[0];
  for (const solution of solutions) {
    if (solution.length < result.length) {
      result = solution;
    }
  }

  return result;

  function getCount(str) {
    var count = {};
    for (let i = 0; i < str.length; i++) {
      if (count[str[i]] === undefined) {
        count[str[i]] = 1;
      } else {
        count[str[i]]++;
      }
    }
    return count;
  }

  function containsAll(dict, targetDict) {
    let res = true;
    for (const key in targetDict) {
      if (dict[key] !== undefined && dict[key] >= targetDict[key]) {
        continue;
      } else {
        res = false;
      }
    }
    return res;
  }
}
console.log(MinWindowSubstring(['aaffhkksemckelloe', 'fhea'])); //Output: affhkkse
console.log(MinWindowSubstring(['ahffaksfajeeubsne', 'jefaa'])); // Output: aksfaje
