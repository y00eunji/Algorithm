/*
1309. Decrypt String from Alphabet to Integer Mapping
문자열
*/
var freqAlphabets = function(s) {
  let answer = ''; 
  
  for (let i = 0; i < s.length; i++) {
      let num = s[i];
      
      if (s[i + 2] === '#') {
          num = s.slice(i, i + 2);
          i += 2;
      }
          
      answer += String.fromCharCode(parseInt(num) + 96);
  }
  
  return answer;
};