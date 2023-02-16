function gridChallenge(grid) {
  const sortedGrid = grid.map((el) => el.split('').sort());
  const columns = [];

  for (let i = 0; i < grid[0].length; i++) {
    columns[i] = [];
    for (let j = 0; j < sortedGrid.length; j++) {
      columns[i].push(sortedGrid[j][i]);
    }
    const temp = columns[i].join('');
    if (temp !== columns[i].sort().join('')) {
      return 'NO';
    }
  }
  return 'YES';
}

console.log(gridChallenge(['mpxz', 'abcd', 'wlmf'])); //'NO'
console.log(gridChallenge(['abc', 'hjk', 'mpq', 'rtv'])); //YES
