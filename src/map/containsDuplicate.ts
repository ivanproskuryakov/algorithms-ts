// https://leetcode.com/problems/contains-duplicate/

// Array
// Hash Table
// Sorting

function containsDuplicate(nums: number[]): boolean {
  const m = new Map();
  let k = 0;

  let f = false;

  while (k < nums.length) {
    if (!m.get(nums[k])) {
      m.set(nums[k], 1);
    } else {
      m.set(nums[k], m.get(nums[k]) + 1);
    }
    k++;
  }

  m.forEach((value) => {
    if (!f && value > 1) {
      f = true;
    }
  })

  return f;
};

console.log(containsDuplicate([1, 2, 3, 1]), true);
console.log(containsDuplicate([1, 2, 3, 4]), false);
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
