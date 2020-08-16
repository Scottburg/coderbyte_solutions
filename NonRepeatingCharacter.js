// Have the function NonrepeatingCharacter(str) take the str parameter being passed, which will
//  contain only alphabetic characters and spaces, and return the first non-repeating character.
//   For example: if str is "agettkgaeee" then your program should return k. The string will always
//    contain at least one character and there will always be at least one non-repeating character.

function NonrepeatingCharacter(str) {
  var len = str.length;
  var countObj = {};

  for (var i = 0; i < str.length; i++) {
    if (!countObj[str[i]]) {
      countObj[str[i]] = 1;
    } else {
      countObj[str[i]]++;
    }
  }
  for (var j = 0; j < str.length; j++) {
    if (countObj[str[j]] === 1) {
      return str[j];
    }
  }
}
