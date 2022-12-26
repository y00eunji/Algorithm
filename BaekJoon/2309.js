const INPUT = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution() {
  let sum = INPUT.reduce((a, b) => a + b);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - INPUT[i] - INPUT[j] === 100) {
        INPUT.splice(i, 1);
        INPUT.splice(j - 1, 1);
        console.log(INPUT.sort((a, b) => a - b).join('\n'));
        return;
      }
    }
  }
}

solution();
