// Given an array nums of n integers, return an array of all the unique quadruplets
// [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// https://leetcode.com/problems/4sum/

function fourSum(nums: number[], _target: number): number[][] {
  const numbers:number[][] = [];
  const hashses:string[] = []

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let answer: number[] = [];

    for (let x = 0; x < nums.length; x++) {
      if (x !== i) {
        if (answer.length < 2) { // less then half
          answer.push(nums[x]);
        } else {
          if (answer.includes(-nums[x]) || answer.includes(nums[x])) {
            answer.push(nums[x]);
          }
        }
      }
    }

    const hash = answer.toString();

    if (!hashses.includes(hash) && answer.length === 4 ) {
      numbers.push(answer);
      hashses.push(hash);
    }
  }

  return numbers;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2, 2, 2, 2, 2], 8)); // [[2,2,2,2]]
