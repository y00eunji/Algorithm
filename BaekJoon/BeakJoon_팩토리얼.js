let N = Number(require('fs').readFileSync('/dev/stdin').toString());



function fac(N){
    if(N == 0 || N == 1){
        return 1;
    }else{
        return N * fac(N-1);
    }
}

console.log(fac(N));

//4! -> 4 * 3! -> 4 * (3 * 2!) -> 4 * (3 * (2 * 1!)
//n! -> n * (n-1)! -> n * {(n-1) * ((n-1)-1)!}