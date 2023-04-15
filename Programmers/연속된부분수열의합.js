function solution(sequence, k) {
  const { length } = sequence;
  let [startIdx, endIdx, resultLength, sum] = [0, 0, Infinity, sequence[0]];

  if (sum === k) return [0, 0];

  let result = null;

  while (startIdx < length && endIdx < length && startIdx <= endIdx) {
    if (sum === k) {
      if (resultLength > endIdx - startIdx + 1) {
        result = [startIdx, endIdx];
        resultLength = endIdx - startIdx + 1;
      }

      endIdx += 1;
      sum += sequence[endIdx];
    } else if (sum < k) {
      endIdx += 1;
      sum += sequence[endIdx];
    } else if (sum > k) {
      sum -= sequence[startIdx];
      startIdx += 1;
    }
  }
  return result;
}
