// https://leetcode.com/problems/remove-element/description/

function removeElement(nums: number[], val: number): number {
  let k = 0;

  for (let a = 0; a < nums.length; a++) {
    if (nums[a] !== val) {
      nums[k] = nums[a];
      k++;
    }
  }

  return k;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 2, 2, 1, 2, 2, 3, 0, 4, 2], 2));
