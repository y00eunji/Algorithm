const INPUT = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const A = Number(INPUT[0].split(' ')[0]);
const B = Number(INPUT[0].split(' ')[1]);
const C = Number(INPUT[0].split(' ')[2]);

INPUT.shift();
const sorted = INPUT.map((v) => v.split(' '))
  .flat()
  .map(Number)
  .sort((a, b) => a - b);

const arr = INPUT.map((v) => v.split(' ').map(Number));
let answer = 0;

for (let i = sorted[0]; i <= sorted[5]; i++) {
  let count = 0;

  arr.forEach(([start, end]) => {
    if (i >= start && i < end) count = count + 1;
  });

  if (count === 1) answer += A;
  else if (count === 2) answer += 2 * B;
  else if (count === 3) answer += 3 * C;
}

console.log(answer);
