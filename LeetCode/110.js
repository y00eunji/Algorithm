/*
110. Balanced Binary Tree
균형이진트리
*/ /**
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
const isBalanced = function toDetermineHeightBalanced(root) {
  const dfs = function (node) {
    if (!node) return 0; // ending 조건, null 일 때 0부터 시작해서 call stack 을 타고 올라가면서 깊이가 쌓인다.
    const left = dfs(node.left); // -1 or 왼쪽 자식의 최대 깊이
    const right = dfs(node.right); // -1 or 오른쪽 자식의 최대 깊이

    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1; // unbalanced, call stack 타고 올라가서 최종적으로 -1 return 한다.

    return 1 + Math.max(left, right); //큰 것 비교해서 return 하면 트리의 최대 깊이를 알 수 있다.
  };

  return dfs(root) !== -1;
};
