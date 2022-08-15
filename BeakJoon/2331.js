const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let n = parseInt(input);

for (let i = 0; i < n; i++) {
  const bSum = i
    .toString()
    .split("")
    .map((s) => parseInt(s))
    .reduce((v1, v2) => v1 + v2, i);

  if (bSum === n) {
    console.log(i);
    return;
  }
}

console.log(0);
