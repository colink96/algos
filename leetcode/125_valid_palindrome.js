/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.
*/

var isPalindrome = function(s) {
  s = s.replace(/\W/g, '');
  let left = s
    .substring(0, Math.floor(s.length / 2))
    .toLowerCase()
    .split('');
  let right = s
    .substring(Math.ceil(s.length / 2), s.length)
    .toLowerCase()
    .split('');
  let rIndx;
  for (let i = 0; i < left.length; i++) {
    rIndx = left.length - 1 - i;
    if (left[i] !== right[rIndx]) {
      return false;
    }
  }
  return true;
};
