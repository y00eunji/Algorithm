/**
 * 1588. Sum of All Odd Length Subarrays
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if ((i - j) % 2 === 0) {
        for (let k = i; k <= j; k++) {
          count += arr[k];
        }
      }
    }
  }
  return count;
};
console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
