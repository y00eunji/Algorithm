function solution(s) {
  let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  numbers.forEach((i, idx) => (s = s.replaceAll(i, idx)));

  return Number(s);
}
