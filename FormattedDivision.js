// Have the function FormattedDivision(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string
// with properly formatted commas and 4 significant digits after the decimal place. For example: if num1 is 123456789 and num2 is 10000 the
// output should be "12,345.6789". The output must contain a number in the one's place even if it is a zero.

function FormattedDivision(num1, num2) {
  let res = (num1 / num2).toFixed(4).toString();
  if (res.length <= 8) {
    return res;
  }
  let commas = Math.ceil((res.length - 8) / 3);
  let i = -8;
  while (commas > 0) {
    res = res.slice(0, i) + ',' + res.slice(i);
    commas--;
    i = i - 4;
  }
  return res;
}

// keep this function call here
console.log(FormattedDivision(2, 3)); // 0.6667
console.log(FormattedDivision(10, 10)); // 1.0000
console.log(FormattedDivision(123456789, 10000)); // 12,345.6789
console.log(FormattedDivision(123456789, 1)); // 123,456,789.0000
