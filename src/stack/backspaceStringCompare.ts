function backspaceCompare(s: string, t: string): boolean {
  const a = [];
  const b = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '#') {
      a.push(s[i]);
    } else {
      a.pop();
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] !== '#') {
      b.push(t[i]);
    } else {
      b.pop();
    }
  }

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};
