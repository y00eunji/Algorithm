/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
  const solution = (s, e) => {
    let min = 0;
    let max = 0;
    let minOk = false;
    let maxOk = false;
    let count = 0;

    for (let r = s; r <= e; r++) {
      if (nums[r] === minK) {
        min = r;
        minOk = true;
      }
      if (nums[r] === maxK) {
        max = r;
        maxOk = true;
      }

      if (minOk && maxOk) {
        const a = Math.min(min, max);
        const b = Math.max(min, max);
        count += a - s + 1;
      }
    }

    return count;
  };

  let answer = 0;
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] > maxK || nums[r] < minK) {
      answer += solution(l, r - 1);
      l = r + 1;
    }
  }
  if (l < nums.length) {
    answer += solution(l, nums.length - 1);
  }

  return answer;
};
