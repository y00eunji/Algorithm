/**
 * 198. House Robber
 * 당신은 거리를 따라 집을 털 계획인 전문 강도입니다.
 * 각 집에는 특정 금액의 돈이 숨겨져 있습니다.
 * 각 집의 강도를 막는 유일한 제약은 인접한 집에 보안 시스템이 연결되어 있고
 * 같은 밤에 인접한 두 집에 침입한 경우 자동으로 경찰에 연락한다는 것입니다 .
 * nums각 집의 금액을 나타내는 정수 배열이 주어지면
 * 경찰에 알리지 않고 오늘 밤 도둑질할 수 있는 최대 금액을 반환하십시오 .
 */

var rob = function (nums) {
  let rob = [];
  rob[0] = 0;
  rob[1] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    rob[i + 1] = Math.max(rob[i], rob[i - 1] + nums[i]);
  }
  return rob[rob.length - 1];
};
console.log(rob([2, 7, 9, 3, 1]));
