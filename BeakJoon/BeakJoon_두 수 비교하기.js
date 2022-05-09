const fs = require('fs');
const [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(value => +value);

if (A > B){
    console.log('>')
}
else if(A == B){
    console.log('==')
}
else{
    console.log('<')
}