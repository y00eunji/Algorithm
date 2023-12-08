function maxSubarraySum(arr, N) {
  if (N > arr.length) return null;
  let max = 0;
  for (let i = 0; i < arr.length - N + 1; i++) {
    const temp = arr.slice(i, N + i);
    const sum = temp.reduce((a, b) => a + b, 0);

    if (max < sum) max = sum;
  }

  return max;
}

console.log(
  maxSubarraySum([100, 200, 300, 400], 2),
  maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4),
  maxSubarraySum([-3, 4, 0, -2, 6, -1], 2),
  maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2),
  maxSubarraySum([2, 3], 3)
);
