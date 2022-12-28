const INPUT = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

INPUT.shift();

const a = INPUT.shift().split('*');

INPUT.forEach((v) => {
  if (a[0].length + a[1].length > v.length) {
    console.log('NE');
    return;
  }
  const answer = v.startsWith(a[0]) && v.endsWith(a[1]) ? 'DA' : 'NE';
  console.log(answer);
});
