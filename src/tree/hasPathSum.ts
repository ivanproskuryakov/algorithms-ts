/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  function traverse(n: TreeNode | null, sum: number) {
    if (n === null) return false;
    if (sum + n.val === targetSum && n.left === null && n.right === null) {
      return true;
    }

    let l = false;
    let r = false;

    if (n.left) l = traverse(n.left, sum + n.val);
    if (n.right) r = traverse(n.right, sum + n.val);

    return l || r;
  }

  return traverse(root, 0);
};
