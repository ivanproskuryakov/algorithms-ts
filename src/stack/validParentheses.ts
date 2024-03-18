const vocabulary: Record<string, string> = {
  '{': '}',
  '(': ')',
  '[': ']'
}

function isValid(s: string): boolean {
  if (s.length < 2) {
    return false;
  }

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(vocabulary[s[i]]);
    }
  }

  return stack.length === 0;
};
