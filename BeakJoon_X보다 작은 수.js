const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let count = input[0].split(' ').map(x => Number(x));
let sequence = input[1].split(' ').map(x => Number(x));
let answer = [];

for (let i = 0; i <= count[0]; i++) {
    if (count[1] > sequence[i]){
        answer.push(sequence[i])
    }

}
console.log(answer.join(' '))