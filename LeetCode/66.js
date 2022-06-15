/*
66. Plus One
수학, 정렬
*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      // 0 ~ 8일때
      digits[i] += 1;
      return digits;
    }

    digits[i] = 0;
    if (i === 0) {
      digits.unshift(1);
      return digits;
    }
  }
};

console.log(plusOne([1, 1, 9]));
