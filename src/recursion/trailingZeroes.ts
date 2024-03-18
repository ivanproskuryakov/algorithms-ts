function factorial(n: number): number {
  let value = n;

  function fact(n: number) {
    console.log(value, n);
    value = value * (n - 1);

    if (n > 2) {
      fact(n - 1);
    }
  }

  fact(n);

  return value;
}

function trailingZeroes(n: number): number {
  // if (n < 2) {
  //   return 0;
  // }

  const value = factorial(n);
  let v = value;
  let c = 0;

  while (v % 10 === 0) {
    v = v / 10;
    c++;
  }

  return c;
};

console.log(trailingZeroes(25));
