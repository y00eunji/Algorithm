const INPUT = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, C] = INPUT[0].split(' ').map(Number);
const arr = INPUT[1].split(' ').map(Number);

const map = new Map();

for (let i = 0; i < arr.length; i++) {
  map.set(arr[i], map.get(arr[i]) + 1 || 1);
}
const mapArr = [...map];
let answer = '';

mapArr.sort((a, b) => b[1] - a[1]);

mapArr.forEach(([v, k]) => {
  let temp = v + ' ';
  answer += temp.repeat(k);
});

console.log(answer.trim());
