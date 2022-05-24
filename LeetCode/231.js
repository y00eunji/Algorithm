/**
 * 231. Power of Two
 * 문제
 * n이 2의 제곱이면 true, 아니면 false
 *
 * 풀이
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  let power = parseInt(n & (n - 1));

  return power === 0 ? true : false;
};
console.log(isPowerOfTwo(3));
