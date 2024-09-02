import {ListNode} from './lib';

export const linkedListToArray = (list: ListNode | null): number[] => {
  if (!list) {
    return [];
  }
  const recursion = (items: number[], p: ListNode | null) => {
    if (p) {
      items.push(p.val);
      p = p.next;
      recursion(items, p);
    }
  };

  const items: number[] = [];

  let p: null | ListNode = list;

  recursion(items, p);

  return items;
};
