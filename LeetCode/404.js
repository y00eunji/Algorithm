/*
404. Sum of Left Leaves
트리, 이진 트리, dfs, bfs
*/
var sumOfLeftLeaves = function (root, isLeft) {
  if (!root) return 0;

  if (!root.left && !root.right && isLeft) return root.val;

  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
};
