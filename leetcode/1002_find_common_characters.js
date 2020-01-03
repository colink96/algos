/*
Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.
*/

//Solution
//Time O(n*m)
//Space O(n*m)

var commonChars = function(A) {
  let result = A[0].split('');
  A.slice(1).forEach(word => {
    word = word.split('');
    for (let i = 0; i < result.length; i++) {
      if (!word.includes(result[i])) {
        result.splice(i, 1, ' ');
      } else {
        word.splice(word.indexOf(result[i]), 1, ' ');
      }
    }
  });
  return result.filter(char => {
    return char !== ' ';
  });
};
