// Given an array of intervals where intervals[i] = [starti, endi],
// merge all overlapping intervals, and return an array of the non-overlapping
// intervals that cover all the intervals in the input.

// https://leetcode.com/problems/merge-intervals/

// Array
// Sorting

function mergeIntervals(intervals: number[][]): number[][] {
  let i = 0;

  while (i < intervals.length - 1) {
    const [currentStart, currentEnd] = intervals[i];
    const [nextStart, nextEnd] = intervals[i + 1];

    if (currentEnd >= nextStart) {
      const newEnd = Math.max(currentEnd, nextEnd);
      intervals.splice(i, 2, [currentStart, newEnd]);
    } else {
      i++;
    }
  }

  return intervals;
}

const A = mergeIntervals([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
const B = mergeIntervals([
  [1, 4],
  [4, 5],
]);

console.log(A);
console.log(B);
