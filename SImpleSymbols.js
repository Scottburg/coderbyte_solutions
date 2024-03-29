// Have the function SimpleSymbols(str) take the str parameter being passed and determine
//  if it is an acceptable sequence by either returning the string true or false. The str parameter
//   will be composed of + and = symbols with several characters between them (ie. ++d+===+c++==a) and for
//    the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false.
//     The string will not be empty and will have at least one letter.

function SimpleSymbols(str) {
  let tof = true;

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[A-z]/)) {
      if ((str[i - 1] !== '+') | (str[i + 1] !== '+')) {
        tof = false;
        break;
      }
    }
  }

  return tof;
}
