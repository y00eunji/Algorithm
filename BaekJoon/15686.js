const [INPUT_N, ...INPUT_ARR] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m] = INPUT_N.split(' ').map(Number);
const arr = INPUT_ARR.map((v) => v.split(' ').map(Number));

// 치킨 집 중에 없애는 경우를 구한다 ->  치킨 조합을 구한다
// 그 치킨 집이 없을 때 치킨 거리를 구한다
// 구한 치킨 거리가 짧으면 갱신하고 크면 기존 값을 그대로 둔다

// 1. 치킨집, 집 좌표를 구한다
const chicken = [];
const house = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === 1) house.push([i, j]);
    else if (arr[i][j] === 2) chicken.push([i, j]);
  }
}

// 3. 고른 치킨 집이 m개일 때 거리 계산을 한다
// 4. 집들을 순회하면서 가장 가까운 치킨집 거리를 누적합해서 return 한다.
const getDistance = () => {
  let sum = 0;

  house.forEach(([hx, hy]) => {
    let min = Infinity;

    chicken.forEach((_, index) => {
      if (check[index] === true) {
        const [cx, cy] = chicken[index];
        min = Math.min(min, Math.abs(hx - cx) + Math.abs(hy - cy));
      }
    });

    sum += min;
  });

  return sum;
};

// 2. DFS탐색을 통해 치킨 조합을 구한다. -> 선택된 치킨집을 체크 표시한다
const check = new Array(chicken.length).fill(false);
let answer = Infinity;

const dfs = (index, cnt) => {
  if (cnt === m) {
    answer = Math.min(answer, getDistance());
    return;
  } else {
    for (let i = index; i < chicken.length; i++) {
      if (check[i] === true) continue;

      check[i] = true;
      dfs(i, cnt + 1);
      check[i] = false;
    }
  }
};

dfs(0, 0);
console.log(answer);
