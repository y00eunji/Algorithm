/**
 * 162. Find Peak Element
 * 배열, 이진 탐색
 */

var findPeakElement = function (nums) {
  let left = 0,
    right = nums.length - 1,
    mid;

  while (left < right) {
    mid = Math.floor((right + left) / 2);
    if (nums[mid] > nums[mid + 1]) right = mid;
    else left = mid + 1;
  }
  return left;
};

console.log(findPeakElement((nums = [1, 2, 1, 3, 5, 6, 4])));
