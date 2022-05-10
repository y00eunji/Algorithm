/**
 * 167. Two Sum II - Input Array Is Sorted
 * 이진 탐색
 */
function twoSum(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    if (sum === target) return [start + 1, end + 1];
    else if (numbers[start] + numbers[end] < target) start++;
    else end--;
  }
}
console.log(twoSum([2, 7, 11, 15], 9));
