const ARR = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

// a - z 순회
// 1. 첫번째 풀이
function solution(ARR) {
  const answer = [];

  for (let i = 97; i <= 122; i++) {
    const str = String.fromCharCode(i);

    answer.push(ARR.indexOf(str));
  }

  return answer.join(' ');
}

console.log(solution(ARR));
