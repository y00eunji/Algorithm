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

const dp = [];
dp[0] = 1;
dp[1] = 2;
dp[2] = 4;
dp[3] = 7;

function dpfun(num) {
  for (let i = 4; i < num; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
  }
}

function getCase(num) {
  dpfun(num);
  return dp[num - 1];
}

for (let i = 0; i < N; i++) {
  console.log(getCase(M[i]));
}
