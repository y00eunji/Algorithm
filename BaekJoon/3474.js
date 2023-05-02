const [N, ...arr] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const answer = [];

arr.forEach((v) => {
  let two = 0;
  let five = 0;

  for (let i = 2; i < v; i *= 2) {
    two += Math.floor(v / i);
  }

  for (let i = 5; i < v; i *= 5) {
    five += Math.floor(v / i);
  }

  answer.push(Math.min(two, five));
});

console.log(answer.join('\n'));
