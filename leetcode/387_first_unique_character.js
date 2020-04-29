/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
*/

//SOLUTION:
//Time: 0(n)
//Constant Space

var firstUniqChar = function (s) {
  let memo = {};
  for (let i = 0; i < s.length; i++) {
    if (memo[s[i]]) {
      memo[s[i]]++;
    } else {
      memo[s[i]] = 1;
    }
  }
  for (let y = 0; y < s.length; y++) {
    if (memo[s[y]] === 1) {
      return y;
    }
  }
  return -1;
};
