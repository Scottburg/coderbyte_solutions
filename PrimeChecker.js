// Have the function PrimeChecker(num) take num and return 1 if any arrangement of num comes out to be a prime number,
// otherwise return 0. For example: if num is 910, the output should be 1 because 910 can be arranged into 109 or 019,
// both of which are primes.

function PrimeChecker(num) {
  function Prime(num) {
    if (num === 2) {
      return true;
    }
    if (num === 1 || num % 2 === 0) {
      return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i = i + 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function permut(string) {
    if (string.length < 2) return [string];
    var permutations = [];
    for (var i = 0; i < string.length; i++) {
      var char = string[i];

      if (string.indexOf(char) != i) continue;

      var remainingString =
        string.slice(0, i) + string.slice(i + 1, string.length);

      var subLoop = permut(remainingString);

      for (var subPermutation of subLoop)
        permutations.push(char + subPermutation);
    }
    return permutations;
  }
  let res = 0;
  let digits = num.toString();
  let powerSet = permut(digits);
  console.log('PrimeChecker -> powerSet', powerSet);
  powerSet.forEach((combo) => {
    debugger;
    if (Prime(parseInt(combo))) {
      res = 1;
    }
  });

  return res;
}

// keep this function call here
console.log(PrimeChecker(100)); //0
console.log(PrimeChecker(598)); //1
