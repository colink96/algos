/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.
*/

//Solution:
//Time and space complexity are both O(n)

var maxDepth = function(root) {
  let lMax = 0;
  let rMax = 0;
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  lMax = 1 + maxDepth(root.left);
  rMax = 1 + maxDepth(root.right);
  if (rMax > lMax) {
    return rMax;
  } else {
    return lMax;
  }
};
