/*
58. Length of Last Word
문자열
*/
var lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
