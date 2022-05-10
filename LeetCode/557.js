/**
 * 344. Reverse String
 */
function reverseWords(s) {
  let Sentence = s
    .split(" ")
    .map((i) => i.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("Let's take LeetCode contest"));
