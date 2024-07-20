// Given an array of integers nums, sort the array in ascending order and return it.
// https://leetcode.com/problems/sort-an-array/

function partition(arr: number[], start: number, end: number): number {
  // Temporary pivot index points to start
  let i = end;

  console.log('partition -----', start, end, i);

  for (let j = start; j < end; j++) {
    // If the current element is less than or equal to the pivot
    console.log(start, end, i, arr, arr[j] <= arr[end]);

    if (arr[j] <= arr[end]) {
      i++;
      [arr[j], arr[i]] = [arr[i], arr[j]]
    }
  }

  // [arr[i], arr[end]] = [arr[end], arr[i]];

  return i;
}

function sortArray(arr: number[], start = 0, end = arr.length - 1): number[] {
  if (start > end || start < 0) {
    return arr;
  }

  // Divide and Conquer
  const pivot = partition(arr, start, end);

  console.log(pivot);

  sortArray(arr, start, pivot - 1);
  // sortArray(arr, pivot, end);

  return arr;
}

console.log(sortArray([5, 2, 3, 1]), [1, 2, 3, 5]);
// console.log(sortArray([5, 1, 1, 2, 0, 0]), [0, 0, 1, 1, 2, 5]);
// console.log(sortArray([5, 2, 3, 1]), [1, 2, 3, 5]);
