/**
 * @param {number[][]} grid
 * @return {number}
 * 0 빈 셀
 * 1 싱싱한 오렌지
 * 2 썩은 오렌지
 * 10자 모형으로 인접한 오렌지가 rotten됨
 * 신선한 오렌지가 남지 않을 때까지 경과된 최소 시간(분)을 반환해야 한다
 * 아무것도 인접하지 않은 오렌지 (상하지 못함)가 있을 때에는 -1 반환함
 * 일단 0,0가 상해있어야함
 */
var orangesRotting = function (grid) {
  let queue = [];
  let orange = 0;
  let time = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) orange++; //썩혀야할 오렌지 갯수
      else if (grid[row][col] === 2) queue.push([row, col, 0]); //시간이 0초
    }
  }

  let dir = [
    //검사방향
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  //십자 방향으로 인접한 오렌지있으면 2로 값 바꾸기
  //그 오렌지 주변에 오렌지가 1이면 push하기
  //검사하면서 인접하지 않은 위치에 오렌지 있으면 -1 반환
  while (queue.length && orange) {
    const [row, col, times] = queue.shift();
    if (grid[row][col] === 1) {
      grid[row][col] = 2;
      orange--;
      time = times;
    }

    dir.forEach(([r, c]) => {
      if (
        row + r >= 0 &&
        row + r < grid.length &&
        col + c >= 0 &&
        col + c < grid[0].length
      ) {
        if (grid[row + r][col + c] === 1)
          queue.push([row + r, col + c, times + 1]);
      }
    });
  }
  return orange ? -1 : time;
};
