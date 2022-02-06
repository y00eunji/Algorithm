let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0]);
const operator = ['+', '*', '-', '/'];
const expression = input[1].split('');
let operand = [];
let stack =[];

for (let i = 0; i < count; i++) {
    operand.push(Number(input[i + 2]));
}

expression.forEach((o) => {
    if(!operator.includes(o)){
        stack.push(operand[o.charCodeAt(0) - 65]);
    }
    else{

        let y = stack.pop();
        let x = stack.pop();
        let cal = 0;
        switch(o){
            case '+':
                cal = x + y;
                stack.push(cal);
                break;
            case '-':
                cal = x - y;
                stack.push(cal);
                break;
            case '*':
                cal = x * y;
                stack.push(cal);
                break;
            case '/':
                cal = x / y;
                stack.push(cal);
                break;
        }
    }
})
////////////////////////////////////////////////////////////////////////
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = input[0];
const operator = ['+', '', '-', '/'];
const expression = input[1].split('');
let operand = [];
for (let i = 0; i < count; i++) {
    operand.push(Number(input[i + 2]));
}
let stack =[];

const cal = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '': (a, b) => a * b,
    '/': (a, b) => a / b
}

expression.forEach((ex) => {
    if (!operator.includes(ex)) {
        stack.push(operand[ex.charCodeAt(0) - 65]);
    } else {
        let second = stack.pop();
        let first = stack.pop();
        const func = cal[ex];
        stack.push(func(first, second))
    }
})
console.log(parseFloat(stack.pop()).toFixed(2))


////////////////////////////////////////////////////////////////////////

for(let i = 0; i < expression.length; i++){

    if(!operator.includes(expression[i])){
        stack.push(operand[expression[i].charCodeAt(0) - 65]);
    }
    else{

        let y = stack.pop();
        let x = stack.pop();
        let cal = 0;
        switch(expression[i]){
            case '+':
                cal = x + y;
                stack.push(cal);
                break;
            case '-':
                cal = x - y;
                stack.push(cal);
                break;
            case '*':
                cal = x * y;
                stack.push(cal);
                break;
            case '/':
                cal = x / y;
                stack.push(cal);
                break;
        }
    }
}
console.log(stack[0].toFixed(2))