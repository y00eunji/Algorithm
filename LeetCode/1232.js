var checkStraightLine = function (coords) {
  let len = coords.length;
  for (let i = 0; i < len - 2; i++) {
    let [x1, y1] = coords[i];
    let [x2, y2] = coords[i + 1];
    let [x3, y3] = coords[i + 2];

    let area = Math.abs(
      (1 / 2) * (x1 * y2 + x2 * y3 + x3 * y1 - (y1 * x2 + y2 * x3 + y3 * x1))
    );
    if (area > 0) return false;
  }
  return true;
};
