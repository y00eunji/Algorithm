/**
 * 973. K Closest Points to Origin
 * 배열, 수학, 분할 정복, 정렬, 힙
 */

var kClosest = function (points, k) {
  points.sort((x, y) => {
    const a = Math.pow(x[0], 2) + Math.pow(x[1], 2);
    const b = Math.pow(y[0], 2) + Math.pow(y[1], 2);

    return a - b;
  });
  return points.splice(0, k);
};
