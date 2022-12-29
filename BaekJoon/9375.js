const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const isNumber = (input) => {
  const inputNumber = Math.floor(Number(input));
  return String(inputNumber) === input && inputNumber >= 0;
};

const count = input.shift();

const getCody = (arr) => {
  const map = new Map();

  arr.forEach((v) => {
    const value = v.split(' ')[0];
    const key = v.split(' ')[1];

    map.set(key, map.get(key) + 1 || 1);
  });

  let answer = 1;

  map.forEach((v, k) => {
    answer *= v + 1;
  });

  console.log(answer - 1);
};

input.forEach((v, i) => {
  let num = 0;

  if (isNumber(v)) {
    num = Number(v);

    const arr = input.slice(i + 1, i + num + 1);

    getCody(arr);
  }
});
