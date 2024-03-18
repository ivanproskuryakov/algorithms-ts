// https://leetcode.com/problems/search-insert-position/
// https://en.wikipedia.org/wiki/Binary_search_algorithm

function searchInsert(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length;

  let mean = -1;

  while (l <= r) {
    mean = Math.floor((l + r) / 2);

    if (nums[mean] < target) {
      l = mean + 1;
    } else if (nums[mean] > target) {
      r = mean - 1;
    } else {
      return mean;
    }
  }

  if (target > nums[mean]) {
    return mean + 1;
  }

  return mean;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0
console.log(searchInsert([1, 3], 2)); // 1
console.log(searchInsert([1, 3, 5], 4)); // 2

