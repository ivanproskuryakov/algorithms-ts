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

console.log(factorial(5));
