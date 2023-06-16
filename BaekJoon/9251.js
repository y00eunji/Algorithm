const [A, B] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

// 부분 수열 중 가장 긴 부분을 DP 배열에 담기
const dp = Array.from(Array(A.length + 1), () => Array(B.length + 1).fill(0));

// 문자열을 각각 비교한다.
for (let i = 1; i <= A.length; i++) {
  for (let j = 1; j <= B.length; j++) {
    if (A[i - 1] === B[j - 1])
      dp[i][j] = dp[i - 1][j - 1] + 1; // 같으면 대각선 왼쪽 위 값 + 1
    else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // 다르면 왼쪽 값이랑 위에 값 중 큰 거
  }
}
console.log(dp[A.length][B.length]);
