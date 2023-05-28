function solution(t, p) {
  let answer = 0;
  const size = p.length;

  for (let i = 0; i <= t.length - p.length; i++) {
    const temp = t.slice(i, i + size);
    if (Number(temp) <= p) answer++;
  }

  return answer;
}
