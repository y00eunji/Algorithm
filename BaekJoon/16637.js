const [INPUT_N, str] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(INPUT_N);
let max = Number.MIN_SAFE_INTEGER;

const cal = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return (num1 += num2);

    case '-':
      return (num1 -= num2);

    case '*':
      return (num1 *= num2);

    default:
      return num1;
  }
};

function recur(index, cur) {
  // 1. 종료조건
  if (index > N - 1) {
    max = Math.max(max, cur);
    return;
  }

  const oper = index === 0 ? '+' : str[index - 1];
  // 2. 괄호로 묶는다 = 이전 + 괄호 계산
  if (index + 2 < N) {
    const bracket = cal(
      parseInt(str[index]),
      parseInt(str[index + 2]),
      str[index + 1]
    );
    recur(index + 4, cal(cur, bracket, oper));
  }

  // 3. 괄호로 안묶을 때
  recur(index + 2, cal(cur, parseInt(str[index]), oper));
}

recur(0, 0);
console.log(max);

// 괄호로 묶는 경우
// 1. 괄호로 묶는다
// - 괄호, 숫자1, 연산자, 숫자2, 괄호
// - 숫자1 = str[idx]
// - 숫자2 = str[idx + 2]
// - 연산자 = str[idx + 1]
// 2. 괄호 계산하는 데에 3개, 연산에 1개 사용했으니 idx + 4를 해준다
// 괄호로 안 묶는 경우
// 1. 현자 값과 다음 값을 연산한다
// 연산에 1개, 다음 값에 1개를 소모했으니 idx + 2를 해준다
