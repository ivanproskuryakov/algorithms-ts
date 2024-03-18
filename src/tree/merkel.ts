class MerkelNode {
  val: number;
  left: MerkelNode | null;
  right: MerkelNode | null;

  constructor(val?: number, left?: MerkelNode | null, right?: MerkelNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
