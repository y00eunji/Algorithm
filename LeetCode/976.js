/**
 * 976. Largest Perimeter Triangle
면적이 0보다 큰 삼각형을 만드는 경우는, 길이가 (a <= b <= c)일 때, a + b > c 여야 한다.
둘레가 가장 큰 경우를 구해야하므로 가장 큰 정수들을 고를수록 좋다.
 */

var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < nums[i + 1] + nums[i + 2])
      return nums[i] + nums[i + 1] + nums[i + 2];
  }
  return 0;
};
