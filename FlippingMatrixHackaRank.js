function flippingMatrix(matrix) {
  let res = 0;

  for (let i = 0; i < matrix.length / 2; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      res += Math.max(
        matrix[i][j],
        matrix[i][matrix.length - 1 - j],
        matrix[matrix.length - 1 - i][j],
        matrix[matrix.length - 1 - i][matrix.length - 1 - j]
      );
    }
  }
  return res;
}

console.log(
  flippingMatrix([
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
  ])
);
