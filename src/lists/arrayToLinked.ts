// https://www.geeksforgeeks.org/create-linked-list-from-a-given-array

class Entry {
  public d: number;
  public next: Entry | null = null;

  constructor(d: number) {
    this.d = d;
  }
}

const insert = (p: Entry | null, value: number) => {
  const item = new Entry(value);

  if (p) {
    p.next = item;
  }

  return item;
}

const arrayToLinked = (numbers: number[]): Entry => {
  const root = insert(null, numbers[0]);

  let p = root;

  for (let i = 1; i < numbers.length; i++) {
    p = insert(p, numbers[i]);
  }

  return root;
}

const render = (root: Entry) => {
  const list: Entry[] = [root];
  let ptr: null | Entry = root;

  while (ptr) {
    list.push(ptr);
    ptr = ptr.next;
  }

  return list;
}

const linked = arrayToLinked([1, 2, 3, 4, 5]);
console.log(render(linked));
