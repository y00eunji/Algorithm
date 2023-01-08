const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function getPriority(caseNum, casePosition, queue) {
  const printList = [];

  while (queue.length > 0) {
    const queue2 = queue.map((arr) => arr[0]);
    const maxNumber = Math.max(...queue2);
    if (queue[0][0] === maxNumber) {
      printList.push(queue.shift()[1]);
    } else {
      queue.push(queue.shift());
    }
  }

  console.log(printList.indexOf(casePosition) + 1);
}

const repeatNumber = Number(input.shift());

for (let i = 0; i < repeatNumber; i++) {
  const testCase = input.splice(0, 2);

  const caseNum = testCase[0].split(' ')[0];
  const casePosition = Number(testCase[0].split(' ')[1]);

  const queue = testCase[1].split(' ').map(Number);
  const queueWithIndex = queue.map((n, i) => [n, i]);

  getPriority(caseNum, casePosition, queueWithIndex);
}
