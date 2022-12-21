// Given the roots of two binary trees p and q, write a function to
// check if they are the same or not.

// Two binary trees are considered the same if they are structurally
// identical, and the nodes have the same value.

// https://leetcode.com/problems/same-tree/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  }
  if (!p || !q) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }

  const left = isSameTree(p.left, q.left)
  const right = isSameTree(p.right, q.right)

  return left === true && right === true;
};

const p1 = new TreeNode(1);
p1.left = new TreeNode(2);
p1.right = new TreeNode(3);

const q1 = new TreeNode(1);
q1.left = new TreeNode(2);
q1.right = new TreeNode(3);

const A = isSameTree(p1, q1);


const p2 = new TreeNode(1);
p2.left = new TreeNode(2);

const q2 = new TreeNode(1);
q2.left = new TreeNode(2);

const B = isSameTree(p2, q2);


const p3 = new TreeNode(1);
p3.left = new TreeNode(2);
p3.right = new TreeNode(3);

const q3 = new TreeNode(1);
q3.left = new TreeNode(2);
q3.right = new TreeNode(1);

const C = isSameTree(p3, q3);

console.log(A);
console.log(B);
console.log(C);
