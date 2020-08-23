function PrimeTime(num) {
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i < Math.sqrt(num); i = i + 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(PrimeTime(19)); //true;
console.log(PrimeTime(10)); //false;
