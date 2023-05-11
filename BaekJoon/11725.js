const [N, ...ARR] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const arr = ARR.map((v) => v.split(' ').map(Number));
const graphArr = Array.from(Array(Number(N)), () => new Array());
const visited = new Array(N).fill(false);
const answer = new Array(N).fill(0);

arr.forEach((v) => {
  const [from, to] = v;

  graphArr[from - 1].push(to - 1);
  graphArr[to - 1].push(from - 1);
});

const dfs = (start) => {
  visited[start] = true;

  const nexts = graphArr[start];

  nexts.forEach((next) => {
    if (!visited[next]) {
      answer[next] = start + 1;
      dfs(next);
    }
  });
};

dfs(0);
answer.splice(0, 1);
console.log(answer.join('\n'));
