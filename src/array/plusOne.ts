// https://leetcode.com/problems/plus-one/

function plusOne(digits: number[]): number[] {
  digits[digits.length - 1]++;

  for (let a = digits.length - 1; a >= 0; a--) {
    if (digits[a] > 9) {
      digits[a] = 0;

      if (a > 0) {
        digits[a - 1]++;
      } else {
        return [
          1,
          ...digits
        ]
      }
    }
  }

  return digits;
};

console.log(plusOne([1, 2, 3])); // [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // [4, 3, 2, 2]
console.log(plusOne([9])); // [1, 0]
console.log(plusOne([9, 9])); // [1, 0, 0]

