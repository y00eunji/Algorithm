/**
 * 189. Rotate Array
 * k만큼 회전시키는 것
 */

function rotate(nums, k) {
  if (nums.length < k) k %= nums.length;
  const spliceArr = nums.splice(0, nums.length - k);
  spliceArr.forEach((el) => nums.push(el));
  return nums;
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
