function linearSearch(nums: number[], target: number): number {
  let i = 0;
  let x = -1;

  while (i < nums.length) {
    if (nums[i] === target) {
      x = nums[i];
      i = nums.length;
    }

    i++;
  }

  return x;
}

console.log(linearSearch([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(linearSearch([-1, 0, 3, 5, 9, 12], 2)); // -1
