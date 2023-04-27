/*
 방문 배열을 만들어서 방문 했으면 contunue 안했으면 순열배열에 넣고 재귀 돌리기 
 제귀 종료 조건 : 길이가 M일때 종료 
 */

// const answer = [];
// const array = Array.from({ length: N }, (_, i) => i + 1);
// const visited = Array.from({ length: N }, (v) => false);

// const getPermutations = (arr, M, permutation) => {
//   if (permutation.length === M) {
//     answer.push(permutation.join(" "));
//     return;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (visited[i]) continue;

//     permutation.push(array[i]);
//     visited[i] = true;
//     getPermutations(arr, M, permutation);
//     permutation.pop();
//     visited[i] = false;
//   }
// };
// getPermutations(array, M, []);

// console.log(answer.join("\n"));

// 순열구하기
// const getPermutations = function (arr, selectNumber) {
//   if (selectNumber === 1) return arr.map((el) => [el]);

//   arr.forEach((fixed, index, origin) => {
//     const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//     const permutations = getPermutations(rest, selectNumber - 1);
//     const attached = permutations.map((el) => [fixed, ...el]);
//     results.push(...attached);
//   });

//   return results;
// };

const [N, M] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const numbers = Array.from({ length: N }, (_, i) => i + 1);

const getPermutations = (arr, selectNumber) => {
  const results = [];

  if (selectNumber === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

const res = getPermutations(numbers, M);

console.log(res.map((v) => v.join(' ')).join('\n'));
