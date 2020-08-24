// Have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the
// num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places in the
// alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. For example
// if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt".

function CaesarCipher(str, num) {
  let res = '';
  let regex = /[^A-Za-z]/g;
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      res += str[i];
      continue;
    }
    let charCode = str.charCodeAt(i) - 96;
    charCode < 0
      ? (charCode = ((charCode + 32 + num) % 26) + 64)
      : (charCode = ((charCode + num) % 26) + 96);
    res += String.fromCharCode(charCode);
  }
  return res;
}

// keep this function call here
console.log(CaesarCipher('Hello', 4)); // Lipps
console.log(CaesarCipher('world!', 1)); // xpsme!
console.log(CaesarCipher('byte-dash', 0)); // byte-dash
console.log(CaesarCipher('coderBYTE', 2)); // eqfgtDAVG
