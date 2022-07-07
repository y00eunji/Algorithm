/**
 * 438. Find All Anagrams in a String
 */

// var findAnagrams = function (s, p) {
//   let arr = s.split("");
//   let answer = [];
//   for (let i = 0; i < arr.length; i++) {
//     let str = arr
//       .slice(i, i + p.length)
//       .sort()
//       .join("");

//     if (str === p) {
//       answer.push(i);
//     }
//   }
//   return answer;
// };

const findAnagrams = (s, p) => {
  const answer = [];
  const neededChars = {};

  for (let char of p) {
    if (char in neededChars) {
      neededChars[char]++;
    } else neededChars[char] = 1;
  }

  console.log(neededChars);
  let left = 0;
  let right = 0;
  let count = p.length;

  while (right < s.length) {
    if (neededChars[s[right]] > 0) count--;

    neededChars[s[right]]--;
    right++;

    if (count === 0) answer.push(left);

    if (right - left == p.length) {
      if (neededChars[s[left]] >= 0) count++;

      neededChars[s[left]]++;
      left++;
    }
  }
  return answer;
};

console.log(findAnagrams((s = "abab"), (p = "ab")));
