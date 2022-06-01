/**
 * 389. Find the Difference
 * 해시테이브, 문자열, 비트연산, 정렬
 */
var findTheDifference = function (s, t) {
  for (let str of s) t = t.replace(str, "");
  return t;
};
