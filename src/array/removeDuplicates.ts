// https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/1146199033/

const removeDuplicates = (nums: number[]): number => {
  let k: number = 1;

  for (let a = 1; a < nums.length; a++) {
    if (nums[a] !== nums[a - 1]) {
      nums[k] = nums[a];
      k++;
    }
  }

  return k;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
