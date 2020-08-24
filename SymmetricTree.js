// Have the function SymmetricTree(strArr) take the array of strings stored in strArr, which will represent a binary tree,
// and determine if the tree is symmetric (a mirror image of itself). The array will be implemented similar to how a binary
//  heap is implemented, except the tree may not be complete and NULL nodes on any level of the tree will be represented with a #.
//  For example: if strArr is ["1", "2", "2", "3", "#", "#", "3"] then this tree looks like the following:
// For the input above, your program should return the string true because the binary tree is symmetric.

function SymmetricTree(strArr) {
  let power = 0,
    count = 0;
  levels = [];
  while (power < strArr.length) {
    power = Math.pow(2, count);
    levels.push(strArr.splice(0, power)); // splices removes from the original array
    count++;
  }
  for (el of levels) {
    if (el.join('') !== el.reverse().join('')) return false;
  }

  return true;
}

// keep this function call here
console.log(SymmetricTree(['4', '3', '4'])); //false
console.log(SymmetricTree(['10', '2', '2', '#', '1', '1', '#'])); //true
