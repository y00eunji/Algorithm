let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let i = 0;
let length = input.length-1;

while(length > 0){
    let nums = input[i].split(' ').map(Number);

    let a = nums[0];
    let b = nums[1];

    console.log(a+b);

    i++;
    length--;

}