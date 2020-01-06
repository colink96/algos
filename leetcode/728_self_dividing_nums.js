/*
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:
Input:
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

Note:

The boundaries of each input argument are 1 <= left <= right <= 10000.
*/

//Solution
//Time O(n) where n is total number of digits
//Space O(n) (disregarding output array)

var selfDividingNumbers = function(left, right) {
  let result = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDivisible(i)) {
      result.push(i);
    }
  }
  return result;
};

var isSelfDivisible = function(num, tot = num) {
  if (num === 0) {
    return false;
  }
  if (num < 10) {
    return tot % num === 0;
  }
  let firstDigit = num;
  let multiplier = 1;
  while (firstDigit >= 10) {
    firstDigit = firstDigit / 10;
    multiplier *= 10;
  }
  firstDigit = Math.floor(firstDigit);
  if (tot % firstDigit === 0) {
    if (num - firstDigit * multiplier < multiplier / 10) {
      return false;
    }
    return isSelfDivisible(num - firstDigit * multiplier, tot);
  }
  return false;
};
