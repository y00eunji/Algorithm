const input = require('fs')
  .readFileSync('치즈/input.txt')
  .toString()
  .split('\n');
const [row, col] = input[0].split(' ').map(Number);
let cheez = new Array(row).fill(null).map((_) => new Array(col).fill(0));
let total = 0; // 처음 치즈의 칸수.
let answerTime = 0; // 모두 녹는데 걸린 시간.

let dx = [0, 1, 0, -1];
let dy = [-1, 0, 1, 0];

function BFS() {
  let past = total;
  let visited = new Array(row)
    .fill(null)
    .map((_) => new Array(col).fill(false));
  let q = [];
  q.push([0, 0]);

  while (q.length !== 0) {
    let curr = q.shift();
    let curY = curr[0];
    let curX = curr[1];

    for (let next = 0; next < 4; next++) {
      let nextY = curY + dy[next];
      let nextX = curX + dx[next];

      if (nextY < 0 || nextY >= row || nextX < 0 || nextX >= col) continue;

      // 다음칸이 '공기'인 경우.
      if (!visited[nextY][nextX] && cheez[nextY][nextX] === 0) {
        visited[nextY][nextX] = true;
        q.push([nextY, nextX]);
      }
      // 다음칸이 '치즈'인 경우
      else if (!visited[nextY][nextX] && cheez[nextY][nextX] === 1) {
        visited[nextY][nextX] = true;
        total--;
        cheez[nextY][nextX] = 2; // 삭제 대기.
      }
    }
  }
  answerTime++;

  if (total === 0) {
    console.log(answerTime);
    console.log(past);
    return false;
  }

  // 공기와 닿은 치즈를 녹인다.
  for (let i = 0; i < cheez.length; i++) {
    for (let j = 0; j < cheez[i].length; j++) {
      if (cheez[i][j] === 2) cheez[i][j] = 0;
    }
  }
  return true;
}

function sol() {
  while (BFS());
}

function insert() {
  for (let i = 0; i < row; i++) {
    let temp = input[i + 1].split(' ').map(Number);
    for (let j = 0; j < col; j++) {
      cheez[i][j] = temp[j];
      if (cheez[i][j] === 1) total++;
    }
  }
  sol();
}

insert();
