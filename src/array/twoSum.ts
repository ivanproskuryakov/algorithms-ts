// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
  for (let a = 0; a < nums.length; a++) {
    for (let b = 1; b < nums.length; b++) {
      const sum = nums[a] + nums[b];

      if (target === sum && a !== b) {
        return [a, b];
      }
    }
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([2, 5, 5, 11], 10));
