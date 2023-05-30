const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 입력값들
const [N, L, R] = input
  .shift()
  .split(' ')
  .map((el) => +el);
let land = input.map((el) => el.split(' ').map((el) => +el));

let answer = 0;
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

// 범위 체크 함수
const rangeCheck = (y, x) => {
  if (y >= 0 && x >= 0 && y < N && x < N) return true;
  return false;
};

const BFS = (y, x, visited) => {
  let queue = []; // 탐색할 좌표를 담을 배열
  let union = []; // 연합된 좌표를 담을 배열

  queue.push([y, x]);
  union.push([y, x]);
  visited[y][x] = true; // 방문 체크
  let population = land[y][x]; // (연합의 인구수 / 개수) 계산을 위해 인원 수 세팅

  while (queue.length) {
    const [curY, curX] = queue.pop();

    for (let i = 0; i < 4; i++) {
      const ny = curY + dy[i];
      const nx = curX + dx[i];

      if (rangeCheck(ny, nx) && !visited[ny][nx]) {
        // 4방위를 탐색하며 조건에 맞는 다음좌표와의 인구 값 차이 구하기
        const difference = Math.abs(land[curY][curX] - land[ny][nx]);

        // 인구 값 차이가 조건에 맞다면
        if (difference >= L && difference <= R) {
          visited[ny][nx] = true; // 방문 체크하고
          queue.push([ny, nx]); // 다음 탐색 좌표에 넣고
          union.push([ny, nx]); // 현재 턴에서 연합에 넣음
          population += land[ny][nx]; // 연합의 총 인원 수 증가
        }
      }
    }
  }

  // 위의 while문을 빠져나와 형성된 연합에 대해 (연합의 인구수 / 개수) 를 계산하여
  // 각 연합의 수들을 (연합의 인구수 / 개수) 로 세팅하기
  // 연합이 생성 안됐다면 원래의 자기 자신 값을 가지게 됨
  union.forEach(([y, x]) => {
    land[y][x] = Math.floor(population / union.length);
  });

  // 연합 수를 return
  return union.length;
};

while (true) {
  // 방문 배열과 isUnionFormed를 초기화
  let visited = Array.from(Array(N), () => Array(N).fill(false));
  let isUnionFormed = false;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        const unionCount = BFS(i, j, visited);
        // 이번 턴에서 연합이 한 개라도 생겼다면 true로 변경
        if (unionCount > 1) isUnionFormed = true;
      }
    }
  }

  // for문을 다 돌아도 연합이 한번도 생기지 않았다면 while문 빠져나가기
  if (!isUnionFormed) break;
  // 이번 턴에 연합이 생기면 answer + 1
  answer++;
}

console.log(answer);
