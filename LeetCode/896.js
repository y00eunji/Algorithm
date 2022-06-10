/*
896. Monotonic Array
*/

var isMonotonic = function (nums) {
  let up = true;
  let down = true;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      up = false;
    }
    if (nums[i] < nums[i + 1]) {
      down = false;
    }
  }

  return up || down;
};
