const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const n = +input;

let num = 666; // 제일 작은 종말의 수

let count = 1; // 현재까지 센 종말의 수의 수

while (count < n) {
  // 입력값 n이전까지만 연산해서 n일때는 while문 밖에서 return
  num++;

  if (num.toString().includes("666"))
    // 666을 포함할 때마다 숫자 세기
    count++;
}

console.log(num);
