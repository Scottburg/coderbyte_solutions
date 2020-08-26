// Have the function SimplePassword(str) take the str parameter being passed and determine if it passes as a valid password that follows the
// list of constraints:

//// 1. It must have a capital letter.
// // 2. It must contain at least one number.
// 3. It must contain a punctuation mark.
//// 4. It cannot have the word "password" in the string.
//// 5. It must be longer than 7 characters and shorter than 31 characters.

// If all the above constraints are met within the string, the your program should return the string true, otherwise your program
// should return the string false. For example: if str is "apple!M7" then your program should return "true".

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

function SimplePassword(str) {
  const regex = /[A-Z]/g;
  const regex2 = /[\.,\!\=\+]/g;
  const regexPW = /password/g;
  const regexDigit = /\d/g;
  if (
    str.length > 7 &&
    str.length < 31 &&
    regex2.test(str) &&
    regex.test(str) &&
    regexDigit.test(str) &&
    !regexPW.test(str.toLowerCase())
  )
    return true;

  return false;
}

console.log(SimplePassword('passWord123!!!!')); //false
console.log(SimplePassword('turkey90AAA=')); //true
console.log(SimplePassword('123456A+')); //true
