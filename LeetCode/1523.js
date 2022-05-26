//1523. Count Odd Numbers in an Interval Range
//홀수 개수 찾기
var countOdds = function (low, high) {
  const devide = Math.round((high - low) / 2);

  return low % 2 === 1 && high % 2 === 1 ? devide + 1 : devide;
};
