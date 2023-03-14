const mergeSorted = (a: number[], b: number[]): number[] => {
  const final: number[] = [];
  const total = a.length > b.length ? a.length : b.length;

  for (let i = 0; i < total; i++) {
    if (a[i] && b[i]) {
      if (a[i] < b[i]) {
        final.push(a[i]);
        final.push(b[i]);
      } else {
        final.push(b[i]);
        final.push(a[i]);
      }
    } else if (a[i]) {
      final.push(a[i]);
    } else if (b[i]) {
      final.push(b[i]);
    }
  }

  return final;
}

console.log(mergeSorted([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7, 8]));
