// https://leetcode.com/problems/sort-list/

// Given the head of a linked list, return the list after sorting it in ascending order.

// Linked List
// Two Pointers
// Divide and Conquer
// Sorting
// Merge Sort

import {ListNode} from "../../lib";

function sortList(head: ListNode | null): ListNode | null {
  let node = head;

  while (node) {
    console.log(node);
    node = node.next;
  }

  return head;
};

// function sortList(head: ListNode | null): ListNode | null {
//   if (head === null || head.next === null) return head
//   //split the list into 2 parts
//   let middle = null
//   let slow = head
//   let fast = head
//   while (fast && fast.next) {
//     fast = fast.next.next
//     middle = slow
//     slow = slow.next
//   }
//   middle.next = null
//   //sort 2 parts
//   let left = sortList(head)
//   let right = sortList(slow)
//   //merge 2 parts
//   return mergeTwoSortedLists(left, right)
// };

// function mergeTwoSortedLists(left: ListNode | null, right: ListNode | null): ListNode | null {
//   let head: ListNode | null = new ListNode()
//   let tail: ListNode | null = head
//   let i = left
//   let j = right
//   while (i && j) {
//     if (i.val < j.val) {
//       tail.next = i
//       i = i.next
//     }
//     else {
//       tail.next = j
//       j = j.next
//     }
//     tail = tail.next
//   }
//   if (i) tail.next = i
//   if (j) tail.next = j
//   return head.next
// }

const head = new ListNode();
head.next = new ListNode();
head.next.next = new ListNode();
head.next.next.next = new ListNode();

head.val = 4;
head.next.val = 2;
head.next.next.val = 1;
head.next.next.next.val = 3;

sortList(head);














// const head = new ListNode();
// head.next = new ListNode();
// head.next.next = new ListNode();
// head.next.next.next = new ListNode();
// head.next.next.next.next = new ListNode();

// head.val = -1;
// head.next.val = 5;
// head.next.next.val = 3;
// head.next.next.next.val = 4;
// head.next.next.next.next.val = 5;

// console.log(sortList(head));
