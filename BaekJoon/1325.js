const INPUT = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map(Number));

const [N, M] = INPUT[0];
const newArr = new Array(N + 1).fill(0).map(() => []);

let answer = [];

let maxComputer = 0;

const bfs = (start) => {
  let count = 0;

  const queue = [start];

  const visited = Array(N + 1).fill(false);
  visited[start] = true;

  while (queue.length) {
    let cur = queue.shift();

    for (let i = 0; i < newArr[cur].length; i++) {
      let computer = newArr[cur][i];
      if (!visited[computer]) {
        count++;
        queue.push(computer);
        visited[computer] = true;
      }
    }
  }

  if (maxComputer < count) {
    maxComputer = count;
    answer = [start];
  } else if (maxComputer === count) {
    answer.push(start);
  }
};

for (let i = 1; i <= M; i++) {
  let [a, b] = INPUT[i];
  newArr[b].push(a);
}

for (let i = 0; i < newArr.length; i++) {
  bfs(i);
}

console.log(answer.join(' '));
