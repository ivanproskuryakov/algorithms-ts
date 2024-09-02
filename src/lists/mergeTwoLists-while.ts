import {ListNode} from '../lib';
import {linkedListToArray} from '../util';

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const head = new ListNode();
  let p = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }

    p = p.next;
  }

  if (l1) p.next = l1;
  if (l2) p.next = l2;

  return head.next;
}

const l1 = new ListNode();
l1.next = new ListNode();
l1.next.next = new ListNode();
l1.next.next.next = new ListNode();
l1.next.next.next.next = new ListNode();
l1.val = 1;
l1.next.val = 2;
l1.next.next.val = 4;
l1.next.next.next.val = 5;
l1.next.next.next.next.val = 6;

const l2 = new ListNode();
l2.next = new ListNode();
l2.next.next = new ListNode();
l2.val = 1;
l2.next.val = 3;
l2.next.next.val = 4;

const merged = mergeTwoLists(l1, l2);

console.log(linkedListToArray(merged));
