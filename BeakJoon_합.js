let input = require('fs').readFileSync('/dev/stdin');
const num = Number(input);

let sum = 0

for(let i = 1; i <= num; i++){
    sum += i;

}
console.log(sum);
////////////////////////////////////////////////////////
let num = require('fs').readFileSync('/dev/stdin').map(value => +value);


let sum = 0

for(let i = 1; i <= num; i++){
    sum += i;

}
console.log(sum);
////////////////////////////////////////////////////////////
let num = require('fs').readFileSync('/dev/stdin');
let sum = 0

for(let i = 1; i <= num; i++){
    sum += i;

}
console.log(sum);