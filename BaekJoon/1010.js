 /**
 * 다리놓기
 *
 */

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const count = +input[0];

function homogeneous(N, M) {
  let result = BigInt(1);

  for (let i = N + 1; i <= M; i++) {
    result *= BigInt(i);
  }

  for (let i = 1; i <= M - N; i++) {
    result /= BigInt(i);
  }

  return Number(result);
}

for (let i = 1; i <= count; i++) {
  const args = input[i].split(" ");
  console.log(homogeneous(Number(args[0]), Number(args[1])));
} 
