let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let x = 1; x <= input[0]; x++) {
    let number = input[x].split(' ');

    console.log(`Case #${x}: ${Number(number[0])+ Number(number[1])}`);
}
