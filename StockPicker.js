// Have the function StockPicker(arr) take the array of numbers stored in arr which will contain integers that represent the
// amount in dollars that a single stock is worth, and return the maximum profit that could have been made by buying stock on
// day x and selling stock on day y where y > x. For example: if arr is [44, 30, 24, 32, 35, 30, 40, 38, 15] then your program
// should return 16 because at index 2 the stock was worth $24 and at index 6 the stock was then worth $40, so if you bought the
// stock at 24 and sold it at 40, you would have made a profit of $16, which is the maximum profit that could have been made with
// this list of stock prices.

// If there is not profit that could have been made with the stock prices, then your program should return -1. For example: arr
// is [10, 9, 8, 2] then your program should return -1.

function StockPicker(arr) {
  let bestAtPoint = Array(5).fill(0);
  // bestAtPoint[bestAtPoint.length -1] = 0
  let res = 0;
  for (let i = arr.length - 2; i >= 0; i--) {
    let temp = arr[i + 1] - arr[i];
    if (bestAtPoint[i + 1] > 0) {
      temp += bestAtPoint[i + 1];
    }
    bestAtPoint[i] = temp;
    console.log(bestAtPoint);
    if (temp > res) {
      res = temp;
    }
  }

  return res > 0 ? res : -1;
}

// keep this function call here
console.log(StockPicker([10, 12, 4, 5, 9])); //5
console.log(StockPicker([14, 20, 4, 12, 5, 11])); //8
