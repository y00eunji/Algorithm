const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

/*
1. 벽을 세운다
2. 바이러스를 퍼트린다 -> 벽이 없다면 상하좌우로 퍼질 수 있다
3. 안전지대 갯수를 구한다
*/

const [col, row] = input.shift().split(' ').map(Number);
const board = input.map((i) => i.split(' ').map(Number));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let ans = 0;

const countingSafeZone = (arr) => {
  let cnt = 0;
  let queue = [];

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (arr[i][j] === 2) queue.push([i, j]);
    }
  }

  while (queue.length) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [curX + dx[i], curY + dy[i]];

      if (nx >= 0 && nx < col && ny >= 0 && ny < row && arr[nx][ny] === 0) {
        arr[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    }
  }

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (arr[i][j] === 0) {
        cnt += 1;
      }
    }
  }

  return cnt;
};

const dfs = (cnt) => {
  if (cnt === 3) {
    let arr = board.map((v) => [...v]);
    let cntOfSafe = countingSafeZone(arr);

    ans = Math.max(ans, cntOfSafe);
    return;
  }

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (board[i][j] === 0) {
        board[i][j] = 1;
        dfs(cnt + 1);
        board[i][j] = 0;
      }
    }
  }
};

dfs(0);
console.log(ans);
