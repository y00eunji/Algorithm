/*
326. Power of Three
수학, 재귀
*/
var isPowerOfThree = function (n) {
  while (n > 1) {
    if (n % 3 === 0) n /= 3;
    else break;
  }
  return n === 1;
};
