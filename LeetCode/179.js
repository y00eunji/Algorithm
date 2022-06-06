/**
 * 179. Largest Number
 * 그리디, 정렬, 문자열
 */
var largestNumber = function (nums) {
  if (!nums || nums.length === 0) {
    //값 없을 때 0
    return "0";
  }

  //[ 9, 5, 34, 3, 30 ]
  nums.sort((a, b) => `${b}${a}` - `${a}${b}`); //각각 뒤집으면서 sort

  if (nums[0] === 0) {
    return "0";
  }

  return nums.join("");
};
console.log(largestNumber([3, 30, 34, 5, 9]));
