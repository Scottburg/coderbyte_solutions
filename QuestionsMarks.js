// Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers,
//  letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers
//   that add up to 10. If so, then your program should return the string true, otherwise it should return the string
//    false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question
// marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.

function QuestionsMarks(str) {
  let res = false;
  let ten = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      for (let j = i + 1; j < str.length; j++) {
        if (!isNaN(str[j])) {
          if (parseInt(str[j]) + parseInt(str[i]) === 10) {
            let count = 0;
            ten++;
            for (i; i < j; i++) {
              if (str[i] === '?') {
                count++;
              }
            }
            if (count === 3) {
              res = true;
            } else if (res === true) {
              res = false;
              break;
            }
          }
        }
      }
    }
  }
  return res;
}
