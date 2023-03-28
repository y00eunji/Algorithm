const INPUT = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = INPUT.shift().split(' ').map(Number);

const arr = INPUT.map((v) => v.split(''));

const answer = Array.from(new Array(N), () => new Array(M).fill(-1));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 'c') {
      answer[i][j] = 0;

      let z = j + 1;
      let count = 1;

      while (z <= M - 1 && arr[i][z] === '.') {
        answer[i][z] += count + 1;
        count++;
        z++;
      }
    }
  }
}

console.log(answer.map((v) => v.join(' ')).join('\n'));
