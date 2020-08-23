// Have the function GroupTotals(strArr) read in the strArr parameter containing key:value pairs where the key is a string and the
// value is an integer. Your program should return a string with new key:value pairs separated by a comma such that each key appears
// only once with the total values summed up.

// For example: if strArr is ["B:-1", "A:1", "B:3", "A:5"] then your program should return the string A:6,B:2.

// Your final output string should return the keys in alphabetical order. Exclude keys that have a value of 0 after being summed up
function GroupTotals(strArr) {
  strArr = strArr.map((a) => a.split(':'));
  let freqDict = {};
  let res = [];
  for (const el of strArr) {
    freqDict[el[0]]
      ? (freqDict[el[0]] = freqDict[el[0]] + parseInt([el[1]]))
      : (freqDict[el[0]] = parseInt(el[1]));
  }
  var sortedKeys = Object.keys(freqDict).sort(); // sort the keys if you sort after this it doesn't seem to work well;

  for (var key of sortedKeys) {
    if (freqDict[key] !== 0) {
      res.push(key + ':' + freqDict[key]);
    }
  }
  return res.join(',');
}

// keep this function call here
console.log(GroupTotals(['X:-1', 'Y:1', 'X:-4', 'B:3', 'X:5'])); // B:3,Y:1
console.log(GroupTotals(['1:1', '2:1', '2:1', '10:3', '10:7'])); // 1:1,10:10,2:2
