/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stringStack = s.split('');
    const parenthesisMap = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    const openBracketStack = [];
    for (let i = 0; i<stringStack.length; i++) {
        if (Object.keys(parenthesisMap).includes(stringStack[i])) {
            openBracketStack.push(stringStack[i]);
            console.log({openBracketStack})
        } else {
            const n = openBracketStack.length
            if (n > 0){
                const openBracket = openBracketStack[n-1]
                if (parenthesisMap[openBracket] === stringStack[i]) {
                    openBracketStack.pop();
                } else {
                    return false;
                }
            } 

            if (!n && stringStack.length) {
                return false
            }
        }
    }
    console.log({openBracketStack})


    if (openBracketStack.length > 0) return false;
    return true;
};

const s = "]"
console.log(isValid(s))