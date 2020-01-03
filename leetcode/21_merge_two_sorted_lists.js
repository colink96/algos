/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
*/

//Solution:
//O(n + m) Time
//O(1) Space

var mergeTwoLists = function(l1, l2) {
  let newList = new ListNode(0);
  let head = newList;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      newList.next = l1;
      l1 = l1.next;
    } else {
      newList.next = l2;
      l2 = l2.next;
    }
    newList = newList.next;
  }
  if (l1) {
    newList.next = l1;
  } else {
    newList.next = l2;
  }
  return head.next;
};
