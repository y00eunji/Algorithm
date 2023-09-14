const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [row, col] = input.shift().split(' ').map(Number);

let arr = input.map((i) => i.split(''));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function bfs(y, x) {
  const queue = [];
  let visited = Array.from(Array(row), () => Array(col).fill(0));
  let maxDist = 0;

  queue.push([y, x]);
  visited[y][x] = 1;

  while (queue.length) {
    const cur = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = cur[1] + dx[i];
      const ny = cur[0] + dy[i];

      if (0 <= ny && ny < row && 0 <= nx && nx < col) {
        if (!visited[ny][nx] && arr[ny][nx] === 'L') {
          visited[ny][nx] = visited[cur[0]][cur[1]] + 1;
          maxDist = Math.max(maxDist, visited[ny][nx]);
          queue.push([ny, nx]);
        }
      }
    }
  }
  return maxDist - 1;
}

let ans = 0;

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (arr[i][j] === 'L') {
      ans = Math.max(ans, bfs(i, j));
    }
  }
}

console.log(ans);
