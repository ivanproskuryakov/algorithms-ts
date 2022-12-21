// Given an array nums of n integers, return an array of all the unique quadruplets
// [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target

// You may return the answer in any order.

// https://leetcode.com/problems/4sum/

function fourSum(nums: number[], target: number): number[][] {
  const numbers: number[][] = [];

  console.log(nums);
  console.log(target);

  for (let x = 0; x < nums.length; x++) {
    const n = [nums[x]];

    for (let y = 0; y < nums.length; y++) {
      const sum = n.reduce((r, v) => r + v, 0);

      console.log(sum);

      // const sum = numbers[x].includes(nums[y]);

      // if (x !== y && !found1) {
      //   let found2 = false;

      //   for (let z = 0; z < numbers.length; z++) {
      //     const s1 = numbers[z].join('');
      //     const s2 = [...numbers[x], ...[nums[y]]].join('');

      //     if (s1 === s2) {
      //       found2 = true;
      //     }
      //   }

      //   if (!found2) {
      //     numbers[x].push(nums[y]);
      //     numbers[x].sort((a, b) => a - b);
      //   }
      // }
    }
  }

  return numbers;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// console.log(fourSum([2, 2, 2, 2, 2], 8)); // [[2,2,2,2]]
