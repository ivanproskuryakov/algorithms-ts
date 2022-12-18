// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

// https://github.com/jasonmauss/LeetCode/blob/main/TwoSum/TypeScript/TwoSum.ts

function twoSum(nums: number[], target: number): number[] {
  const output: number[] = [];

  for (let first = 0; first < nums.length; first++) {
    if (output.length) {
      break;
    }

    const current = nums[first];

    for (let second = first + 1; second < nums.length; second++) {
      if (current + nums[second] === target) {
        output.push(first, second);
        break;
      }
    }
  }

  return output;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 9));
console.log(twoSum([3, 3], 6));
