/**
 * 844. Backspace String Compare
 * 투포인터, 문자열, 스택
 */
var backspaceCompare = function (s, t) {
  const backspace = (strs) => {
    const result = [];

    for (const str of strs.split("")) {
      str === "#" ? result.pop() : result.push(str);
    }

    return result.join("");
  };

  return backspace(s) == backspace(t);
};
