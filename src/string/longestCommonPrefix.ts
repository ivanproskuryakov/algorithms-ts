function longestCommonPrefix(strs: string[]): string {
  let prefix = '';

  const text = strs.sort((a, b) => a.length - b.length)[0];

  for (let a = 0; a < text.length; a++) {
    const count = strs.filter(s => s[a] === text[a]).length;
    
    if (count === strs.length) {
      prefix += text[a];
    } else {
      break;
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]), 'fl');
console.log(longestCommonPrefix(["dog","racecar","car"]), '');
console.log(longestCommonPrefix(["cir","car"]), 'c');
