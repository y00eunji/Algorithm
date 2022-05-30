/**
 * 496. Next Greater Element I
 */
var nextGreaterElement = function (nums1, nums2) {
  let answer = [];
  for (let i = 0; i < nums1.length; i++) {
    const index = nums2.indexOf(nums1[i]);
    const found = nums2.slice(index).find((element) => element > nums1[i]);
    if (found === undefined) answer.push(-1);
    else answer.push(found);
  }
  return answer;
};
