let input = require('fs').readFileSync('/dev/stdin').toString();

let answer = '';
let inputs = Number(input);

for (let i = inputs; i >= 1; i--) {
    answer += i + "\n";
}

console.log(answer);