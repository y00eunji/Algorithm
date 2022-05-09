let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
const dp = [];
let num = Number(input)

dp[0] = 1;
dp[1] = 2;

for (let i = 2; i < num; i++) {
    dp[i] = (dp[i-1] + dp[i-2]) % 10007;
}

console.log(dp[num - 1]);