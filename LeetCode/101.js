/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**101. Symmetric Tree
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;

  let answer = true;
  const lQ = [];
  const rQ = [];
  lQ.push(root.left);
  rQ.push(root.right);

  while (lQ.length && rQ.length) {
    let lNode = lQ.shift();
    let rNode = rQ.shift();

    if (lNode === null && rNode === null) {
      answer = true;
      continue;
    }
    if (lNode === null || rNode === null) return false;

    if (lNode.val !== rNode.val) return false;

    lQ.push(lNode.left);
    lQ.push(lNode.right);
    rQ.push(rNode.right);
    rQ.push(rNode.left);
  }

  return answer;
};
