// function solution(name, yearning, photo) {
//   var answer = [];

//   for (let i = 0; i < photo.length; i++) {
//     let sum = 0;

//     for (let j = 0; j < photo[i].length; j++) {
//       const num = name.includes(photo[i][j])
//         ? yearning[name.indexOf(photo[i][j])]
//         : 0;
//       sum += num;
//     }

//     answer.push(sum);
//   }

//   return answer;
// }

// 다른 분 풀이
function solution(name, yearning, photo) {
  return photo.map((v) =>
    v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0)
  );
}
