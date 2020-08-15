// Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.

function SwapCase(str) {
  var swap = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      swap += str[i].toLowerCase();
    } else {
      swap += str[i].toUpperCase();
    }
  }

  return swap;
}
