function romanToInt(s: string) {
  const roman = new Map();
  roman.set('I', 1);
  roman.set('V', 5);
  roman.set('X', 10);
  roman.set('L', 50);
  roman.set('C', 100);
  roman.set('D', 500);
  roman.set('M', 1000);


  let total = 0;
  
  for (let a = 0; a < s.length; a++) {
    const cur = roman.get(s[a]);

    total = total + cur;

    if (a - 1 >= 0) {
      const prev = roman.get(s[a - 1]);
      
      if (prev < cur) {
        total = total - prev - prev; 
      }
    }
  }

  return total;
};

console.log(romanToInt('III'), 3);
console.log(romanToInt('LVIII'), 58);
console.log(romanToInt('MCMXCIV'), 1994);