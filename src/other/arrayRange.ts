// Дан список интов, повторяющихся элементов в списке нет.
// Нужно преобразовать это множество в строку,
// сворачивая соседние по числовому ряду числа в диапазоны.

const arrayRange = (array: number[]) => {
  const m = new Map();
  const sorted = array.sort((a, b) => a - b);
  const result: string[] = [];

  let p = sorted[0];

  for (let i = 0; i < sorted.length; i++) {
    const current = m.get(sorted[p]);

    if (!current) {
      m.set(sorted[p], sorted[i]);
    } else {
      if (sorted[i] - current !== 1) {
        p = i;
      }
      m.set(sorted[p], sorted[i]);
    }
  }

  m.forEach((v, k) => result.push(v !== k ? `${k}-${v}` : k));

  return result.join(',');
}

console.log(arrayRange([1, 4, 5, 2, 3, 9, 8, 11, 0])); // "0-5,8-9,11"
