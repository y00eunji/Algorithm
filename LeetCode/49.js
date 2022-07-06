/**
 * 49. Group Anagrams
 * 배열, 해쉬테이블, 문자열, 정렬
 */
const groupAnagrams = function (strs) {
  const map = new Map();

  strs.forEach((v) => {
    const key = v.split("").sort().join("");
    map.has(key) ? map.set(key, [...map.get(key), v]) : map.set(key, [v]);
  });

  return [...map.values()];
};

console.log(groupAnagrams((strs = ["eat", "tea", "tan", "ate", "nat", "bat"])));
