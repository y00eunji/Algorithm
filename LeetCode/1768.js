/**
 *1768. Merge Strings Alternately
 투포인터, 문자열 
 */
var mergeAlternately = function (word1, word2) {
  let length = Math.max(word1.length, word2.length);
  let answer = "";
  for (let i = 0; i < length; i++) {
    answer += (word1[i] || "") + (word2[i] || "");
  }

  return answer;
};
console.log(mergeAlternately("ab", "pqrs"));
