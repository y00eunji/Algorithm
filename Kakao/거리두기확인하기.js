function solution(places) {
  var answer = places.map((place) => {
    // 결과가 true 이면 거리두기가 지켜지지 않음
    return place.some((row, rowIndex) => {
      // true 이면 거리두기가 지켜지지 않음, 바로 종료
      return row.split('').some((column, index, arr) => {
        // 파티션이 있으면 거리두기 지킴
        if (column == 'X') return false;

        // 상하좌우에 P가 몇개인지 조회
        const userCount = [
          arr[index - 1] || null, // 좌
          arr[index + 1] || null, // 우
          (place[rowIndex - 1] || '').charAt(index), // 상
          (place[rowIndex + 1] || '').charAt(index), // 하
        ].filter((v) => v == 'P').length;

        if (
          (column == 'P' && userCount > 0) || // P기준 상하좌우에 P가 있는지
          (column == 'O' && userCount >= 2)
        ) {
          // O기준 상하좌우에 P가 2개 이상인지
          return true;
        }

        return false;
      }, '');
    })
      ? 0
      : 1;
  });

  return answer;
}

console.log(
  solution([
    ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
    ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
    ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
    ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
    ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
  ])
);
