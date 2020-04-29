/*
Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
You receive a valid board, made of only battleships or empty slots.
Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
Example:
X..X
...X
...X
In the above board there are 2 battleships.
Invalid Example:
...X
XXXX
...X
This is an invalid board that you will not receive - as battleships will always have a cell separating between them.
*/

//SOLUTION:
//Time: 0(n*m)
//Space: 0(n)

var flip = function (board, x, y) {
  if (
    x < 0 ||
    x >= board.length ||
    y < 0 ||
    y >= board[0].length ||
    board[x][y] === '.'
  ) {
    return;
  }

  board[x][y] = '.';
  flip(board, x + 1, y);
  flip(board, x - 1, y);
  flip(board, x, y + 1);
  flip(board, x, y - 1);
};

var countBattleships = function (board) {
  let ships = 0;
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      if (board[x][y] === 'X') {
        ships++;
        flip(board, x, y);
      }
    }
  }
  return ships;
};
