const INPUT = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = INPUT.shift().split(' ').map(Number);
const apples = Number(INPUT.shift());
const position = INPUT.map(Number).map((v) => v - 1);
let left = 0;
let right = M - 1;
let move = 0;

for (let i = 0; i < position.length; i++) {
  // 바구니 안에 떨어지는 경우
  if (left <= position[i] && position[i] <= right) continue;

  //  바구니 왼쪽 가깝게 떨어지는 경우
  if (left > position[i]) {
    move += left - position[i];
    right -= left - position[i];
    left = position[i];
  }
  // 바구니 오른쪽에 가깝게 떨어지는 경우
  else {
    move += position[i] - right;
    left += position[i] - right;
    right = position[i];
  }
}
console.log(move);
