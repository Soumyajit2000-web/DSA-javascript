/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sortS = s.split("").sort().join("");
    const sortT = t.split("").sort().join("");
    console.log({sortS, sortT})
    if (sortS === sortT) {
        return true;
    }

    return false;
};

const s = "anagram"
const t = "nagaram"

console.log(isAnagram(s,t));