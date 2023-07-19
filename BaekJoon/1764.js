const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);

const arr1 = input.slice(1, n + 1);
const arr2 = new Set(input.slice(n + 1));

const answer = arr1.filter((name) => arr2.has(name)).sort();

console.log([answer.length, ...answer].join('\n'));
