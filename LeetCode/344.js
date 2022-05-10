/**
 * 344. Reverse String
 * 포인터 앞뒤로 바꾸기
 * @param {*} s
 */
//    s.reverse();
var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
};
