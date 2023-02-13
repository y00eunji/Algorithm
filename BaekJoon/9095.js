const [N, ...M] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function dfs(num) {
  if (num < 0) return 0;
  if (num === 0) return 1;

  return dfs(num - 1) + dfs(num - 2) + dfs(num - 3);
}

function getCase(num) {
  return dfs(num);
}

for (let i = 0; i < N; i++) {
  console.log(getCase(M[i]));
}
