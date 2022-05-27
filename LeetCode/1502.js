/*
1502. Can Make Arithmetic Progression From Sequence
*/

var canMakeArithmeticProgression = function (arr) {
  arr.sort((x, y) => x - y);
  let diff = Math.abs(arr[0] - arr[1]);

  for (let i = 1; i < arr.length - 1; i++) {
    if (diff !== Math.abs(arr[i] - arr[i + 1])) return false;
  }
  return true;
};

console.log(canMakeArithmeticProgression([3, 5, 1]));
