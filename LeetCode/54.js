/**
 * 54. Spiral Matrix
 * 배열, 매트릭스, 시뮬레이션
 */
var spiralOrder = function (matrix) {
  const result = [];
  while (matrix.length) {
    result.push(
      ...matrix.shift(), //첫번째줄 전체 넣기
      ...matrix.map((a) => a.pop()), //각 줄의 맨 뒤 뽑기
      ...(matrix.pop() ?? []).reverse(), //맨 아랫줄 뒤집어서 넣기
      ...matrix.map((a) => a.shift()).reverse() //마지막에 하나씩 앞에서 뽑아서 넣기
    );
  }
  return result.filter((el) => el != undefined);
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
