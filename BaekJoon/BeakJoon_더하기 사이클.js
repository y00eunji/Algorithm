let input = 26;

let num = input
let count = 0;
let sum = 0;

while(input >= 0 && input <= 99){
    count++;

    let a = num % 10 //1의자리
    let b = Math.floor(num/10) //10의자리

    sum = a + b
    num = (sum % 10) + a * 10

    if(num === input){
        break;
    }
}
console.log(count)