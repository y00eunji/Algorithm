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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  var Product = 0;

  for (let i = 0; i < nums.length; i++) {
    var Current = nums[i];

    if (Current < k) {
      Product++;

      for (let j = i + 1; j < nums.length; j++) {
        Current = Current * nums[j];
        if (Current > k) {
          break;
        }
        if (Current < k) {
          Product++;
        }
      }
    }
  }
  return Product;
};
