function solution(num_list) {
  const mul = num_list.reduce((acc, v) => acc * v, 1);
  const sum = Math.pow(
    num_list.reduce((acc, v) => acc + v, 0),
    2
  );
  return mul < sum ? 1 : 0;
}
