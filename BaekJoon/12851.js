function solution() {
  let input = require('fs')
    .readFileSync('input.txt') //"/dev/stdin"
    .toString()
    .split('\n')
    .map((val) => val.trim());

  let [n, k] = input
    .shift()
    .split(' ')
    .map((v) => +v);

  let max = 200000;

  // 1초후 x-1 or x+1
  // 1초후 2*x

  let ans = new Array(max + 4).fill(0);
  let vis = new Array(max + 4).fill(0);

  const check = (start, end) => {
    let queue = [];
    vis[start] = 1;
    ans[start] = 1;
    queue.push(start);
    while (queue.length) {
      let cx = queue.shift();
      for (let dir = 0; dir < 3; dir++) {
        let nx;
        if (dir === 0) nx = cx * 2;
        else if (dir === 1) nx = cx + 1;
        else nx = cx - 1;

        if (nx >= 0 && nx < max) {
          if (!vis[nx]) {
            queue.push(nx);
            vis[nx] = vis[cx] + 1;
            ans[nx] += ans[cx];
          } else if (vis[nx] === vis[cx] + 1) {
            ans[nx] += ans[cx];
          }
        }
      }
    }
  };

  check(n, k);

  console.log(vis[k] - 1);
  console.log(ans[k]);
}

solution();
