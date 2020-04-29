/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
*/

//SOLUTION:
//Time: 0(n*m)
//Space: 0(n)

var flip = function (grid, x, y) {
  if (
    x >= grid.length ||
    x < 0 ||
    y >= grid[0].length ||
    y < 0 ||
    grid[x][y] == 0
  ) {
    return;
  }
  grid[x][y] = 0;
  flip(grid, x + 1, y);
  flip(grid, x - 1, y);
  flip(grid, x, y + 1);
  flip(grid, x, y - 1);
};

var numIslands = function (grid) {
  let counter = 0;
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (grid[x][y] == 1) {
        counter++;
        flip(grid, x, y);
      }
    }
  }
  return counter;
};
