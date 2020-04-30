// Given a binary tree, return the tilt of the whole tree.

// The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.

// The tilt of the whole tree is defined as the sum of all nodes' tilt.

//SOLUTION:

var sumTree = function (root) {
  if (!root) {
    return 0;
  }
  return sumTree(root.left) + sumTree(root.right) + root.val;
};

var findTilt = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 0;
  }
  if (!root.left && root.right) {
    return Math.abs(sumTree(root.right)) + findTilt(root.right);
  }
  if (root.left && !root.right) {
    return Math.abs(sumTree(root.left)) + findTilt(root.left);
  }
  return (
    Math.abs(sumTree(root.right) - sumTree(root.left)) +
    findTilt(root.left) +
    findTilt(root.right)
  );
};
