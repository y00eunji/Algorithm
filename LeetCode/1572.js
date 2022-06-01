/**
 * 1572. Matrix Diagonal Sum
 */
var diagonalSum = function (mat) {
  let priSum = 0;
  let secSum = 0;

  for (let i = 0; i < mat.length; i++) {
    priSum += mat[i][i];
    secSum += mat[i][mat.length - i - 1];
  }
  console.log(priSum, secSum);
  if (mat.length % 2 === 1) {
    return (
      priSum +
      secSum -
      mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)]
    );
  } else {
    return priSum + secSum;
  }
};
console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
