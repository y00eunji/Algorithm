/**
 * 1. Two Sum
 * 배열, 해쉬 테이블
 */

// Brute Force
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// };

// Two-pass Hash Table (JS object)
// var twoSum = function (nums, target) {
//   const obj = {};

//   nums.forEach((item, index) => {
//     obj[item] = index;
//   });

//   for (let index = 0; index < nums.length; index++) {
//     const complement = target - nums[index];

//     if (obj[complement] !== undefined && obj[complement] !== index) {
//       return [index, obj[complement]];
//     }
//   }
// };

// One-pass Hash Table
var twoSum = function (nums, target) {
  const map = new Map();

  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];

    if (map.has(complement)) {
      return [map.get(complement), index];
    }

    map.set(nums[index], index);
  }
};

console.log(twoSum((nums = [2, 7, 11, 15]), (target = 9)));
