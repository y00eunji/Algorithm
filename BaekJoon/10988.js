const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const arr = input.split('');
const reverse = [...arr].reverse();

const answer = JSON.stringify(arr) === JSON.stringify(reverse) ? 1 : 0;

console.log(answer);
