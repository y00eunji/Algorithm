const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const num = Number(input.shift());

let answer = 0;

for (let i = 0; i < input.length; i++) {
  const stack = [];
  const str = input[i].split('');

  for (let j = 0; j < str.length; j++) {
    if (stack[stack.length - 1] === str[j]) stack.pop();
    else stack.push(str[j]);
  }

  if (stack.length === 0) answer += 1;
}

console.log(answer);
