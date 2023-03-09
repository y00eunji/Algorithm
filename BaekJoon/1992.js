const [N, ...arr] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const ARR = arr.map((v) => v.split(''));

function quadTree(n, row, col) {
  if (n === 1) return ARR[row][col];

  const str = ARR[row][col];

  for (let i = row; i < row + n; i++) {
    for (let j = col; j < col + n; j++) {
      if (str !== ARR[i][j]) {
        const topLeft = quadTree(n / 2, row, col);
        const topRight = quadTree(n / 2, row, col + n / 2);
        const bottomLeft = quadTree(n / 2, row + n / 2, col);
        const bottomRight = quadTree(n / 2, row + n / 2, col + n / 2);
        return `(${topLeft}${topRight}${bottomLeft}${bottomRight})`;
      }
    }
  }
  return ARR[row][col];
}

console.log(quadTree(N, 0, 0));
