const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString();

let a = input.split("\n");
let count = +a.shift();
let people = [];
let answer = Array.from({ length: count }, () => 1);

for (let i = 0; i < a.length; i++) {
  people.push(a[i].split(" ").map((v) => parseInt(v)));
}

for (let i = 0; i < people.length; i++) {
  for (let j = 0; j < people.length; j++) {
    if (i === j) continue;

    if (people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
      answer[i]++;
    }
  }
}

console.log(answer.join(" "));
