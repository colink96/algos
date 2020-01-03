/* Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.



Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"] */

//Solution:
//O(n) Time, O(1) Space
var reverseString = function(s) {
  let tempChar;
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    tempChar = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = tempChar;
  }
};
