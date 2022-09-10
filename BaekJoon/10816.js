const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const answer = [];
const myArr = input[1].split(" ");
const compare = input[3].split(" ");
// const map = myArr.reduce((acc, cur) => {
//   acc.set(cur, (acc.get(cur) || 0) + 1);
//   return acc;
// }, new Map());
const map = new Map();
myArr.forEach((v) => {
  map.set(v, map.get(v) + 1 || 1);
});

for (const m1 of compare) {
  map.has(m1) ? answer.push(map.get(m1)) : answer.push(0);
}

console.log(answer.join(" "));
