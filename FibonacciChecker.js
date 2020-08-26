// Have the function FibonacciChecker(num) return the string yes if the number given is part of the Fibonacci sequence.
// This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first
// two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no.

function FibonacciChecker(num) {
  if (num === 0 || num === 1 || num == 2) {
    return 'yes';
  }
  let n1 = 1;
  let n2 = 2;
  let current = n1 + n2;
  debugger;
  while (current <= num) {
    if (num === current) {
      return 'yes';
    }
    temp = current;
    current = current + n2;
    n1 = n2;
    n2 = temp;
  }

  return 'no';
}

// keep this function call here
console.log(FibonacciChecker(34)); //yes
console.log(FibonacciChecker(9)); //no
