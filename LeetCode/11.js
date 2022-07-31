/**
 * 11. Container With Most Water
 * 배열, 투 포인터, 그리디
 */
var maxArea = function (height) {
  let answer = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);
    answer = Math.max(area, answer);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return answer;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
