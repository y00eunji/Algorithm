const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let num = input.shift().split(" ");
let N = +num[0];
let M = +num[1];
let board = [];
for (let i = 0; i < N; i++) {
  board[i] = input[i].split("");
}

solution(N, M, board);

function solution(row, col, board) {
  let answer = row * col;

  // 1. 후보 보드 선택
  for (let i = 0; i <= row - 8; i++) {
    // 아래쪽 이동

    for (let j = 0; j <= col - 8; j++) {
      // 오른쪽 이동

      // 2. 왼쪽 상단 색 선택
      answer = Math.min(answer, search(true, i, j, board));
      answer = Math.min(answer, search(false, i, j, board));
    }
  }

  console.log(answer);
}

// 3. 보드 탐색
function search(isB, i, j, board) {
  let changes = 0;
  let color = "W";

  if (isB) color = "B";

  for (let k = 0; k < 8; k++) {
    for (let l = 0; l < 8; l++) {
      if (board[i + k][j + l] !== color) changes++;
      color = color === "B" ? "W" : "B";
    }
    color = color === "B" ? "W" : "B";
  }

  return changes;
} 
