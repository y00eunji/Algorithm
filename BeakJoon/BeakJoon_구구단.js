const Num = require('fs').readFileSync('dev/stdin').toString();
const N = Number(Num);

for(var i = 1; i <10; i++){
    console.log(`${N} * ${i} = ${N * i}`);
}