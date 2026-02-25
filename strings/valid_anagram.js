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
var isAnagram = function (s, t) {
  const chCount = new Map();
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (chCount.has(ch)) {
      const count = chCount.get(ch);
      chCount.set(ch, count+1);
    } else {
      chCount.set(ch, 1);
    }
  }

  console.log(chCount);

  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    if (chCount.has(ch)) {
      const count = chCount.get(ch);
      chCount.set(ch, count-1);
    } else {
      return false;
    }
  }

  console.log(chCount);



  for (let val of chCount.values()){
    if(val>0 || val<0){
        return false
    }
  }

  return true;
};

const s = "abcdefghijklmnopqrstuvwxyz";
const t = "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz";

console.log(isAnagram(s, t));
