/**
 * 283. Move Zeroes
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * 포인터가 있고 0 이아닌 숫자를 만날때마다 포인터위치부터 0이 아닌곳 까지 reverse시켜줌
 */
function moveZeroes(nums) {
  let pointer = 0;
  for (let i in nums) {
    if (nums[i] !== 0) {
      [nums[pointer], nums[i]] = [nums[i], nums[pointer]];
      pointer++;
    }
  }
  return nums;
}
console.log(moveZeroes([0, 1, 0, 3, 12]));
