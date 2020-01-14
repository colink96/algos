/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.


Example 1:

Input: n = 234
Output: 15
Explanation:
Product of digits = 2 * 3 * 4 = 24
Sum of digits = 2 + 3 + 4 = 9
Result = 24 - 9 = 15
Example 2:

Input: n = 4421
Output: 21
Explanation:
Product of digits = 4 * 4 * 2 * 1 = 32
Sum of digits = 4 + 4 + 2 + 1 = 11
Result = 32 - 11 = 21
*/

//Solution:
//Time O(n) where n is the number of digits
//Space O(n)

var subtractProductAndSum = function(n) {
  let mult = 1;
  let digits = [];
  let temp = n;
  while (n >= 10) {
    temp = temp / 10;
    mult *= 10;
    if (temp < 10) {
      digit = Math.floor(temp);
      digits.push(digit);
      n -= digit * mult;
      if (n < mult / 10) {
        digits.push(0);
      }
      mult = 1;
      temp = n;
    }
  }
  digits.push(Math.floor(n));
  return (
    digits.reduce((acc, i) => {
      return acc * i;
    }) -
    digits.reduce((acc, i) => {
      return acc + i;
    })
  );
};
