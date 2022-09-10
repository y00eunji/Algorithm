const [num, limit, ...cards] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map((el) => parseInt(el));

function solution(num, limit, cards) {
  let maxsum = 0;
  for (let i = 0; i < num - 2; i++) {
    for (let j = i + 1; j < num - 1; j++) {
      for (let k = j + 1; k < num; k++) {
        const sum = cards[i] + cards[j] + cards[k];
        if (sum <= limit && sum > maxsum) maxsum = sum;
        if (sum === limit) return maxsum;
      }
    }
  }
  return maxsum;
}

console.log(solution(num, limit, cards));
