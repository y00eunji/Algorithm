/**
 * 1630. Arithmetic Subarrays
 * 배열, 정렬
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  const answer = Array(l.length).fill(true);
  for (let i = 0; i < l.length; i++) {
    let arr = nums.slice(l[i], r[i] + 1);
    arr = arr.sort((a, b) => b - a);
    let dif = arr[0] - arr[1];

    for (let j = 0; j < arr.length - 1; j++) {
      if (dif !== arr[j] - arr[j + 1]) {
        answer[i] = false;
        break;
      }
    }
  }
  return answer;
};
console.log(
  checkArithmeticSubarrays(
    (nums = [4, 6, 5, 9, 3, 7]),
    (l = [0, 0, 2]),
    (r = [2, 3, 5])
  )
);
