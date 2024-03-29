// Have the function PreorderTraversal(strArr) take the array of strings stored in strArr, which will represent a binary tree with
// integer values in a format similar to how a binary heap is implemented with NULL nodes at any level represented with a #. Your
// goal is to return the pre-order traversal of the tree with the elements separated by a space. For example: if strArr is
// ["5", "2", "6", "1", "9", "#", "8", "#", "#", "#", "#", "4", "#"] then this tree looks like the following tree:
// For the input above, your program should return the string 5 2 1 9 6 8 4 because that is the pre-order traversal of the tree.

function PreorderTraversal(strArr, i = 0) {
  let res = [];
  if (strArr[i] === ('#' || undefined || null) || i >= strArr.length)
    return res;
  res.push(strArr[i]);
  res = res;
  res =
    res +
    ' ' +
    PreorderTraversal(strArr, i * 2 + 1) +
    PreorderTraversal(strArr, i * 2 + 2);
  return res;
}

console.log(PreorderTraversal(['4', '1', '5', '2', '#', '#', '#'])); //4125
console.log(
  PreorderTraversal([
    '5',
    '2',
    '6',
    '1',
    '9',
    '#',
    '8',
    '#',
    '#',
    '#',
    '#',
    '4',
    '#',
  ])
); //5 2 1 9 6 8 4
