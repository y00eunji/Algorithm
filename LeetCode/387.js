/**
 * 387. First Unique Character in a String
 * 해쉬테이블, 문자열, 큐, 카운팅
 */

var firstUniqChar = function (s) {
  let map = new Map();
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    let exist = map.get(s[i]) + 1 || 1;
    map.set(s[i], exist);
  }
  for (const str of map.entries()) {
    if (str[1] === 1) {
      return s.indexOf(str[0]);
    }
  }
  return -1;
};
console.log(firstUniqChar((s = "loveleetcode")));
