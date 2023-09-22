let input = require('fs')
  .readFileSync('input.txt') //"/dev/stdin"
  .toString()
  .split('\n')
  .map((val) => val.trim());
let n = +input.shift();
let scv = input
  .shift()
  .split(' ')
  .map((v) => +v);

// 모든 경우
let arr = [
  [9, 3, 1],
  [9, 1, 3],
  [3, 9, 1],
  [3, 1, 9],
  [1, 3, 9],
  [1, 9, 3],
];

// 방문 배열
let vis = Array.from({ length: 61 }).map((_) =>
  new Array(61).fill(0).map((__) => new Array(61).fill(0))
);

const bfs = (start) => {
  let queue = [];
  vis[start[0]][start[1]][start[2]] = 1;
  queue.push(start);

  while (queue.length) {
    let [c1, c2, c3] = queue.shift();
    for (let i = 0; i < arr.length; i++) {
      let n1 = Math.max(0, c1 - arr[i][0]);
      let n2 = Math.max(0, c2 - arr[i][1]);
      let n3 = Math.max(0, c3 - arr[i][2]);

      if (vis[0][0][0]) break;
      if (vis[n1][n2][n3]) continue;
      vis[n1][n2][n3] = vis[c1][c2][c3] + 1;
      queue.push([n1, n2, n3]);
    }
  }
  return vis[0][0][0] - 1;
};

function solution() {
  let ans = 0;
  for (let i = 0; i < 3; i++) {
    if (!scv[i]) scv[i] = 0;
  }

  ans = bfs(scv);

  console.log(ans);
}

solution();
