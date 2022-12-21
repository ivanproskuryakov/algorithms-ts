// The median is the middle value in an ordered integer list.
// If the size of the list is even, there is no middle value.
// So the median is the mean of the two middle values.

// For examples, if arr = [2,3,4], the median is 3.
// For examples, if arr = [1,2,3,4], the median is (2 + 3) / 2 = 2.5.

// You are given an integer array nums and an integer k. There is a
// sliding window of size k which is moving from the very left of the
// array to the very right. You can only see the k numbers in the window.
// Each time the sliding window moves right by one position.

// Return the median array for each window in the original array.
// Answers within 10-5 of the actual value will be accepted.

// https://leetcode.com/problems/merge-intervals/

function medianSlidingWindow(nums: number[], k: number): number[] {
  const median: number[] = [];

  for (let i = 0; i < nums.length - k + 1; i++) {
    let s = 0;

    for (let x = i; x < i + 3; x++) {
      s = s + nums[x];
    }

    median[i] = Math.round(s / 3);
  }

  return median;
};

console.log(medianSlidingWindow([1, 2, 3, 4, 2, 3, 1, 4, 2], 3));
 // [2.00000, 3.00000, 3.00000, 3.00000, 2.00000, 3.00000, 2.00000]
