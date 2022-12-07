const INPUT = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [a, b, c] = input
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)) === c;
};

for (let i = 0; i < INPUT.length - 1; i++) {
  const answer = solution(INPUT[i]) ? 'right' : 'wrong';

  console.log(answer);
}
