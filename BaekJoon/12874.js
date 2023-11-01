const [N, M] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

function sol() {
  let max = 0;
  let temp = 0;

  for (let i = 0; i < N[1]; i++) {
    max += M[i]; // 먼저 N[1]만큼 다 더해두기
  }

  temp = max;

  for (let i = N[1]; i < N[0]; i++) {
    temp = temp - M[i - N[1]] + M[i]; // 포인터 하나씩 돌면서 앞에껀 빼고 새로 가르키는 곳껀 더하기
    max = Math.max(temp, max);
  }

  return max;
}

console.log(sol());
