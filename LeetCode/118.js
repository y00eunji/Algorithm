/**
 * 118. Pascal's Triangle
 * 배열, dp
 */
var generate = function (numRows) {
  let arr = [[1]];

  for (let i = 1; i < numRows; i++) {
    let temp = new Array(i + 1);
    temp[0] = 1; //맨 앞 1
    temp[temp.length - 1] = 1; //맨 뒤 1
    if (temp.length > 2) {
      for (let j = 1; j < temp.length - 1; j++) {
        temp[j] = arr[i - 1][j - 1] + arr[i - 1][j];
      }
    }
    arr.push(temp);
  }
  return arr;
};
console.log(generate(5));
