/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**104. Maximum Depth of Binary Tree
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function (root) {
  let depth = 0;
  const dfs = (node, level) => {
    if (!node) {
      depth = Math.max(level - 1, depth);
      return;
    }
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };
  dfs(root, 1);
  return depth;
};
