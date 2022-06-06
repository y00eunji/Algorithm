/**
 * 45. Jump Game II
 * 배열, DP, 그리디
 */
var jump = function (nums) {
  let len = nums.length - 1;
  let curr = -1;
  let next = 0;
  let step = 0;

  for (let i = 0; next < len; i++) {
    if (i > curr) {
      step++;
      curr = next;
    }
    next = Math.max(next, nums[i] + i);
  }

  return step;
};
console.log(jump([2, 3, 1, 1, 4]));
