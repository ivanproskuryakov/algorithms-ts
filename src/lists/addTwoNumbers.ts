class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode): ListNode | null {
  const list = new ListNode();
  let l = list;

  while (l1.next) {
    l1.next = l1.next.next;

    l.next = new ListNode();

    l = l.next;
  }

  return list;
};

const l1 = new ListNode();
l1.next = new ListNode();
l1.next.next = new ListNode();
l1.val = 100;
l1.next.val = 200;
l1.next.next.val = 300;

// const l2 = new ListNode();
// l2.next = new ListNode();
// l2.next.next = new ListNode();
// l2.val = 1;
// l2.next.val = 2;
// l2.next.next.val = 3;

console.log(addTwoNumbers(l1));
