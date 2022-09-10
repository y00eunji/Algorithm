let input = require('fs').readFileSync('/dev/stdin').toString();

let num = Number(input);
for (let i = 0; i < num; i++) {
    let star = '';

    for (let j = num - 1 ; j >= 0 ; j--) { // 첫 for문이랑 같이 맞춰주기
        star += j <= i ? '*': ' ';
    }
    console.log(star);
}

