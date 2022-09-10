const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(val=>+val);
const [A,B,C] = input

console.log( (A+B)%C );
console.log( ((A%C) + (B%C))%C );
console.log( (A*B)%C );
console.log( ((A%C) * (B%C))%C );
