// Have the function CoinDeterminer(num) take the input, which will be an integer ranging from 1 to 250, and return an
// integer output that will specify the least number of coins, that when added, equal the input integer. Coins are based
// on a system as follows: there are coins representing the integers 1, 5, 7, 9, and 11. So for example: if num is 16, then
//the output should be 2 because you can achieve the number 16 with the coins 9 and 7. If num is 25, then the output should be
// 3 because you can achieve 25 with either 11, 9, and 5 coins or with 9, 9, and 7 coins.

function CoinDeterminer(num) {
  var count = 0;

  while (num > 10) {
    if (num % 11 > 1 && num % 11 < 5) {
      num -= 9;
      count++;
    } else {
      num -= 11;
      count++;
    }
  }

  while (num > 8) {
    if (num % 9 > 1 && num % 9 < 5) {
      num -= 7;
      count++;
    } else {
      num -= 9;
      count++;
    }
  }

  while (num > 6) {
    num -= 7;
    count++;
  }

  while (num > 4) {
    num -= 5;
    count++;
  }

  while (num > 0) {
    num -= 1;
    count++;
  }

  return count;
}
// keep this function call here
console.log(CoinDeterminer(25)); //3
console.log(CoinDeterminer(37)); //5
console.log(CoinDeterminer(14)); //2
