//Have the function CorrectPath(str) read the str parameter being passed, which will represent the movements made in a 5x5
// grid of cells starting from the top left position. The characters in the input string will be entirely composed of: r, l, u, d, ?.
// Each of the characters stand for the direction to take within the grid, for example: r = right, l = left, u = up, d = down. Your goal
// is to determine what characters the question marks should be in order for a path to be created to go from the top left of the grid all
// the way to the bottom right without touching previously travelled on cells in the grid.

// For example: if str is "r?d?drdd" then your program should output the final correct string that will allow a path to be formed from the
// top left of a 5x5 grid to the bottom right. For this input, your program should therefore return the string rrdrdrdd. There will only
// ever be one correct path and there will always be at least one question mark within the input string.

function CorrectPath(str) {
  let x = 0; // left/rigth axis
  let y = 0; // up/down axis
  let q = str.match(/\?/g).length; // matchs all question marks
  const fills = [];
  let result = str.split('');

  for (let i = 0; i < str.length; i++) {
    debugger;
    if (str[i] === 'r') x++;
    if (str[i] === 'l') x--;
    if (str[i] === 'd') y++;
    if (str[i] === 'u') y--;
  }

  function moveToRightBorder() {
    while (x !== 4) {
      if (x < 4) {
        fills.push('r');
        x++;
      } else {
        fills.push('l');
        x--;
      }
    }
  }

  function moveToBottomBorder() {
    while (y !== 4) {
      if (y < 4) {
        fills.push('d');
        y++;
      } else {
        fills.push('u');
        y--;
      }
    }
  }

  if (x > y) {
    moveToRightBorder();
    moveToBottomBorder();
  } else {
    moveToBottomBorder();
    moveToRightBorder();
  }

  while (fills.length < q) {
    if (fills[fills.length - 1] === 'r') {
      fills.push('r');
      x++;
      moveToRightBorder();
    }
    if (fills[fills.length - 1] === 'l') {
      fills.push('l');
      x--;
      moveToRightBorder();
    }
    if (fills[fills.length - 1] === 'd') {
      fills.push('d');
      y++;
      moveToBottomBorder();
    }
    if (fills[fills.length - 1] === 'u') {
      fills.push('u');
      y--;
      moveToBottomBorder();
    }
  }

  for (let i = 0; i < result.length; i++) {
    result[i] = result[i] === '?' ? fills.shift() : result[i];
  }

  return result.join('');
}

console.log(CorrectPath('r?d?drdd')); // rrdrdrdd
console.log(CorrectPath('???rrurdr?')); // dddrrurdrd
console.log(CorrectPath('drdr??rrddd?')); // drdruurrdddd
console.log(CorrectPath('dddd?uuuurrr????')); // ddddruuuurrrdddd
