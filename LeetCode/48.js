/**
 * 48. Rotate Image
 * 배열, 수학, 메트릭스
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let a = matrix.length - 1;
  let b = Math.floor(matrix.length / 2);

  for (let i = 0; i < b; i++) {
    for (let j = i; j < a - i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[a - j][i];
      matrix[a - j][i] = matrix[a - i][a - j];
      matrix[a - i][a - j] = matrix[j][a - i];
      matrix[j][a - i] = temp;
    }
  }

  return matrix;
};
