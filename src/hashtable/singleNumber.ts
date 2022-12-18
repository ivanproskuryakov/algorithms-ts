// Given a non-empty array of integers nums, every element appears
// twice except for one. Find that single one.

// You must implement a solution with a linear runtime
// complexity and use only constant extra space.

// https://github.com/jasonmauss/LeetCode/tree/main/SingleNumber/TypeScript

function singleNumber(nums: number[]): number {
  const set = new Set();

  nums.forEach(element => {
    if (set.has(element)) {
      set.delete(element);
    } else {
      set.add(element);
    }
  });

  return set.values().next().value;
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
