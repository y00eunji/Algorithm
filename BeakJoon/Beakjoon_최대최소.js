// let input ="5\n" +
//     "20 10 35 30 7";
let input = require('fs').readFileSync('/dev/stdin').toString()
let splitinput = input.split('\n');
let num = splitinput[1].split(' ').map(x => Number(x))



let max = Math.max(...num)
let min = Math.min  (...num)

console.log(min+' '+max)