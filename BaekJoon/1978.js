const INPUT = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const nums = INPUT[1].split(' ').map(Number);

function isPrimeNumber(n) {
  if (n == 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

let answer = 0;

for (let i = 0; i < nums.length; i++) {
  if (isPrimeNumber(nums[i])) answer += 1;
}

console.log(answer);
