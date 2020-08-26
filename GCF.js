// Have the function GCF(arr) take the array of numbers stored in arr which will always contain only two positive integers, and return
// the greatest common factor of them. For example: if arr is [45, 12] then your program should return 3. There will always be two
// elements in the array and they will be positive integers.

function GCF(arr) {
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
  let factors = getFactors(parseInt(arr[0]));
  factors.sort((a, b) => b - a);
  console.log('GCF -> factors', factors);
  for (let i = 0; i < factors.length; i++) {
    if (parseInt(arr[1]) % factors[i] === 0) return factors[i];
  }
}

console.log(GCF([1, 6])); //1
console.log(GCF([12, 28])); //4
