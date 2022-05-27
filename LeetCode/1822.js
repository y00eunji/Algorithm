/*
1822. Sign of the Product of an Array
*/

var arraySign = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) return 0;
    else if (nums[i] > 0) nums[i] = 1;
    else nums[i] = -1;
  }

  console.log(nums.reduce((a, b) => a * b));
};
console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
