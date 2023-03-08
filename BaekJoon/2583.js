const INPUT = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map(Number));

const [M, N, lines] = INPUT[0];
const squares = Array.from(Array(M), () => Array(N).fill(0));

// 인접 행렬 만들기
for (let i = 1; i <= lines; i++) {
  const [x, y, w, z] = INPUT[i];
  for (let j = x; j < w; j++) {
    for (let k = y; k < z; k++) {
      squares[k][j] = 1;
    }
  }
}

// 탐색
let areaArr = [];
const visited = Array.from(Array(M), () => Array(N).fill(false));

const bfs = (row, col) => {
  let area = 1;
  const queue = [[row, col]];
  visited[row][col] = true;

  while (queue.length > 0) {
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    const [curRow, curCol] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nextRow = curRow + dx[i];
      const nextCol = curCol + dy[i];

      if (nextRow < 0 || nextCol < 0 || nextRow >= M || nextCol >= N) continue;

      if (
        squares[nextRow][nextCol] === 0 &&
        visited[nextRow][nextCol] === false
      ) {
        visited[nextRow][nextCol] = true;
        queue.push([nextRow, nextCol]);
        area += 1;
      }
    }
  }
  areaArr.push(area);
};

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (squares[i][j] === 0 && visited[i][j] === false) {
      bfs(i, j);
    }
  }
}

console.log(areaArr.length);
console.log(areaArr.sort((a, b) => a - b).join(' '));
