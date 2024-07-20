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

// class Solution {
//   public:
//       ListNode* partition(ListNode* first, ListNode* end){
//           if(first==end) return first;
//           ListNode *head = first, *tmp=NULL,*pre=head;
//           int value = head->val;
//           while(pre!=end){
//               tmp=pre->next;
//               if(tmp==end) break;
//               if(tmp&&tmp->val<value){
//                   pre->next=tmp->next;
//                   tmp->next=head;
//                   head=tmp;
//               }
//               else{
//                   pre=tmp;
//               }
//           }


//           return head;
//       }
//       ListNode* quickSort(ListNode* begin, ListNode* end){

//           if(begin ==end) return begin;
//           ListNode *head = partition(begin,end);
//           ListNode* h1=quickSort(head,begin);
//           ListNode* h2=quickSort(begin->next,end);

//           begin->next=h2;

//           return h1;
//       }

//       ListNode* sortList(ListNode* head) {
//           return quickSort(head,NULL);


//       }
//   };


const head = new ListNode();
head.next = new ListNode();
head.next.next = new ListNode();
head.next.next.next = new ListNode();

head.val = 4;
head.next.val = 2;
head.next.next.val = 1;
head.next.next.next.val = 3;

sortList(head);
