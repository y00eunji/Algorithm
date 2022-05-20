/**
 * @param {string} s
 * @return {string[]}
 */
let answer;

var letterCasePermutation = function (s) {
  answer = [];
  dfs(s, [], 0);
  return answer;
};

var dfs = function (str, result, index) {
  if (index === str.length) {
    answer.push(result.join(""));
    return;
  }

  const cur = str[index];
  if (cur.charCodeAt(0) > 64) {
    // 문자라면
    // 소문자
    result.push(cur.toLowerCase());
    dfs(str, result, index + 1);
    result.pop();

    // 대문자
    result.push(cur.toUpperCase());
    dfs(str, result, index + 1);
    result.pop();
  } else {
    result.push(cur); // 숫자라면
    dfs(str, result, index + 1);
    result.pop();
  }
};
console.log(letterCasePermutation("a1b2"));
