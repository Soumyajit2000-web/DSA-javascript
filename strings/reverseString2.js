/* 
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

Example 1:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Example 2:

Input: s = "abcd", k = 2
Output: "bacd"
 

Constraints:

1 <= s.length <= 104
s consists of only lowercase English letters.
1 <= k <= 104
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  s = s.split("");
  for (let i = 0; i < s.length; i = i + 2 * k) {
    let n = Math.min(k, s.length - i);
    let mid = Math.floor(n / 2);
    for (let j = 0; j < mid; j++) {
      let temp = s[i + j];
      s[i + j] = s[i + n - 1 - j];
      s[i + n - 1 - j] = temp;
    }
  }
  return s.join("");
};

let s = "abcdefg";
console.log(reverseStr(s, 2));
