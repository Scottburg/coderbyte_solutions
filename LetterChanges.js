// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
// Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

function LetterChanges(str) {
  vowels = 'aeiou';
  strArr = str.split('');
  newArr = [];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].match(/(\d|\W)/)) {
      newArr.push(strArr[i]);
    } else if (
      vowels.includes(String.fromCharCode(strArr[i].charCodeAt(0) + 1))
    ) {
      newArr.push(
        String.fromCharCode(strArr[i].charCodeAt(0) + 1).toUpperCase()
      );
    } else if (strArr[i] === 'z') {
      newArr.push('A');
    } else {
      newArr.push(String.fromCharCode(strArr[i].charCodeAt(0) + 1));
    }
  }
  return newArr.toString().split(',').join('');
}
