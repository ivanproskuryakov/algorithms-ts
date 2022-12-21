// Given an array of intervals where intervals[i] = [starti, endi],
// merge all overlapping intervals, and return an array of the non-overlapping
// intervals that cover all the intervals in the input.

// https://leetcode.com/problems/merge-intervals/

function bubble(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let x = 0; x < nums.length; x++) {
      if (nums[i] < nums[x]) {
        const a = nums[x];

        nums[x] = nums[i];
        nums[i] = a;
      }
    }
  }

  return nums;
}

console.log(bubble([1, 4, 2, 5, 8]));
console.log(bubble([10, 14, 12, 1, 8]));
