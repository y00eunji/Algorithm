const [N, M, ...INPUT_ARR] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const n = Number(N);
const m = Number(M);
const arr = INPUT_ARR.map((v) => v.split(' ').map(Number));
const graph = Array.from(Array(n + 1), () => new Array());
const visited = new Array(n + 1).fill(false);
let answer = 0;

for (let i = 0; i < m; i++) {
  const [start, end] = arr[i];
  graph[start].push(end);
  graph[end].push(start);
}

visited[1] = 1;

const dfs = (start) => {
  for (const end of graph[start]) {
    if (!visited[end]) {
      visited[end] = true;
      answer++;
      dfs(end);
    }
  }
};

dfs(1);
console.log(answer);
