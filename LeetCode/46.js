/**
 * 46. Permutations
 * 순열, 순서가 상관있음
 */

var permute = function (nums, len = nums.length) {
  let result = [];
  if (len === 1) return nums.map((v) => [v]);

  nums.forEach((v, idx) => {
    const fixed = v;
    const restArr = nums.filter((_, index) => index !== idx);
    const permuteArr = permute(restArr, len - 1);
    const combineFixed = permuteArr.map((v) => [fixed, ...v]);
    result.push(...combineFixed);
  });
  return result;
};
