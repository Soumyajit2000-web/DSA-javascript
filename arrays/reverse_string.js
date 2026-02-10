// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if (s.length <= 1) return s;
    let end = s.length - 1;
    for (let start = 0; start < s.length; start++) {
        if (start >= end) {
            break;
        }
        const tempLetter = s[end];
        s[end] = s[start];
        s[start] = tempLetter;
        end--;
    }
    return s
};

console.log(reverseString(["H","a","n","n","a","h"]))