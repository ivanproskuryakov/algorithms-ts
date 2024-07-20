// Given an array of integers nums, sort the array in ascending order and return it.
// https://leetcode.com/problems/sort-an-array/

function sortArray(arr: number[]): number[] {
  const n: number = arr.length;

  for (let i: number = 0; i < n; i++) {
    let x = i;

    for (let j: number = i + 1; j < n; j++) {
      if (arr[j] < arr[x]) {
        x = j;
      }
    }

    [arr[x], arr[i]] = [arr[i], arr[x]];
  }

  return arr;
}

console.log(sortArray([5, 2, 3, 1]), [1, 2, 3, 5]);
console.log(sortArray([5, 1, 1, 2, 0, 0]), [0, 0, 1, 1, 2, 5]);
console.log(sortArray([5, 2, 3, 1]), [1, 2, 3, 5]);
