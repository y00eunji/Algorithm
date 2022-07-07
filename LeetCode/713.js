/**
 * 713. Subarray Product Less Than K
 * 배열
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (nums === null || nums.length === 0) {
    return 0;
  }

  if (k <= 1) return 0;

  let start = 0,
    product = 1,
    count = 0;

  for (let end = 0; end < nums.length; end++) {
    product *= nums[end];
    while (product >= k && start <= end) {
      product /= nums[start++];
    }
    count += end - start + 1;
  }
  return count;
};
