let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let i = 0;

while(true){
    let nums = input[i].split(' ');

    a = Number(nums[0]);
    b = Number(nums[1]);

    if(a==0 && b==0){
        break;
    }
    console.log(a+b);
    i++;
}