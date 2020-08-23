// Have the function ASCIIConversion(str) take the str parameter being passed and return a new
// string where every character, aside from the space character, is replaced with its corresponding
// decimal character code. For example: if str is "dog" then your program should return the string
// 100111103 because d = 100, o = 111, g = 103.

function ASCIIConversion(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    str[i] !== ' ' ? (res += str.charCodeAt(i)) : (res += ' ');
  }
  return res;
}

// keep this function call here
console.log(ASCIIConversion('hello world')); //104101108108111 119111114108100
