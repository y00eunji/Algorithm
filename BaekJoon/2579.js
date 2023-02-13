const INPUT = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const N = INPUT.shift();
const dp = new Array(N).fill(-1);
dp[0] = INPUT[0];
dp[1] = dp[0] + INPUT[1];
dp[2] = Math.max(dp[0] + INPUT[2], INPUT[1] + INPUT[2]);

function bottomUp(n) {
  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + INPUT[i], dp[i - 3] + INPUT[i] + INPUT[i - 1]);
  }
}

bottomUp(N);
console.log(dp[N - 1]);
