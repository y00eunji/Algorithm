function solution(intStrs, k, s, l) {
  var answer = [];
  let result = [];
  for (let x of intStrs) {
    result = Number(x.split('').splice(s, l).join(''));
    if (result > k) {
      answer.push(result);
    }
  }
  return answer;
}
