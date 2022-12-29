const INPUT = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');
const a = INPUT.shift().split(' ');
const count = a[0];
const day = a[1];

const temp = INPUT[0].split(' ').map(Number);

const psum = [0];

for (let i = 0; i < count; i++) {
  psum[i + 1] = temp[i] + psum[i];
}

let answer = Number.MIN_SAFE_INTEGER;

for (let j = day; j < psum.length; j++) {
  let sum = psum[j] - psum[j - day];
  answer = Math.max(answer, sum);
}

console.log(answer);
