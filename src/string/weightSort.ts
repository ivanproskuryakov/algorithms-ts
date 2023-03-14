function weightSort(text: string) {
  const values: string[] = [];
  const weigths: number[] = [];

  for (let i = 0; i < text.length; i++) {
    const x = values.indexOf(text[i]);

    if (x === -1) {
      values.push(text[i]);
      weigths.push(1);
    } else {
      weigths[x] = weigths[x]+ 1;
    }
  }

  const sorted = values.sort((a, b) => {
    const ia = values.indexOf(a);
    const ib = values.indexOf(b);

    return weigths[ia] - weigths[ib];
  })

  return sorted;
}

console.log(weightSort('caaaaaabbccdeeffff'));
