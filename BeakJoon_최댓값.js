// let input = "3\n" +
//     "29\n" +
//     "38\n" +
//     "12\n" +
//     "57\n" +
//     "74\n" +
//     "40\n" +
//     "85\n" +
//     "61";

let input = require('fs').readFileSync('/dev/stdin').toString()
let num = input.split('\n').map(x => Number(x))

let max = Math.max(...num)
let maxposition = num.indexOf(max) +1

console.log(max+'\n'+ maxposition)