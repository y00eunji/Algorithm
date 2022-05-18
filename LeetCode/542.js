/**
 * 542. 01 mat
 * @param {number[][]} mat
 * @return {number[][]}
 * mat가 주어집니다.
 * 1을 기준으로 가장 가까운 0과의 거리를 찾아 mat에 저장하고 리턴하세요.
 * BFS는 퍼지는 얼룩과 같고 DFS는 뻗은 덩굴
 */

var updateMatrix = function (matrix) {
  const q = []; // 큐만들기
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] > 0) {
        //0이 아니면 무한대
        matrix[row][col] = Infinity;
      } else {
        q.push([row, col, 0]); //0이면 거리 0
      }
    }
  }

  let dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; //기준에서 십자

  while (q.length) {
    const [row, col, dist] = q.shift(); // 큐의 앞에것 빼기
    if (matrix[row][col] > dist) {
      // 1 -> 1 갈 때 무한대 값을 인근 노드의 거리로 넣어주기
      matrix[row][col] = dist;
    }

    dir.forEach(([r, c]) => {
      if (
        row + r >= 0 &&
        row + r < matrix.length &&
        col + c >= 0 &&
        col + c < matrix[0].length
      ) {
        if (matrix[row + r][col + c] === Infinity)
          q.push([row + r, col + c, dist + 1]); //인근 노드 값 넣어주기
      }
    });
  }

  return matrix;
};

console.log(
  updateMatrix([
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [1, 1, 1, 1, 0, 1, 0, 0, 1, 1],
  ])
);
