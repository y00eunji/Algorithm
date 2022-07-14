/**
 * 56. Merge Intervals
 */

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let answer = [intervals[0]];

  for (const [a, b] of intervals) {
    if (a <= answer[answer.length - 1][1]) {
      const [aPrev, bPrev] = answer.pop();
      answer.push([aPrev, Math.max(b, bPrev)]);
    } else {
      answer.push([a, b]);
    }
  }

  return answer;
};

console.log(
  merge(
    (intervals = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ])
  )
);
