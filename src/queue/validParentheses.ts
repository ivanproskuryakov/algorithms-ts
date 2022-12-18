// Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

function isValid(s: string): boolean {
  let i = 0;

  const left = '([{';
  const right = ')]}';
  const stack = [];

  while (i < s.length) {
    // console.log(s[i]);

    if (left.includes(s[i])) {
      stack.push(s[i]);
    }
    if (right.includes(s[i])) {
      const rPos = right.indexOf(s[i]);
      const lPos = left[rPos];
      const last = stack[stack.length - 1];

      if (last === lPos) {
        stack.pop();
      }
    }

    // console.log(stack);

    i++;
  }

  return stack.length === 0;
}

const A = isValid('()');
const B = isValid('([]{})');
const C = isValid('(]');

console.log(A);
console.log(B);
console.log(C);
