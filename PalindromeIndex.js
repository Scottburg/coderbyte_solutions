function palindromeIndex(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      console.log('HERE AGAIN');
      // try removing left character
      let temp = s.substring(0, left) + s.substring(left + 1);
      if (isPalindrome(temp)) {
        return left;
      }

      // try removing right character
      temp = s.substring(0, right) + s.substring(right + 1);
      if (isPalindrome(temp)) {
        return right;
      }

      // both removals failed, no palindrome can be created
      console.log('no palindrome can be created');
      return -1;
    }

    // characters match, move pointers inward
    left++;
    right--;
  }

  // entire string is a palindrome
  // return -1;
}

function isPalindrome(s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// console.log(palindromeIndex('aaab')); //3
// console.log(palindromeIndex('baa')); //0
console.log(palindromeIndex('rerqer')); //-1
