const INPUT = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const N = parseInt(INPUT, 10);

let m = Number.POSITIVE_INFINITY;

function dfs(N, cnt) {
  if (N <= 0) return;
  if (N === 1) {
    m = Math.min(m, cnt);
    return;
  }

  if (N % 3 === 0) dfs(N / 3, cnt + 1);
  if (N % 2 === 0) dfs(N / 2, cnt + 1);
  dfs(N - 1, cnt + 1);
}

function bfs(N) {
  const queue = [];

  queue.push(N);
  let level = 0;

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      if (queue[0] === 1) {
        return level;
      }

      let num = queue.shift();
      if (num % 3 === 0) queue.push(num / 3);
      if (num % 2 === 0) queue.push(num / 2);
      queue.push(num - 1);
    }

    level += 1;
  }
}

// 재귀
function topDown(N) {
  const arr = Array(N + 1).fill(Number.POSITIVE_INFINITY);
  arr[N] = 0;

  const dfs = (num) => {
    if (num % 3 === 0 && arr[num / 3] > arr[num] + 1) {
      arr[num / 3] = arr[num] + 1;
      dfs(num / 3);
    }

    if (num % 2 === 0 && arr[num / 2] > arr[num] + 1) {
      arr[num / 2] = arr[num] + 1;
      dfs(num / 2);
    }

    if (num - 1 >= 1 && arr[num - 1] > arr[num] + 1) {
      arr[num - 1] = arr[num] + 1;
      dfs(num - 1);
    }
  };

  dfs(N);
  return arr[1];
}

dfs(N, 0);

console.log(topDown(N));
