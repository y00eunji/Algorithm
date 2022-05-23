/**
 * 120. Triangle
 * 
 * triangle배열이 주어지면 위에서 아래로의 최소 경로 합계를 반환합니다 .
 * 각 단계에 대해 아래 행의 인접한 번호로 이동할 수 있습니다. 
 * 보다 공식적으로, 현재 행의 인덱스 에 있는 경우 다음 행의 인덱스 또는 
 * 인덱스 i로 이동할 수 있습니다 .i또는 i + 1

 */

var minimumTotal = function (triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  return triangle[0][0];
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
