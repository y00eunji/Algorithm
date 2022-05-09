/**
 * 704. Binary Search
 * 이진 탐색 : 배열의 양끝에서 찾는 것 
 * Input: nums = [-1,0,3,5,9,12], target = 9
  Output: 4
  Explanation: 9 exists in nums and its index is 4
 */

var search = function (nums, target) {
  return nums.indexOf(target);
};
