function solution(n, lost, reserve) {

    let arr = new Array(n).fill(0);

    for (let lostElement of lost) {
        arr[lostElement-1] = -1
    }
    for (let reserveElement of reserve) {
        arr[reserveElement-1] += 1
    }

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === -1){
            if (arr[i-1] === 1){
                arr[i] += 1
                arr[i-1] -= 1

            }else if (arr[i+1] === 1){
                arr[i] += 1
                arr[i+1] -= 1
            }
        }

    }
    let count = arr.filter(el => el >= 0).length
    return count


}