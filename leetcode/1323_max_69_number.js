/*
Given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).



Example 1:

Input: num = 9669
Output: 9969
Explanation:
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.
*/

//Solution
//Time O(n) where n is the number of digits in num
//Space O(n)
var maximum69Number = function(num) {
  let max = num;
  let numStr = num.toString().split('');
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === '6') {
      numStr[i] = '9';
    } else if (numStr[i] === '9') {
      numStr[i] = '6';
    }
    if (parseInt(numStr.join('')) > max) {
      max = parseInt(numStr.join(''));
    }
    numStr = num.toString().split('');
  }
  return max;
};
