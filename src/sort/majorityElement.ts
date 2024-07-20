// https://leetcode.com/problems/majority-element/description/

// Array
// Hash Table
// Divide and Conquer
// Sorting
// Counting

function majorityElement(nums: number[]): number {
  const m = new Map();

  let k = 0;
  let max = 0;
  let num = 0;

  while (k < nums.length) {
    if (!m.get(nums[k])) {
      m.set(nums[k], 1);
    } else {
      m.set(nums[k], m.get(nums[k]) + 1);
    }

    k++;
  }

  m.forEach((value, k) => {
    if (value > max) {
      num = k;
      max = value;
    }
  })

  return num;
};

// console.log(majorityElement([3, 2, 3]), 3);
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
console.log(majorityElement([1]), 1);
