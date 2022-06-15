//989. Add to Array-Form of Integer
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let sum = k;
  let index = num.length - 1;
  let result = "";
  let resultArr = [];

  while (index >= 0 || sum > 0) {
    if (index >= 0) {
      sum += num[index];
    }
    result += sum % 10;
    sum = Math.floor(sum / 10);
    index--;
  }

  for (let i = result.length - 1; i >= 0; i--) {
    resultArr.push(+result[i]);
  }
  return resultArr;
};

console.log(addToArrayForm((num = [1, 2, 0, 0]), (k = 34)));
