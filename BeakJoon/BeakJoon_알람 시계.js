let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

let Hour = Number(input[0]);  // Hour
let Minute = Number(input[1]);  // Minute

Minute -= 45;

if (Minute < 0) {
    Minute += 60;
    Hour--;

    if (Hour === -1) {
        Hour = 23;
    }
}

console.log(Hour + ' ' + Minute);