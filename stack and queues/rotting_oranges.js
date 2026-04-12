/*
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Example 1:


Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const queue = [];
  let freshCount = 0;
  // Scan the matrix for rotten and fresh tomatoes
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        freshCount++;
      }
    }
  }

  if (freshCount === 0) return 0; 

  let minutes = 0;
  // The 4 directions: Up, Down, Left, Right
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length > 0 && freshCount > 0) {
    let currQueueSize = queue.length;

    for (let q = 0; q < currQueueSize; q++) {
      const [currRow, currCol] = queue.shift();

      for (const [rowChange, colChange] of directions) {
        const nextRow = currRow + rowChange;
        const nextCol = currCol + colChange;

        //check boundaries
        if (
          nextRow >= 0 &&
          nextRow < m &&
          nextCol >= 0 &&
          nextCol < n &&
          grid[nextRow][nextCol] === 1
        ) {
            // Infect the orange
            grid[nextRow][nextCol] = 2;
            freshCount--;
            queue.push([nextRow, nextCol]);
        }
      }
    }

    // Increment One minute
    minutes++;
  }

  return freshCount === 0? minutes : -1;
};

const grid = [[2,1,1],[1,1,0],[0,1,1]];
console.log(orangesRotting(grid));
