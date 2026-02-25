/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let x = 0;
  if (strs.length === 1) {
      return strs[0];
  }

  while (x < strs[0].length) {
    let ch = strs[0][x];
    for (let i = 1; i < strs.length; i++) {
      if (ch !== strs[i][x] || x === strs[i].length) {
        return strs[0].slice(0, x);
      }
    }
    x++;
  }

  return strs[0].slice(0,x);
};

const strs = ["flower","flower","flower","flower"];
console.log(longestCommonPrefix(strs));
