var calPoints = function (ops) {
  let stack = [];

  ops.forEach((a) => {
    switch (a) {
      case "+":
        const sum1 = parseInt(stack[stack.length - 2]);
        const sum2 = parseInt(stack[stack.length - 1]);
        stack.push(sum1 + sum2);
        break;

      case "D":
        const top = parseInt(stack[stack.length - 1]);
        stack.push(top * 2);
        break;

      case "C":
        stack.pop();
        break;

      default:
        stack.push(parseInt(a));
        break;
    }
  });
  console.log(stack);
  const reducer = (accumulator, curr) => accumulator + curr;
  let answer = stack.length ? stack.reduce(reducer) : 0;
  return answer;
};
console.log(calPoints(["5", "2", "C", "D", "+"]));
