// let input = "150\n" +
//     "266\n" +
//     "427";
const nums = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const result = String(nums[0] * nums[1] * nums[2]);
//split 하려고 string으로 받기

for(let i=0; i<=9; i++){
    console.log(result.split(i).length-1);
}
// 정해진 숫자로 몇번 split을 했는지 알면 그 숫자의 개수를 구할 수 있다.
// ex) 만약 17037300을 0으로 split한다면, 배열 [ '17', '373', '', '' ]이 나온다.
// 이 배열의 길이에 -1을 하면 숫자 0의 개수를 구할 수 있다.

