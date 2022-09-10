/*
도감에 있는 포켓몬을 map을 활용해 Map에 [포켓몬 이름, 번호]를 줘서 저장하고
문제를  돌면서 숫자일 때랑 아닐 때 구분해서 처리
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);

const N = +input[0];
const arr = input.slice(2, N + 2);
const pokemonMap = new Map(arr.map((val, idx) => [val, idx + 1]));
const question = input.slice(N + 2);
const answer = [];

question.forEach((v) => {
  if (Number.isNaN(+v)) answer.push(pokemonMap.get(v));
  else answer.push(arr[+v - 1]);
});

console.log(answer.join("\n"));
