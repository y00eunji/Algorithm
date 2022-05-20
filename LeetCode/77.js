/**
 * 77. Combinations
 */ /**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 가능한 조합을 모두 반환 , 순서에 상관없이 -> 조합
 */
var combine = function (n, k) {
  const base_arr = Array.from({ length: n }, (_, i) => i + 1);
  return c(base_arr, k);
};

var c = function (arr, k) {
  const result = [];

  if (k === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const comArr = c(restArr, k - 1);
    const combineFix = comArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });

  return result;
};
