// https://leetcode.com/problems/design-hashset/description/
// Design a HashSet without using any built-in hash table libraries.


class MyHashSet {
  set: number[] = [];

  add(key: number): void {
    this.set[key] = key;
  }

  remove(key: number): void {
    delete this.set[key];
  }

  contains(key: number): boolean {
    return Boolean(this.set[key]);
  }
}

const obj = new MyHashSet();
// const obj.put(key, value);
// const var param_2 = obj.get(key);
// const obj.remove(key);

console.log(obj);
