const INPUT = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const count = Number(INPUT.shift());
const map = new Map();

for (let i = 0; i < count; i++) {
  map.set(INPUT[i][0], map.get(INPUT[i][0]) + 1 || 1);
}

const go = [];

map.forEach((v, k) => {
  if (v >= 5) go.push(k);
});

if (go.length > 0) console.log(go.sort().join(''));
else console.log('PREDAJA');
