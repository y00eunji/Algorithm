/**
 * 459. Repeated Substring Pattern
 * 문자열
 */
// var repeatedSubstringPattern = function(s) {
//     return s.repeat(2).slice(1, -1).includes(s);
// };

var repeatedSubstringPattern = function (s) {
  let median = Math.floor(s.length / 2);
  let cur;
  let multiple;

  for (let i = 1; i <= median; i++) {
    cur = s.slice(0, i);
    multiple = Math.floor(s.length / cur.length);

    if (cur.repeat(multiple) === s) {
      return true;
    }
  }

  return false;
};
