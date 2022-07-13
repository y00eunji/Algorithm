/**
 * 136. Single Number
 * 배열, 비트 연산(XOR)
 */
var singleNumber = function (nums) {
  return nums.reduce((a, b) => a ^ b);
};
