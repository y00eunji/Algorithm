/*
1779. Find Nearest Point That Has the Same X or Y Coordinate
Cartesian grid  : 직교 격자, 모눈종이
매해튼 거리 : 모눈종이같은 좌표계에서 가장 짧은 거리 , 두 점 사이의 거리
Math.abs() 함수는 주어진 숫자의 절대값을 반환
*/
// var nearestValidPoint = function (x, y, points) {
//   let current = [x, y];
//   let distance = [];

//   for (let i = 0; i < points.length; i++) {
//     if (current[0] === points[i][0] || current[1] === points[i][1]) {
//       distance.push(
//         Math.abs(current[0] - points[i][0]) +
//           Math.abs(current[1] - points[i][1])
//       );
//     } else distance.push(Number.POSITIVE_INFINITY);
//   }

//   if (Math.min(...distance) === Number.POSITIVE_INFINITY) {
//     return -1;
//   } else {
//     return distance.indexOf(Math.min(...distance));
//   }
// };

var nearestValidPoint = function (x, y, points) {
  let index = -1;
  let min = Number.POSITIVE_INFINITY;

  points.forEach(([a, b], i) => {
    if (a === x || b === y) {
      const distance = Math.abs(x - a) + Math.abs(y - b);
      if (distance < min) {
        min = distance;
        index = i;
      }
    }
  });
  return index;
};

console.log(
  nearestValidPoint(
    (x = 3),
    (y = 4),
    (points = [
      [1, 2],
      [3, 1],
      [2, 4],
      [2, 3],
      [4, 4],
    ])
  )
);
