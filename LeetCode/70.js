/**
 * 70. Climbing Stairs
문제
정상까지의 계단이 n개 있다.
한 번에 1 또는 2 계단을 오를 수 있다. 정상까지 오를 수 있는 방법을 구해라
 */

var climbStairs = function (n) {
  let a = 1,
    b = 1;

  for (let i = 0; i < n - 1; i++) {
    let temp = a;
    a = a + b;
    b = temp;
  }
  return a;
};
