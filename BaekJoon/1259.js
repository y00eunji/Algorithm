const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

input.forEach((str, i) => {
  if (i === input.length - 1) return;
  return JSON.stringify([...str]) === JSON.stringify([...str].reverse())
    ? console.log('yes')
    : console.log('no');
});
