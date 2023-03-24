const [N, ...arr] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const numbers = [];

const checkNum = (str) => {
  let temp = [...str];

  if (temp.length > 1) {
    while (temp[0] == '0') {
      if (temp.length === 1) break;
      temp.splice(0, 1);
    }
  }
  return temp.join('');
};

const getNumber = (arr) => {
  const splits = arr.split('');
  let temp = '';

  for (let i = 0; i < splits.length; i++) {
    if (!isNaN(Number(splits[i]))) {
      temp += splits[i];
    } else if (temp.length > 0) {
      let newTemp = checkNum(temp);
      numbers.push(newTemp);
      temp = '';
    }
  }

  if (temp.length > 0) {
    let newTemp = checkNum(temp);
    numbers.push(newTemp);
  }
};

for (let i = 0; i < N; i++) {
  getNumber(arr[i]);
}

const stringnumbercomparator = (a, b) => {
  if (a.length < b.length) return -1;
  if (a.length > b.length) return 1;

  for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) return -1;
    else if (a[i] > b[i]) return 1;
  }

  return 0;
};

numbers.sort(stringnumbercomparator);

console.log(numbers.join('\n'));
