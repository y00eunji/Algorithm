/*
Set을 사용해 내가 가지고 있는 배열을 넣어줌.
비교할 배열을 for문으로 돌면서 set에 있는지 값을 판단.
 */

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const myArr = input[1].split(" ");
const compare = input[3].split(" ");
const answer = [];

const set = new Set(myArr);

for (const m1 of compare) {
  set.has(m1) ? answer.push(1) : answer.push(0);
}

console.log(answer.join(" "));
