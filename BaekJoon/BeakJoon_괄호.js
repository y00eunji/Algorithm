let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = parseInt(input[0]);
let answer = '';

for(let i = 0; i < n; i++) {
    let stack = [];
    let ps = input[i + 1];
    let check = true;
    for(let j = 0; j < ps.length; j++) {
        if(ps[j] === "(") {
            stack.push(ps[j]);
        } else {
            if(stack.length === 0) {
                check = false;
                break;
            } else {
                stack.pop();
            }
        }
    }
    if(check && stack.length === 0) {
        answer += "YES\n";
    } else {
        answer += "NO\n";
    }
}

console.log(answer);