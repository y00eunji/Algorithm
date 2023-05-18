function solution(a, b) {
  const flag = `${a}${b}`;
  const mul = 2 * a * b;

  return Math.max(mul, Number(flag));
}
