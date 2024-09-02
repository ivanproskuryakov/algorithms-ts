import {ListNode} from '../lib';
import {linkedListToArray} from '../util';

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}

const l1 = new ListNode();
l1.next = new ListNode();
l1.next.next = new ListNode();
l1.val = 1;
l1.next.val = 2;
l1.next.next.val = 4;

const l2 = new ListNode();
l2.next = new ListNode();
l2.next.next = new ListNode();
l2.val = 1;
l2.next.val = 3;
l2.next.next.val = 4;

const merged = mergeTwoLists(l1, l2);

console.log(linkedListToArray(merged));
