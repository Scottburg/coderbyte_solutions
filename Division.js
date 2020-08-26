// Have the function Division(num1,num2) take both parameters being passed and return the Greatest Common Factor. That is, return
// the greatest number that evenly goes into both numbers with no remainder. For example: 12 and 16 both are divisible by 1, 2,
// and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3.

function Division(num1, num2) {
  function getFactors(num) {
    let res = [];
    if (num == 1) {
      return [1];
    }
    res.push(1, num);

    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        res.push(i);
      }
    }
    return res;
  }
  let factors = getFactors(parseInt(num2));
  factors.sort((a, b) => b - a);
  for (let i = 0; i < factors.length; i++) {
    if (parseInt(num1) % factors[i] === 0) return factors[i];
  }
}

// keep this function call here
console.log(Division(7, 3));
