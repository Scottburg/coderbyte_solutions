//Have the function CorrectPath(str) read the str parameter being passed, which will represent the movements made in a 5x5
// grid of cells starting from the top left position. The characters in the input string will be entirely composed of: r, l, u, d, ?.
// Each of the characters stand for the direction to take within the grid, for example: r = right, l = left, u = up, d = down. Your goal
// is to determine what characters the question marks should be in order for a path to be created to go from the top left of the grid all
// the way to the bottom right without touching previously travelled on cells in the grid.

// For example: if str is "r?d?drdd" then your program should output the final correct string that will allow a path to be formed from the
// top left of a 5x5 grid to the bottom right. For this input, your program should therefore return the string rrdrdrdd. There will only
// ever be one correct path and there will always be at least one question mark within the input string.

function CorrectPath(str) {
  let x = 0;
  let y = 0;
  let unknowns = 0;
  missingLetters = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'r') x++;
    if (str[i] === 'l') x--;
    if (str[i] === 'd') y++;
    if (str[i] === 'u') y--;
    if (str[i] === '?') unknowns++;
  }
  console.log(`X:${x}, Y:${y}, ???s ${unknowns}`);

  function addX() {
    while (x !== 4) {
      if (x > 4) {
        x--;
        missingLetters.push('l');
      } else {
        x++;
        missingLetters.push('r');
      }
    }
  }

  function addY() {
    while (y !== 4) {
      if (y > 4) {
        y--;
        missingLetters.push('u');
      } else {
        y++;
        missingLetters.push('d');
      }
    }
  }

  if (x > y) {
    addX();
    addY();
  }
  //
  if (y >= x) {
    addY();
    addX();
  }

  while (missingLetters.length < unknowns.length) {
    var pos = missingLetters.length - 1;
    if (missingLetters[pos] === 'r') {
      x += 1;
      missingLetters.push('r');
      addX();
    }
    if (missingLetters[pos] === 'l') {
      x -= 1;
      missingLetters.push('l');
      addX();
    }
    if (missingLetters[pos] === 'd') {
      y += 1;
      missingLetters.push('d');
      addY();
    }
    if (missingLetters[pos] === 'u') {
      y -= 1;
      missingLetters.push('u');
      addY();
    }
  }

  var newStr = str.split('');
  for (var j = 0; j < str.length; j++) {
    newStr[j] === '?' ? (newStr[j] = missingLetters.shift()) : 'null';
  }
  return newStr.join('');
}

console.log(CorrectPath('r?d?drdd')); // rrdrdrdd
console.log(CorrectPath('???rrurdr?')); // dddrrurdrd
console.log(CorrectPath('drdr??rrddd?')); // drdruurrdddd
console.log(CorrectPath('dddd?uuuurrr????')); // ddddruuuurrrdddd
