const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin');
const a = Number(input);

if (100 >= a && a >= 90){
    console.log('A')
}
else if(89 >= a && a >= 80){
    console.log('B')
}
else if(79 >= a && a >= 70){
    console.log('C')
}
else if(69 >= a && a >= 60){
    console.log('D')
}
else{
    console.log('F')