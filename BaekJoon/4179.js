const [INPUT, ...ARR] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = INPUT.split(' ').map(Number);
const arr = ARR.map((v) => v.split(''));
const visitedF = Array.from(Array(N), () => Array(M).fill(Infinity));
const visitedJ = Array.from(Array(N), () => Array(M).fill(-1));

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

const bfsJ = (r, c) => {
  const queue = [];

  queue.push([r, c]);
  visitedJ[r][c] += 1;

  while (queue.length) {
    const [curR, curC] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nextR = curR + dx[i];
      const nextC = curC + dy[i];

      if (nextR < 0 || nextC < 0 || nextR >= N || nextC >= M)
        return visitedJ[curR][curC] + 1;

      if (arr[nextR][nextC] === '#' || arr[nextR][nextC] === 'F') continue;

      if (visitedJ[nextR][nextC] > -1) continue;

      if (visitedF[nextR][nextC] > visitedJ[curR][curC] + 1) {
        visitedJ[nextR][nextC] = visitedJ[curR][curC] + 1;
        queue.push([nextR, nextC]);
      }
    }
  }
  return 'IMPOSSIBLE';
};

const bfsF = (queue) => {
  while (queue.length) {
    const [curR, curC] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nextR = curR + dx[i];
      const nextC = curC + dy[i];

      if (
        nextR >= 0 &&
        nextC >= 0 &&
        nextR < N &&
        nextC < M &&
        arr[nextR][nextC] === '.' &&
        visitedF[nextR][nextC] === Infinity
      ) {
        visitedF[nextR][nextC] = visitedF[curR][curC] + 1;
        queue.push([nextR, nextC]);
      }
    }
  }
};

const queue = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 'F') {
      queue.push([i, j]);
      visitedF[i][j] = 0;
    }
  }
}

bfsF(queue);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 'J') console.log(bfsJ(i, j));
  }
}
