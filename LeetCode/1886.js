/**
 * 1886. Determine Whether Matrix Can Be Obtained By Rotation
 * 이미지 돌리기
 */
var findRotation = function (mat, target) {
  const wlen = mat[0].length;
  const hlen = mat.length;

  let normal = true;
  let One = true;
  let Two = true;
  let Three = true;

  for (let i = 0; i < hlen; i++) {
    for (let j = 0; j < wlen; j++) {
      //안돌릴때
      if (mat[i][j] !== target[i][j]) normal = false;
      //오른쪽으로 1회 회전
      if (mat[i][j] !== target[j][width - 1 - i]) One = false;
      //오른쪽으로 2회 회전
      if (mat[i][j] !== target[height - 1 - i][width - 1 - j]) Two = false;
      //오른쪽으로 3회 회전
      if (mat[i][j] !== target[height - 1 - j][i]) Three = false;
    }
  }
  return normal || One || Two || Three;
};
