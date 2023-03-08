const INPUT = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map(Number));

const N = INPUT.shift()[0];

let max = 1;
let visited = Array.from(new Array(INPUT.length), () =>
  new Array(INPUT.length).fill(false)
);
let count = 0;

for (let z = 1; z < 100; z++) {
  visited = Array.from(new Array(INPUT.length), () =>
    new Array(INPUT.length).fill(false)
  );

  count = 0;
  for (let i = 0; i < INPUT.length; i++) {
    for (let j = 0; j < INPUT[0].length; j++) {
      if (INPUT[i][j] > z && !visited[i][j]) bfs(z, i, j);
    }
  }
  max = Math.max(count, max);
}

function bfs(rain, row, col) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const queue = [[row, col]];

  visited[row][col] = true;

  while (queue.length > 0) {
    const [curRow, curCol] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nextRow = curRow + dx[i];
      const nextCol = curCol + dy[i];

      if (
        nextRow < 0 ||
        nextCol < 0 ||
        nextRow >= INPUT.length ||
        nextCol >= INPUT.length
      )
        continue;

      if (INPUT[nextRow][nextCol] <= rain) continue;

      if (!visited[nextRow][nextCol]) {
        visited[nextRow][nextCol] = true;
        queue.push([nextRow, nextCol]);
      }
    }
  }
  count++;
}

console.log(max);
