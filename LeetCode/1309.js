/*
1309. Decrypt String from Alphabet to Integer Mapping
문자열
*/
var freqAlphabets = function (s) {
  s = [...s];
  for (let i = s.length - 1; i >= 0; i--) {
    let num = s[i];
    if (num !== "#") {
      s[i] = String.fromCharCode(Number(num) + 96);
    } else {
      let letter = String.fromCharCode(Number(s[i - 2] + s[i - 1]) + 96);
      s.splice(i - 2, 3, letter);
    }
  }
  return s;
};
console.log(freqAlphabets("1326#"));
