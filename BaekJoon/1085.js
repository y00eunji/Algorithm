const [X, Y, W, H] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ');

const a = Math.min(W - X, X);

const b = Math.min(H - Y, Y);

console.log(Math.min(a, b));
