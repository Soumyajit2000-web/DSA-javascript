/* 

Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     const map = new Map();
//     let left = 0;
//     let right = 0;
//     let length = 0
//     for (let i = 0; i < s.length; i++) {
//         if (!map.has(s[right])) { // No match found
//             map.set(s[right]);
//             right++;
//         } else if(map.has(s[right])) { // Repeating character found
//             // first set the length
//             length = Math.max(length, (right-1)-left + 1);
//             left = left + 1;
//         }
//     }

//     return length;
// };

function lengthOfLongestSubstring(s) {
    let maxLen = 0;
    let left = 0;
    const charIndexMap = new Map(); // Stores last seen index of each character
    
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        
        // If duplicate exists in current window, shrink window from left
        if (charIndexMap.has(char) && charIndexMap.get(char) >= left) {
            left = charIndexMap.get(char) + 1;
        }
        
        // Update maximum length found so far
        maxLen = Math.max(maxLen, right - left + 1);
        
        // Record/update character's latest index
        charIndexMap.set(char, right);
    }
    
    return maxLen;
}

const s = "pwwkew"
console.log(lengthOfLongestSubstring(s));