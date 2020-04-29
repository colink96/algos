/*
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.
*/

//SOLUTION:
//Time: 0(n)
//Space: 0(n)

var copyRandomList = function (head) {
  if (!head) {
    return null;
  }
  let currentNode = head;
  let nodes = new Map();
  let copy = new Node(head.val);
  let copyHead = copy;
  while (currentNode.next) {
    nodes.set(currentNode, copy);
    currentNode = currentNode.next;
    copy.next = new Node(currentNode.val);
    copy = copy.next;
  }
  nodes.set(currentNode, copy);
  currentNode = head;
  copy = copyHead;
  while (currentNode) {
    if (currentNode.random) {
      copy.random = nodes.get(currentNode.random);
    } else {
      copy.random = null;
    }
    currentNode = currentNode.next;
    copy = copy.next;
  }
  return copyHead;
};
