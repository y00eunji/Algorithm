const [INPUT_N, ...INPUT_ARR] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = INPUT_N.split(' ').map(Number);
const ARR = INPUT_ARR.map((v) => v.split(' ').map(Number));
const startNode = N[2];
const matrix = new Array(N[0]).fill(0).map(() => new Array(N[0]).fill(0));

for (let i = 0; i < ARR.length; i++) {
  let from = ARR[i][0] - 1;
  let to = ARR[i][1] - 1;

  matrix[from][to] = 1;
  matrix[to][from] = 1;
}

let visited = Array.from({ length: N[0] }).fill(0);

let dfsResult = '';
let bfsResult = '';

function dfs(start) {
  // 1. 종료조건
  if (!visited.includes(0)) return;

  // 2. 탐색시 방문했다고 표시하기
  visited[start] = 1;
  dfsResult += start + 1 + ' ';

  // 3. 인접한 노드 탐색하기
  for (let i = 0; i < matrix.length; i++) {
    if (visited[i] === 0 && matrix[start][i] === 1) {
      dfs(i);
    }
  }
}

function bfs(start) {
  const queue = [];
  queue.push(start);

  const visited = Array(N[0]).fill(0);
  visited[start] = 1;

  while (queue.length) {
    let cur = queue.shift();
    bfsResult += cur + 1 + ' ';

    for (let i = 0; i < matrix.length; i++) {
      if (visited[i] === 0 && matrix[cur][i] === 1) {
        queue.push(i);
        visited[i] = 1;
      }
    }
  }
}

dfs(startNode - 1);
bfs(startNode - 1);
console.log(dfsResult);
console.log(bfsResult);
