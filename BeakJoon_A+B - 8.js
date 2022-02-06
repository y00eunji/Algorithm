let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let x = 1; x <= input[0]; x++) {
    let number = input[x].split(' ');

    let A = Number(number[0]);
    let B = Number(number[1]);

    console.log(`Case #${x}: ${A} + ${B} = ${A + B} `);
}
