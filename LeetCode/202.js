/*
202. Happy Number
*/

var isHappy = function (n) {
  let obj = {},
    num;

  while (!obj[n]) {
    obj[n] = true;

    num = 0;
    while (n > 0) {
      num += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }
    if (num === 1) {
      return true;
    }
    n = num;
  }
  return false;
};

console.log(isHappy(19));
