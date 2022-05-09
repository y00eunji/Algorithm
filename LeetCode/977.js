/**
 * 977. Squares of a Sorted Array
 * 각 배열요소에 제곱하고 오름차순으로 바꾸기
 */
var sortedSquares = function (nums) {
  let squareArr = nums.map((item) => item ** 2);
  squareArr.sort((a, b) => {
    return a - b;
  });
  return squareArr;
};
