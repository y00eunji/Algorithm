/**
 * 429. N-ary Tree Level Order Traversal
 * 트리, BFS
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root, answer = [], level = 0) {
  if (!root) return [];

  answer[level] ? null : (answer[level] = []);
  answer[level].push(root.val);

  for (let ch of root.children) {
    levelOrder(ch, answer, level + 1);
  }

  return answer;
};
