const INPUT = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

INPUT.shift();

function getScore(arr) {
  const score = arr.split('');
  let sum = 0;
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'O') {
      num += 1;
      sum += num;
    } else {
      num = 0;
    }
  }
  console.log(sum);
}

for (let i = 0; i < INPUT.length; i++) {
  getScore(INPUT[i]);
}
