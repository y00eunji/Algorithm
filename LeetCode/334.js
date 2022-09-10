var increasingTriplet = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let fix = i;
    let start = i + 1;
    let end = nums.length - 1;

    if (nums[fix] < nums[start] && nums[start] < nums[end]) {
      return true;
    } else if (nums[fix] >= nums[start]) {
      start++;
    }
  }
  return false;
};
