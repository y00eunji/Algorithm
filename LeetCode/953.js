/*
953. Verifying an Alien Dictionary
문자열
*/
var isAlienSorted = function (words, order) {
  for (let i = 1; i < words.length; i++) {
    const word1 = words[i - 1];
    const word2 = words[i];

    for (let j = 0; j < word1.length; j++) {
      const w1 = word1[j];
      const w2 = word2[j];

      if (word2.length - 1 < j) return false;

      if (order.indexOf(w1) < order.indexOf(w2)) break;

      if (order.indexOf(w1) === order.indexOf(w2)) continue;
      else return false;
    }
  }

  return true;
};
