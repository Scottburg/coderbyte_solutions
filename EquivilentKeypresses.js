// Have the function EquivalentKeypresses(strArr) read the array of strings stored in strArr which will contain 2
//  strings representing two comma separated lists of keypresses. Your goal is to return the string true if the keypresses
//   produce the same printable string and the string false if they do not. A keypress can be either a printable character
//    or a backspace represented by -B. You can produce a printable string from such a string of keypresses by having backspaces
//     erase one preceding character.

// For example: if strArr contains ["a,b,c,d", "a,b,c,c,-B,d"] the output should return true because those keypresses produce
//  the same printable string. The array given will not be empty. The keypresses will only contain letters from the alphabet and
//   backspaces.

function EquivalentKeypresses(strArr) {
  let ps1 = strArr[0].split(',');
  let ps2 = strArr[1].split(',');

  // convert to printable string
  function printString(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '-B' && i !== 0) {
        arr.splice(i - 1, 2);
      } else if (arr[i] === '-B' && i === 0) {
        arr.shift();
        i--;
      }
    }
  }
  ps1 = ps1.toString();
  ps2 = ps2.toString();

  return ps1 === ps2;
}
