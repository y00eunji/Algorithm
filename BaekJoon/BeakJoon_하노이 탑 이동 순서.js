let N = Number(require('fs').readFileSync('/dev/stdin').toString());
let count = 0;
let answer = '';

function hanoi(n, from, temp, to){
    if(n === 1){
        answer += from + ' ' + to + '\n';
        count++;
    }else{
        hanoi(n-1, from, to, temp);
        answer += from + ' ' + to + '\n';
        count++;
        hanoi(n-1, temp, from, to);
    }
}

hanoi(N, 1, 2, 3);
console.log(count);
console.log(answer);