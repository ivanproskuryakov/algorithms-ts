function searchInsert(nums: number[], target: number): number {
  for (let x = 0; x < nums.length; x++) {
    if (nums[x] === target) {
      return x;
    }
    if (nums[x + 1] && nums[x] < target && nums[x + 1] > target) {
      return x + 1;
    }
    if (nums[x] < target && x === nums.length - 1) {
      return x + 1;
    }
  }
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 6));
