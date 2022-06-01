/**
 * 566. Reshape the Matrix
 */
var matrixReshape = function (mat, r, c) {
  let arr = mat.flat();
  if (r * c !== arr.length) return mat;

  //배열 만들기
  let res = [];
  while (arr.length) res.push(arr.splice(0, c));
  return res;
};
console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
);
