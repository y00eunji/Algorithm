function solution(board, moves) {
  var answer = 0;
  let basket = [];

  //크레인이 가는 위치에서 가장 위에 있는 값 뽑기
  for (let i = 0; i < moves.length; i++) {
    let crain = moves[i];

    for (let j = 0; j < board.length; j++) {
      if (board[j][crain - 1] !== 0) {
        let target = board[j][crain - 1];

        basket.push(target); //basket에 넣기
        board[j][crain - 1] = 0;

        if (basket.length == 1) break;

        //바구니에 이전에 들어있는 값과 새로넣을 인형 같으면 두개 삭제하기
        if (basket[basket.length - 2] === target) {
          basket.pop();
          basket.pop();
          answer+=2; //삭제할 때 answer를 1씩 카운트 하기
        }
        break;
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
