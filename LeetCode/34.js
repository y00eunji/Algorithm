/**
 * 34. Find First and Last Position of Element in Sorted Array
 * 배열, 이진탐색
 */
//  var searchRange = function (nums, target) {
//   return [nums.indexOf(target), nums.lastIndexOf(target)];
// };
var searchRange = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    nums[mid] >= target ? (end = mid) : (start = mid + 1);

    if (nums[l] !== target) return [-1, -1];
    let start = l;
    r = nums.length - 1;

    while (l < r) {
      let mid = Math.floor((l + r) / 2);

      nums[mid] <= target ? (l = mid + 1) : (r = mid);
    }

    let end = nums[l] === target ? l : l - 1;
    return [start, end];
  }
};

console.log(searchRange((nums = [5, 7, 7, 8, 8, 10]), (target = 8)));
