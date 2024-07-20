// Given an array of integers nums, sort the array in ascending order and return it.
// https://leetcode.com/problems/sort-an-array/description/

function sortArray(arr: number[]): number[] {
  const n: number = arr.length;

  for (let i: number = 0; i < n; i++) {
    for (let j: number = 0; j < n - i - 1; j++) {

      // console.log(i, j, arr[i], arr[j] > arr[j + 1], arr);

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log(sortArray([5, 2, 3, 1]), [1, 2, 3, 5]);
console.log(sortArray([5, 1, 1, 2, 0, 0]), [0, 0, 1, 1, 2, 5]);
console.log(sortArray([5, 2, 3, 1]), [1, 2, 3, 5]);
