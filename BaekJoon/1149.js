const [N, ...M] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const arr = M.map((v) => v.split(' ').map(Number));
let min = Number.POSITIVE_INFINITY;

function dfs(level, house, sum) {
  if (level === N - 1) {
    min = Math.min(min, sum);
    return;
  }
  level++;

  if (house === 0) {
    dfs(level, 1, sum + arr[level][1]);
    dfs(level, 2, sum + arr[level][2]);
  }

  if (house === 1) {
    dfs(level, 0, sum + arr[level][0]);
    dfs(level, 2, sum + arr[level][2]);
  }

  if (house === 2) {
    dfs(level, 1, sum + arr[level][1]);
    dfs(level, 0, sum + arr[level][0]);
  }
}

const dpArr = Array.from(Array(Number(N)), () => new Array(3));

function dp() {
  dpArr[0][0] = arr[0][0];
  dpArr[0][1] = arr[0][1];
  dpArr[0][2] = arr[0][2];

  for (let i = 1; i < N; i++) {
    dpArr[i][0] = arr[i][0];
    dpArr[i][1] = arr[i][1];
    dpArr[i][2] = arr[i][2];

    for (let j = 0; j < 3; j++) {
      if (j === 0) {
        dpArr[i][j] += Math.min(dpArr[i - 1][1], dpArr[i - 1][2]);
      }
      if (j === 1) {
        dpArr[i][j] += Math.min(dpArr[i - 1][0], dpArr[i - 1][2]);
      }
      if (j === 2) {
        dpArr[i][j] += Math.min(dpArr[i - 1][1], dpArr[i - 1][0]);
      }
    }
  }

  console.log(Math.min(...dpArr[N - 1]));
}

// for (let i = 0; i < arr.length; i++) {
//   dfs(0, i, arr[0][i]);
// }

dp();
