// https://leetcode.com/problems/3sum/

// Given an integer array nums, return all the triplets
// [nums[i], nums[j], nums[k]] such that
// i != j, i != k, and j != k,
// and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

function threeSum(nums: number[]): number[][] {
  const sorted = nums.sort();
  const map = new Map<string, number[]>();

  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length; j++) {
      if (i === j) {
        break;
      }
      for (let k = 0; k < sorted.length; k++) {
        if (i === k || j === k) {
          break;
        }

        const sumZero = sorted[i] + sorted[j] + sorted[k] === 0;

        if (sumZero) {
          const part = [sorted[i], sorted[j], sorted[k]].sort();

          map.set(part.toString(), part);
          // console.log(i, j, k, ' - ', part);
        }
      }
    }
  }

  return Array.from(map.values());
}


console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1,-1,2],[-1,0,1]]
