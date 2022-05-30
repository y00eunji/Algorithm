/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 102. Binary Tree Level Order Traversal
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  answer = [];
  queue = [];

  queue.push(root);
  answer.push([root.val]);

  while (queue.length) {
    const printVal = [];
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      let curNode = queue.shift();
      if (curNode.left) {
        queue.push(curNode.left);
        printVal.push(curNode.left.val);
      }
      if (curNode.right) {
        queue.push(curNode.right);
        printVal.push(curNode.right.val);
      }
    }
    answer.push(printVal);
  }
  answer.pop();
  return answer;
};
