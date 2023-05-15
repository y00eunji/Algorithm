const [INPUT_N, INPUT_ARR] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const n = Number(INPUT_N);
const arr = INPUT_ARR.split(' ').map(Number);

const res = Array(n).fill(-1);
const stack = [];

for (let i = 0; i < n; i++) {
  while (stack.length > 0 && stack[stack.length - 1][0] < arr[i]) {
    const [value, idx] = stack.pop();
    res[idx] = arr[i];
  }
  stack.push([arr[i], i]);
}

console.log(res.join(' '));
