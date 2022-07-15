/**
 * 15. 3Sum
 * 배열, 정렬, 투포인터
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let answer = [];

  for (let i = 0; i < nums.length - 2; i++) {
    let fix = i;
    let start = i + 1;
    let end = nums.length - 1;

    if (fix > 0 && nums[fix] === nums[fix - 1]) {
      continue;
    }

    while (start < end) {
      let sum = nums[fix] + nums[start] + nums[end];

      if (sum === 0) {
        answer.push([nums[fix], nums[start], nums[end]]);
        start++;
        end--;

        while (nums[start] === nums[start - 1] && start < end) {
          start++;
        }
        while (nums[end] === nums[end + 1] && start < end) {
          end--;
        }
      } else if (sum > 0) end--;
      else start++;
    }
  }

  return answer;
};

console.log(threeSum((nums = [-1, 0, 1, 2, -1, -4])));
