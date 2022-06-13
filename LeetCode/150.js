/*
150. Evaluate Reverse Polish Notation
후위 표기식 계산하기
*/

var evalRPN = function (tokens) {
  let stack = [];
  let operator = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)),
  };
  for (let t of tokens) {
    if (operator[t]) {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(operator[t](b, a));
    } else {
      stack.push(Number(t));
    }
  }
  return stack.pop();
};
console.log(evalRPN(["2", "1", "+", "3", "*"]));
