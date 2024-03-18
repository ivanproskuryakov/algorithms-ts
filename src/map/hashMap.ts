// https://leetcode.com/problems/design-hashmap/
// Design a HashMap without using any built-in hash table libraries.


class HMNode {
  public k: number;
  public v: number;
  public next: HMNode | null;

  constructor(k: number, v: number) {
    this.k = k;
    this.v = v;
  }
}

class HM {
  public root: HMNode | null = null;

  public put(k: number, v: number) {
    if (!this.root) {
      this.root = new HMNode(k, v);
    } else {
      let node = this.root;
      let result = null;

      while (node.next) {
        if (node.k === k) {
          result = node;
        }

        node = node.next;
      }

      if (result) {
        result.v = v;
      } else {
        node.next = new HMNode(k, v);
      }
    }
  }

  public get(k: number) {
    let node = this.root;

    while (node) {
      if (node.k === k) {
        return node;
      }

      node = node.next;
    }

    return null;
  }

  public remove(k: number) {
    let node = this.root;

    let isRemoved = false;

    while (node && !isRemoved) {
      if (node.next && node.next.k === k) {
        if (node.next.next) {
          node.next = node.next.next;
        }
        isRemoved = true;

        // console.log('removed');
      }

      node = node.next;
    }
  };

  public display() {
    let node = this.root;


    while (node) {
      console.log(node.k, node.v);
      node = node.next;
    }
  }
}


const hm = new HM();
hm.put(1, 1000);
hm.put(2, 2000);
hm.put(3, 3000);
hm.remove(2);

// console.log(hm);

hm.display();
