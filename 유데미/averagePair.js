function averagePair(arr, n) {
  if (arr.length === 0) return false;

  let answer = false;

  for (let i = 0; i < arr.length; i++) {
    const start = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const end = arr[j];
      const avg = (end + start) / 2;

      if (avg === n) {
        answer = true;
        return answer;
      }
    }
  }

  return answer;
}

console.log(
  averagePair([1, 2, 3], 2.5),
  averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8),
  averagePair([-1, 0, 3, 4, 5, 6], 4.1),
  averagePair([], 4)
);
