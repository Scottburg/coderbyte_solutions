// Have the function RectangleArea(strArr) take the array of strings stored in strArr,
//  which will only contain 4 elements and be in the form (x y) where x and y are both integers,
//   and return the area of the rectangle formed by the 4 points on a Cartesian grid.
//   The 4 elements will be in arbitrary order. For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"]
//   then your program should return 6 because the width of the rectangle
//  is 3 and the height is 2 and the area of a rectangle is equal to the width * height.

function RectangleArea(strArr) {
  var x = [];
  var y = [];

  strArr = strArr.map((x) => x.replace(/[()]/g, '').split(' '));

  for (const j of strArr) {
    x.push(j[0]);
    y.push(j[1]);
  }
  var x = [...new Set(x)];
  var y = [...new Set(y)];

  y =
    y.length === 1
      ? parseInt(y[0])
      : parseInt(y[0]) > parseInt(y[1])
      ? parseInt(y[0]) - parseInt(y[1])
      : parseInt(y[1]) - parseInt(y[0]);
  x =
    x.length === 1
      ? parseInt(x[0])
      : parseInt(x[0]) > parseInt(x[1])
      ? parseInt(x[0]) - parseInt(x[1])
      : parseInt(x[1]) - parseInt(x[0]);

  return x * y;
}
