// 1. 선물을 많이 한 사람이 다음달에 선물 하나를 받는다
// 2. 선물을 주고받은 기록이 하나도 없음 or 똑같음 => 선물 지수가 더 큰 사람이 받는다
// 3. 선물지수 = 이번달까지 친구들에게 준 선물 수 - 받은 선물 수
// 4. 선물지수가 같으면 다음 달에 선물 안주고받음
// 결론 : 가장 많이 선물을 받을 친구가 받을 선물 개수

function solution(friends, gifts) {
  var answer = 0;

  // 2차원 배열 만들기
  const map = Array.from(Array(friends.length), () =>
    Array(friends.length).fill(0)
  );

  gifts.forEach((n) => {
    const [from, to] = n.split(' ');
    const fromIndex = friends.indexOf(from);
    const toIndex = friends.indexOf(to);

    map[fromIndex][toIndex] += 1;
  });

  // 선물지수 세기
  const rate = [];

  for (let i = 0; i < friends.length; i++) {
    let temp = 0;
    const fromMe = map[i].reduce((a, b) => a + b, 0);
    let toMe = 0;

    for (let j = 0; j < friends.length; j++) {
      toMe += map[j][i];
    }

    temp = fromMe - toMe;
    rate.push(temp);
  }

  // 돌아가면서 선물 받아내기
  const present = new Array(friends.length).fill(0);

  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (i > j) {
        const A = map[i][j];
        const B = map[j][i];

        if (A > 0 || B > 0) {
          // 두 사람이 선물을 주고받은 기록이 있다면
          if (A > B) {
            present[i] += 1;
          } else if (B > A) {
            present[j] += 1;
          } else {
            // 둘이 선물 갯수가 같다면
            if (rate[i] > rate[j]) {
              present[i] += 1;
            } else if (rate[i] < rate[j]) {
              present[j] += 1;
            }
          }
        } else if (A === 0 && B === 0) {
          if (rate[i] > rate[j]) {
            present[i] += 1;
          } else if (rate[i] < rate[j]) {
            present[j] += 1;
          }
        }
      }
    }
  }

  answer = Math.max(...present);

  return answer;
}

console.log(
  solution(
    ['muzi', 'ryan', 'frodo', 'neo'],
    [
      'muzi frodo',
      'muzi frodo',
      'ryan muzi',
      'ryan muzi',
      'ryan muzi',
      'frodo muzi',
      'frodo ryan',
      'neo muzi',
    ]
  )
);
console.log(
  solution(
    ['joy', 'brad', 'alessandro', 'conan', 'david'],
    [
      'alessandro brad',
      'alessandro joy',
      'alessandro conan',
      'david alessandro',
      'alessandro david',
    ]
  )
);

console.log(
  solution(['a', 'b', 'c'], ['a b', 'b a', 'c a', 'a c', 'a c', 'c a'])
);
