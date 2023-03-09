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
  if (left <= position[i] && position <= right) continue;

  if (left > position[i]) {
    move += left - position[i];
    right -= left - position[i];
    left = position[i];
  } else {
    move += position[i] - right;
    left += position[i] - right;
    right = position[i];
  }
}
console.log(move);
