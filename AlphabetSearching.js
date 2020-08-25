//Have the function AlphabetSearching(str) take the str parameter being passed and return the string true if every single
// letter of the English alphabet exists in the string, otherwise return the string false. For example: if str is "zacxyjbbkfgtbhdaielqrm45pnsowtuv"
// then your program should return the string true because every character in the alphabet exists in this string even though some characters appear
// more than once.

function AlphabetSearching(str) {
  let alphabet = 'qwertyuiopasdfghjklzxcvbnm';
  str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    alphabet = alphabet.replace(str[i], '');
  }

  return alphabet.length === 0 ? true : false;
}

console.log(AlphabetSearching('abcdefghijklmnopqrstuvwxyyyy')); //false
console.log(AlphabetSearching('abc123456kmo')); //false
