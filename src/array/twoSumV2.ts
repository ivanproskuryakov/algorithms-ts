// https://leetcode.com/problems/two-sum/solutions/4074159/hashmap-solution-with-step-by-step-explanation/

const twoSumV2 = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i];
    const part = map.get(num);

    if (part !== undefined) {
      return [part, i];
    }

    map.set(nums[i], i);
  }

  return [];
}

console.log(twoSumV2([2, 7, 11, 15], 9));
console.log(twoSumV2([3, 2, 4], 6));
console.log(twoSumV2([3, 3], 6));
console.log(twoSumV2([2, 5, 5, 11], 10));
