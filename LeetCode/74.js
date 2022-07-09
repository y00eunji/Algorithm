/**
 * 74. Search a 2D Matrix
 * 배열, 이진탐색, 매트릭스
 */

var searchMatrix = function (matrix, target) {
  let left = 0,
    right = matrix[0].length - 1,
    mid = 0,
    row = 0,
    answer = false;

  for (let i = 0; i < matrix.length; i++) {
    if (target >= matrix[i][0]) {
      row = i;
    }
  }

  for (let i = 0; i < matrix[row].length; i++) {
    mid = Math.floor(left + right);

    if (matrix[row][mid] === target) {
      return true;
    } else if (matrix[row][mid] > target) {
      right--;
    } else {
      left++;
    }
  }

  return answer;
};

console.log(
  searchMatrix(
    (matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ]),
    (target = 3)
  )
);
