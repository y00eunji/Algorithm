const [INPUT, ...ARR] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = INPUT.split(' ').map(Number);
const board = ARR.splice(0, N).map((v) => v.split(' ').map(Number));
const points = ARR.map((v) => v.split(' ').map(Number));

const dp = [];

for (let i = 0; i < N; i++) {
  const temp = [0];

  for (let j = 0; j < N; j++) {
    temp.push(temp[temp.length - 1] + board[i][j]);
  }
  dp.push(temp);
}

const answer = points.map(([x1, y1, x2, y2]) => {
  let sum = 0;

  for (let i = x1; i <= x2; i++) {
    sum += dp[i - 1][y2] - dp[i - 1][y1 - 1];
  }

  return sum;
});

console.log(answer.join('\n'));
