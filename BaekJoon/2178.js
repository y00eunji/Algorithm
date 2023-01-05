const INPUT = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = INPUT.shift().split(' ').map(Number);

const miro = INPUT.map((v) => v.split('').map(Number));

function dfs(row, col) {
  const dR = [0, 0, 1, -1];
  const dC = [1, -1, 0, 0];
  const queue = [];
  queue.push([row, col]);

  while (queue.length > 0) {
    const [curRow, curCol] = queue.shift();

    if (curRow == N - 1 && curCol == M - 1) {
      return miro[curRow][curCol];
    }

    for (let i = 0; i < 4; i++) {
      const nextRow = curRow + dR[i];
      const nextCol = curCol + dC[i];

      if (nextRow < 0 || nextCol < 0 || nextRow >= N || nextCol >= M) continue;

      if (miro[nextRow][nextCol] !== 1) continue;

      miro[nextRow][nextCol] = miro[curRow][curCol] + 1;
      queue.push([nextRow, nextCol]);
    }
  }
}

miro[0][0] = 0;
console.log(dfs(0, 0) + 1);
