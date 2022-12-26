const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const arr = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  let num = input.charCodeAt(i) - 97;
  arr.forEach((v, i) => {
    if (i === num) {
      arr[i] = v + 1;
    }
  });
}

console.log(arr.join(' '));
